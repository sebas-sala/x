import Post from "@/components/post/Post";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="sticky top-0">
        <Tabs defaultValue="fyp" className="w-full px-0 rounded-none">
          <TabsList className="rounded-none w-full bg-transparent px-0">
            <TabsTrigger
              value="fyp"
              className="flex-1 hover:bg-gray-950 rounded-none hover:text-gray-50"
            >
              For you
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="flex-1 hover:bg-gray-950 rounded-none hover:text-gray-50 active:bg-gray-950 active:text-gray-50
              "
            >
              Following
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fyp">
            <div></div>
            <ul>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <li className="grid grid-cols-12 border-b p-4" key={i}>
                  <Post />
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="following" className="px-4">
            Content 2
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
