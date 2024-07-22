"use client";

import { usePathname } from "next/navigation";

import NavLink from "./NavLink";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { navData } from "@/data/nav-data";

export default function RightAside() {
  const pathname = usePathname();

  return (
    <aside>
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
          <button className="text-center w-full bg-sky-500 font-bold py-4 mt-10 rounded-full">
            Post
          </button>
        </div>
        <div className="mt-auto">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </aside>
  );
}
