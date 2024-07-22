import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function NavLink({ href, children, isActive }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "space-x-4 relative flex hover:bg-gray-700 p-3 w-fit rounded-full text-xl items-center gap-2 font-medium leading-6 ",
        isActive && "font-black"
      )}
    >
      {children}
    </Link>
  );
}
