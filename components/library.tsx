"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useUploadModal } from "@/hooks/useUploadModal";
import { Song } from "@/types";
import { MediaItem } from "./media-item";

interface LibraryProps {
  songs: Song[];
}
export const Library = ({ songs }: LibraryProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for subcription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between px-5 pt-4">
        <div
          className="
    inline-flex
    items-center
    gap-x-2
    "
        >
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-md text-neutral-400 font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className="text-neutral-400 hover:text-white cursor-pointer transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem key={item.id} data={item} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};
