"use client";

import { create } from "zustand";

type State = {
  isOpened: boolean;
};

type Action = {
  open: () => void;
  close: () => void;
};

const useStore = create<State & Action>((set) => ({
  isOpened: false,
  open: () => set(() => ({ isOpened: true })),
  close: () => set(() => ({ isOpened: false })),
}));

function useNavbarStore(): State & Action {
  return useStore((state) => state);
}

export { useNavbarStore };
