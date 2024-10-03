'use client';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (session?.user) {
    return <p>You are logged as Client Component!</p>;
  }

  return <p>You are not Logged as Client component</p>;
}
