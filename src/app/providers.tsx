'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProviderInterface {
  children: React.ReactNode;
}
export function Provider({ children }: ProviderInterface) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
