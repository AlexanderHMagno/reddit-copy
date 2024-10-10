'use server';

import { db } from '@/db';
import { z } from 'zod';
import type { Post } from '@prisma/client';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { path } from '@/paths';
import { redirect } from 'next/navigation';

const PostSchemaProps = z.object({
  title: z.string().min(3, { message: 'Provide a longer title' }),
  content: z.string().min(10, { message: 'Provide a longer content' }),
  slug: z.string(),
});

interface stateProps {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  useState: stateProps,
  formData: FormData
): Promise<stateProps> {
  //validate User authenticated

  const authenticated = await auth();

  if (!authenticated?.user) {
    return {
      errors: {
        _form: ['Please Login to create a post'],
      },
    };
  }

  //Validation Inputs
  const validation = PostSchemaProps.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    slug: formData.get('slug'),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  //find Slug id
  const topic = await db.topic.findFirst({
    where: { slug: validation.data.slug },
  });

  //Validate topic
  if (!topic) {
    return {
      errors: {
        _form: ['Topic doesnt exists'],
      },
    };
  }

  const { content, title, slug } = validation.data;
  // //Now that we have validate Data, authentication, Topic, we can create the Post
  let post: Post;
  try {
    post = await db.post.create({
      data: {
        content,
        title,
        topicId: topic.id,
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

  //Revalidate Cache
  revalidatePath(path.viewTopic(slug));
  redirect(path.viewPost(slug, post.id));

  return { errors: {} };
}
