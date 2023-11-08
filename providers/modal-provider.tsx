"use client";

import { Modal } from "@/components/modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Modal
        isOpen
        title="Test Modal"
        description="Test modal again"
        onChange={() => {}}
      >
        Test Modal man
      </Modal>
    </>
  );
};
