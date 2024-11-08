import { create } from 'zustand';
import { EDITIONS } from '../constants';

interface AppState {
  editions: (string | undefined)[];
  updateEditions: (newEditions: (string | undefined)[]) => void;
}

export const useStore = create<AppState>(set => ({
  editions: EDITIONS,
  updateEditions: newEditions => set({ editions: newEditions }),
}));
