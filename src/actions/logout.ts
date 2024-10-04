'use server';

import { signOut } from '@/auth';

export const Logout = () => {
  return signOut;
};
