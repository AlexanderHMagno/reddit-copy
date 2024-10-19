'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { path } from '@/paths';
import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
import { z } from 'zod';

interface createCommentProps {
  errors: {
    comment?: string[];
    postId?: string[];
    _form?: string[];
  };
}

const CommentSchemaProps = z.object({
  comment: z.string().min(3, { message: 'Provide a longer comment' }),
  postId: z.string(),
});

export async function createComment(
  useState: createCommentProps,
  formData: FormData
): Promise<createCommentProps> {
  //check user is logged in

  const authenticated = await auth();

  if (!authenticated?.user) {
    return {
      errors: {
        _form: ['Please Login to create a post'],
      },
    };
  }

  const slug = formData.get('slug') as string;

  //Validation :
  const validation = CommentSchemaProps.safeParse({
    comment: formData.get('comment'),
    postId: formData.get('postId'),
  });

  if (validation.error) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  //Create the comment

  const { comment, postId } = validation.data;
  try {
    await db.comment.create({
      data: {
        content: comment,
        postId: postId,
        userId: authenticated.user.id || '',
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ['Something went Wrong'] } };
    }
  }

  revalidatePath(path.viewPost(slug, postId));
  // redirect(path.viewPost(slug, postId));

  return { errors: {} };
}
