'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';
import ButtonSubmit from '../common/button-submit';

interface CreatePostProps {
  slug: string;
}

const CreatePostForm = (props: CreatePostProps) => {
  const [useForm, action] = useFormState(actions.createPost, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger className="flex justify-center">
        <Button color="primary" className="m-auto w-full">
          Create Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 w-80 p-4 ">
            <h1 className="font-bold">Create Post </h1>

            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Add title"
              isInvalid={!!useForm.errors.title}
              errorMessage={useForm.errors.title?.join(', ')}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Add Content for your post"
              isInvalid={!!useForm.errors.content}
              errorMessage={useForm.errors.content?.join(', ')}
            />
            <Input type="hidden" name="slug" value={props.slug}></Input>
            <ButtonSubmit> Create </ButtonSubmit>

            {useForm.errors._form && (
              <div className="border-danger-300">
                {useForm.errors._form.join(', ')}
              </div>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreatePostForm;
