import { ColorPalette, TItem, TItemPositions } from './types';

export const ITEM_HEIGHT: number = 60;
export const ITEMS: TItem[] = [
  {
    id: 0,
    title: 'Dr. Mustafa Khattab, The Clear Quran',
    language: 'English',
    isDownloaded: true,
  },
  {
    id: 1,
    title: 'Indonesian Islamic affairs ministry',
    language: 'Bahasa Indonesia',
    isDownloaded: true,
  },
  {
    id: 2,
    title: 'King Fahad Quran Complex',
    language: 'Bahasa Indonesia',
    isDownloaded: true,
  },
];

export const getInitialPositions = (): TItemPositions => {
  let itemPositions: TItemPositions = {};
  for (let i = 0; i < ITEMS.length; i++) {
    itemPositions[i] = {
      updatedIndex: i,
      updatedTop: i * ITEM_HEIGHT,
    };
  }
  return itemPositions;
};

export const COLOR_PALLETE: ColorPalette = {
  metalBlack: '#0E0C0A',
  nightShadow: '#1C1C1C',
  crystalWhite: '#FFFFFF',
  silverStorm: '#808080',
};

export const ANIMATION_DURATION: number = 600;

export const MIN_BOUNDARY: number = 0;
export const MAX_BOUNDARY: number = (ITEMS.length - 1) * ITEM_HEIGHT;
