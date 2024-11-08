import { SharedValue } from 'react-native-reanimated';

export type TItem = {
  id: number;
  title: string;
  language: string;
  isDownloaded: boolean;
  identifier: string;
};

export type TListItem = {
  item: TItem;
  isDragging: SharedValue<number>;
  draggedItemId: SharedValue<NullableNumber>;
  currentItemPositions: SharedValue<TItemPositions>;
  isDraggable: boolean;
};

export type TItemPositions = {
  [key: number]: {
    updatedIndex: number;
    updatedTop: number;
  };
};

export type NullableNumber = null | number;
