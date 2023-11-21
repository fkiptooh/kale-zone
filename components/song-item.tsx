"use client";

import { useLoadSongImage } from "@/hooks/useLoadSongImage";
import { Song } from "@/types";
import Image from "next/image";
import { PlayButton } from "./play-button";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}
export const SongItem = ({ data, onClick }: SongItemProps) => {
  const imagePath = useLoadSongImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 cursor-pointer bg-neutral-400/5 hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full gap-y-1 pt-4">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 left-5">
        <PlayButton />
      </div>
    </div>
  );
};
