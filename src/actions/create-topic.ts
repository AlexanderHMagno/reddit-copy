'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { path } from '@/paths';
import { z } from 'zod';

const schemaTopic = z.object({
  topic: z
    .string()
    .trim()
    .min(3, { message: 'Topic must be longer' })
    .regex(/^[a-zA-Z-]+$/, {
      message: 'Please only provide Characters and dashes',
    }),
  description: z
    .string()
    .min(10, { message: 'Please Provide a longer description' }),
});

interface stateFormProps {
  errors: {
    topic?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  stateForm: stateFormProps,
  formData: FormData
): Promise<stateFormProps> {
  const validation = schemaTopic.safeParse({
    topic: formData.get('topic'),
    description: formData.get('description'),
  });

  //If validation fails
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  try {
    // once the validation is completed we can proceed to create our new topic
    await db.topic.create({
      data: {
        slug: validation.data.topic,
        description: validation.data.description,
      },
    });
  } catch (error) {
    return {
      errors: {
        _form: [
          error instanceof Error ? error.message : 'Something went wrong',
        ],
      },
    };
  }

  revalidatePath(path.homePage());
  redirect(path.viewTopic(validation.data.topic));

  return {
    errors: {},
  };
  // console.log(validation);

  //Add validation..
  //Revalidate home time based? or on Demand
  // return 'createTopic';
}
