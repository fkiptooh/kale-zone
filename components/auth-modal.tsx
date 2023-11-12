"use client";

import { Modal } from "./modal";

export const AuthModal = () => {
  return (
    <Modal
      title="Welcome back"
      description="Log in to your account"
      isOpen
      onChange={() => {}}
    >
      Auth Modal Children
    </Modal>
  );
};
