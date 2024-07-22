import {
  HomeIcon,
  HashIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  MoreHorizontalIcon,
} from "lucide-react";

export const navData = [
  { name: "Home", href: "/home", icon: () => <HomeIcon /> },
  { name: "Explore", href: "/explore", icon: () => <HashIcon /> },
  { name: "Notifications", href: "/notifications", icon: () => <BellIcon /> },
  { name: "Messages", href: "/messages", icon: () => <InboxIcon /> },
  { name: "Bookmarks", href: "/bookmarks", icon: () => <BookmarkIcon /> },
  { name: "Lists", href: "/lists", icon: () => <ClipboardIcon /> },
  { name: "Profile", href: "/profile", icon: () => <UserIcon /> },
  { name: "More", href: "/more", icon: () => <MoreHorizontalIcon /> },
];
