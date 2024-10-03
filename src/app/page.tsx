import Dashboard from '@/components/clientComponent';
import UserAvatar from '@/components/serverComponent';
import SignIn from '@/components/signIn';
import SignOut from '@/components/signOut';
// import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <div>
      <SignIn />
      <SignOut />
      <UserAvatar />
      <Dashboard />
    </div>
  );
}
