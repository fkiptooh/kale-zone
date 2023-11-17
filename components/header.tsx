"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch } from "react-icons/hi";
import { Button } from "./button";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { Modal } from "./modal";
import { useState } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
export const Header = ({ children, className }: HeaderProps) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    // TODO: Reset any playing song;

    router.refresh();

    if (error) {
      console.log(error);
    }
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const confirmLogout = async () => {
    await handleLogout();
    closeLogoutModal();
  };

  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                className="bg-white px-6 py-2"
                onClick={() => setIsLogoutModalOpen(true)}
              >
                Logout
              </Button>
              <Button
                className="bg-white"
                onClick={() => router.push(`/account`)}
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
      {isLogoutModalOpen && (
        <Modal isOpen={true} onChange={closeLogoutModal} title="Confirm Logout">
          <div>
            <p className="flex items-center justify-center">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end mt-4">
              <Button className="mr-4 bg-white" onClick={confirmLogout}>
                Confirm
              </Button>
              <Button className="bg-white" onClick={closeLogoutModal}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
