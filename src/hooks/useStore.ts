import { create } from 'zustand';

interface AppState {
  editions: string[];
}

export const useStore = create<AppState>(() => ({
  editions: ['en.asad', 'id.indonesian']
}));
