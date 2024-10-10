'use client';
import {
  PopoverContent,
  PopoverTrigger,
  Button,
  Textarea,
  Input,
  Popover,
} from '@nextui-org/react';

import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import ButtonSubmit from '../common/button-submit';

export function CreateTopicForm() {
  const [formData, action] = useFormState(actions.createTopic, { errors: {} });

  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger className="flex">
          <Button color="primary" className="m-auto">
            Create a New Topic
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 w-80 p-4 ">
              <h2 className=" font-bold  text-lg">Create Topic</h2>
              <Input
                label="Topic"
                labelPlacement="outside"
                name="topic"
                type="text"
                placeholder="Label Name"
                isInvalid={!!formData.errors.topic}
                errorMessage={formData.errors.topic?.join(', ')}
              ></Input>
              <Textarea
                label="Description"
                labelPlacement="outside"
                name="description"
                placeholder="Please add a description for this new topic"
                size="lg"
                isInvalid={!!formData.errors.description}
                errorMessage={formData.errors.description?.join(', ')}
              />
              <ButtonSubmit>Create</ButtonSubmit>
              {formData.errors._form && (
                <div className="bg-red-500 text-white rounded-md p-4">
                  {formData.errors._form.join(', ')}
                </div>
              )}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
