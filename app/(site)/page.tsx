import { getSongs } from "@/actions/getSongs";
import { Header } from "@/components/header";
import { ListItem } from "@/components/list-item";
import { PageContent } from "./components/page-content";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="bg-neutral-900 w-full h-full rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/images/liked.jpg" name="Liked Songs" href="" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl text-semibold">Newest Songs</h1>
        </div>
        {/* TODO: songs components card to build */}
        <PageContent />
      </div>
    </div>
  );
}
