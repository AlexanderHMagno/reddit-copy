import { Button } from '@nextui-org/react';
import React from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonInterface {
  children: React.ReactNode;
}
export default function ButtonSubmit({ children }: ButtonInterface) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
