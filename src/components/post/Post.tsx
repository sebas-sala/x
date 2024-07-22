import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart2,
  Bookmark,
  Heart,
  MessageCircleIcon,
  Repeat2,
} from "lucide-react";

const postActions = [
  {
    name: "Comment",
    icon: () => <MessageCircleIcon size={16} />,
  },
  {
    name: "Retweet",
    icon: () => <Repeat2 size={16} />,
  },
  {
    name: "Like",
    icon: () => <Heart size={16} />,
  },
  {
    name: "Views",
    icon: () => <BarChart2 size={16} />,
  },
  {
    name: "Bookmark",
    icon: () => <Bookmark size={16} />,
  },
];

export default function Post() {
  return (
    <>
      <div className="col-span-1">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="col-span-11">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-2">
            <p className="font-bold">Chad</p>
            <p className="text-gray-500 space-x-1">
              <span>@chad</span>
              <span>·</span>
              <span>6h</span>
            </p>
          </div>
          <p className="text-gray-500">@chad</p>

          <div className="my-2 rounded-xl border h-[400px]"></div>

          <div className="flex justify-between w-full">
            {postActions.map((item) => (
              <div
                className="flex gap-2 cursor-pointer items-center"
                key={item.name}
              >
                {item.icon()}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
