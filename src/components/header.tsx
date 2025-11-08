import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="border-black/10 border-b h-10 flex items-center justify-between px-5">
      <Link href="/">
        <Image
          src="https://avatars.githubusercontent.com/u/117098624?v=4"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full"
          priority
        />
      </Link>
      <LogoutLink className="text-sm text-gray-700">Logout</LogoutLink>
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
