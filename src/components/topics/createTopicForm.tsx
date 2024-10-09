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

export function CreateTopicForm() {
  const [formData, action] = useFormState(actions.createTopic, { errors: {} });

  return (
    <div>
      <Popover placement="left" className="w-72">
        <PopoverTrigger>
          <Button color="primary"> Create a New Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-1 w-full h-72">
            <form
              action={action}
              className="flex flex-col justify-evenly h-full"
            >
              <Input
                name="topic"
                type="text"
                placeholder="Label Name"
                isInvalid={!!formData.errors.topic}
                errorMessage={formData.errors.topic?.join(', ')}
              ></Input>
              <Textarea
                name="description"
                placeholder="Please add a description for this new topic"
                size="lg"
                isInvalid={!!formData.errors.description}
                errorMessage={formData.errors.description?.join(', ')}
              />
              <Button type="submit">Create</Button>
              {formData.errors._form && (
                <div className="bg-red-500 text-white rounded-md p-4">
                  {formData.errors._form.join(', ')}
                </div>
              )}
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
