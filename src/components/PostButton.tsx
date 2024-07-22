import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { AtSign, Globe, UserRoundCheck } from "lucide-react";

export default function PostButton() {
  const [open, setOpen] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  const isDesktop = useMediaQuery({
    mediaQuery: "(min-width: 768px)",
  });

  const handlePrivacyChange = (value: string) => {
    setPrivacy(value);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-center  w-full bg-sky-500 font-bold py-8 text-lg mt-10 rounded-full">
            Post
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-black text-white ">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              <PostForm
                privacy={privacy}
                handlePrivacyChange={handlePrivacyChange}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="text-center w-full bg-sky-500 font-bold py-4 mt-10 rounded-full">
          Post
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when youre done.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface PostFormProps {
  privacy: string;
  handlePrivacyChange: (value: string) => void;
}

function PostForm({ privacy, handlePrivacyChange }: PostFormProps) {
  const getPrivacyTextAndIcon = () => {
    if (privacy === "public") {
      return {
        text: "Everyone can reply",
        icon: () => <Globe size={16} />,
      };
    }

    if (privacy === "followed") {
      return {
        text: "Accounts you follow",
        icon: () => <UserRoundCheck size={16} />,
      };
    }
    if (privacy === "mentioned") {
      return {
        text: "Only accounts you mention",
        icon: () => <AtSign size={16} />,
      };
    }

    return {
      text: "Private",
      icon: () => <AtSign size={16} />,
    };
  };

  const { text: privacyText, icon: privacyIcon } = getPrivacyTextAndIcon();

  return (
    <form>
      <div className="grid grid-cols-12 space-x-4">
        <div className="col-span-1">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-11">
          <Textarea
            placeholder="What's on your mind, Chad?"
            className="max-h-36"
          />
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-white flex gap-2 items-center"
            >
              {privacyIcon()}
              {privacyText}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Who can reply?</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={privacy}
              onValueChange={handlePrivacyChange}
            >
              <DropdownMenuRadioItem value="public">
                Everyone
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="followed">
                Accounts you follow
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mentioned">
                Only accounts you mention
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator />

      <div></div>
    </form>
  );
}
