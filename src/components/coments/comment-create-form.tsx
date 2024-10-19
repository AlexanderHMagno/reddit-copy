'use client';
import { Input, Textarea } from '@nextui-org/react';
import React from 'react';
import ButtonSubmit from '../common/button-submit';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

type Props = {
  postId?: string;
  slug?: string;
};

const CommentCreateForm = (props: Props) => {
  const [useForm, action] = useFormState(actions.createComment, { errors: {} });

  console.log(useForm);
  return (
    <div className="m-5">
      <form action={action}>
        <Textarea
          className="my-5"
          name="comment"
          label={'Add Your Comment'}
          isInvalid={!!useForm?.errors.comment}
          errorMessage={useForm?.errors.comment?.join('')}
        />
        <Input type="hidden" value={props.postId} name="postId" />
        <Input type="hidden" value={props.slug} name="slug" />
        <ButtonSubmit>Save</ButtonSubmit>
      </form>
    </div>
  );
};

export default CommentCreateForm;
