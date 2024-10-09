import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import HeaderAuth from './header-auth';
import Link from 'next/link';
import { path } from '@/paths';

export default async function Header() {
  return (
    <Navbar shouldHideOnScroll className="mb-10">
      <NavbarBrand>
        <Link href={path.homePage()} className="font-bold text-inherit">
          Brandiita
        </Link>
      </NavbarBrand>
      <NavbarContent className="w-1/4 gap-4" justify="center">
        <Input className="w-full" />
      </NavbarContent>
      <NavbarContent className="justify-end" justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
