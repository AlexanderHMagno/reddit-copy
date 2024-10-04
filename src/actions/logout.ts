'use server';

import * as auth from '@/auth';

export async function Logout() {
  return auth.signOut;
}
