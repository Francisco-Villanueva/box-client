"use client";
import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = isModalOpen ? closeModal : openModal;
  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  };
}
