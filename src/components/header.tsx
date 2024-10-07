import React from 'react';
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  NavbarItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

import * as actions from '@/actions';

import { auth } from '@/auth';

export default async function Header() {
  const session = await auth();

  let content: React.ReactNode;
  if (session && session.user) {
    content = (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.user.image || ''} />
          </PopoverTrigger>
          <PopoverContent>
            <form action={actions.Logout}>
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

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Brandiita</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent className="justify-end" justify="end">
        {content}
      </NavbarContent>
    </Navbar>
  );
}
