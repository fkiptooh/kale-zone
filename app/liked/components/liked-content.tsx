"use client";

import { LikedButton } from "@/components/liked-button";
import { MediaItem } from "@/components/media-item";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Song[];
}
export const LikedContent = ({ songs }: LikedContentProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, router, user]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked songs
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};
