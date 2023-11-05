"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
export const Library = () => {
  const handleClick = () => {
    //TODO: handle upload later,
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
          onClick={handleClick}
          size={26}
          className="text-neutral-400 hover:text-white cursor-pointer transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">Songs</div>
    </div>
  );
};
