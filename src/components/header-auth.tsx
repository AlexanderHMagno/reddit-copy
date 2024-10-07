'use client';

import React from 'react';
import {
  Avatar,
  NavbarItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

import * as actions from '@/actions';
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {
  const session = useSession();

  let content: React.ReactNode;
  if (session.status == 'loading') {
    content = '';
  } else if (session && session?.data) {
    content = (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              className="cursor-pointer"
              src={session.data?.user?.image || ''}
            />
          </PopoverTrigger>
          <PopoverContent>
            <form
              action={async () => {
                await actions.Logout();
                await nextAuthSignOut({ redirect: false });
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  } else {
    content = (
      <>
        <NavbarItem>
          <form action={actions.Login}>
            <Button type="submit" color="primary">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.Login}>
            <Button type="submit" color="default">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return content;
}
