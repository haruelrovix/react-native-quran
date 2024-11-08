import { SharedValue } from 'react-native-reanimated';
import { TItemPositions } from '../types';
import { ITEMS } from '../constants';

export const transformEditions = (items: SharedValue<TItemPositions>) =>
  Object.values(items.value).map(
    item => ITEMS.find(dict => dict.id === item.updatedIndex)?.identifier,
  );
