'use server';

import * as auth from '@/auth';

export async function Login() {
  return auth.signIn;
}
