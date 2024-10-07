import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import HeaderAuth from './header-auth';

export default async function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Brandiita</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent className="justify-end" justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
