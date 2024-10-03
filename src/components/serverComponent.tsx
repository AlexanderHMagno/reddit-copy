import { auth } from '../auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return <h1>Not logged in as server componenet</h1>;

  return (
    <div>
      <h1>Logged as server component {JSON.stringify(session.user)}</h1>
    </div>
  );
}
