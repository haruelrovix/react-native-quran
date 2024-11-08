import { SharedValue } from 'react-native-reanimated';

export type TItem = {
  id: number;
  title: string;
  language: string;
  isDownloaded: boolean;
};

export type TListItem = {
  item: TItem;
  isDragging: SharedValue<number>;
  draggedItemId: SharedValue<NullableNumber>;
  currentItemPositions: SharedValue<TItemPositions>;
};

export type TItemPositions = {
  [key: number]: {
    updatedIndex: number;
    updatedTop: number;
  };
};

export type ColorPalette = {
  [key: string]: string;
};

export type NullableNumber = null | number;
