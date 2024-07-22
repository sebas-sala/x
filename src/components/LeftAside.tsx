"use client";

import { usePathname } from "next/navigation";

import NavLink from "./NavLink";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { navData } from "@/data/nav-data";
import PostButton from "./PostButton";

export default function LeftAside() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-full flex flex-col">
        <div>
          <ul className="space-y-2">
            {navData.map((item) => (
              <li key={item.name}>
                <NavLink href={item.href} isActive={pathname === item.href}>
                  {item.icon && item.icon()}

                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <PostButton />
          </div>
        </div>
        <div className="mt-auto">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
