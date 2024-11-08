import { Platform } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {
  COLOR_PALLETE,
  MAX_BOUNDARY,
  MIN_BOUNDARY,
  ITEM_HEIGHT,
} from '../constants';
import { NullableNumber, TItemPositions, TItem } from '../types';

export const useGesture = (
  item: TItem,
  isDragging: SharedValue<number>,
  draggedItemId: SharedValue<NullableNumber>,
  currentItemPositions: SharedValue<TItemPositions>,
) => {
  // used for swapping with currentIndex
  const newIndex = useSharedValue<NullableNumber>(null);

  // used for swapping with newIndex
  const currentIndex = useSharedValue<NullableNumber>(null);

  const currentItemPositionsDerived = useDerivedValue(() => {
    return currentItemPositions.value;
  });
  1;

  const top = useSharedValue(item.id * ITEM_HEIGHT);

  const isDraggingDerived = useDerivedValue(() => {
    return isDragging.value;
  });

  const draggedItemIdDerived = useDerivedValue(() => {
    return draggedItemId.value;
  });

  useAnimatedReaction(
    () => {
      return currentItemPositionsDerived.value[item.id].updatedIndex;
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        if (
          draggedItemIdDerived.value !== null &&
          item.id === draggedItemIdDerived.value
        ) {
          top.value = withSpring(
            currentItemPositionsDerived.value[item.id].updatedIndex *
              ITEM_HEIGHT,
          );
        } else {
          top.value = withTiming(
            currentItemPositionsDerived.value[item.id].updatedIndex *
              ITEM_HEIGHT,
            { duration: 500 },
          );
        }
      }
    },
  );

  const isCurrentDraggingItem = useDerivedValue(() => {
    return isDraggingDerived.value && draggedItemIdDerived.value === item.id;
  });

  const getKeyOfValue = (
    value: number,
    obj: TItemPositions,
  ): number | undefined => {
    'worklet';
    for (const [key, val] of Object.entries(obj)) {
      if (val.updatedIndex === value) {
        return Number(key);
      }
    }
    return undefined; //  Return undefined if the value is not found
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      // start dragging
      isDragging.value = withSpring(1);

      // keep track of dragged item
      draggedItemId.value = item.id;

      // store dragged item id for future swap
      currentIndex.value =
        currentItemPositionsDerived.value[item.id].updatedIndex;
    })
    .onUpdate(e => {
      if (draggedItemIdDerived.value === null) {
        return;
      }

      const newTop =
        currentItemPositionsDerived.value[draggedItemIdDerived.value]
          .updatedTop + e.translationY;

      if (
        currentIndex.value === null ||
        newTop < MIN_BOUNDARY ||
        newTop > MAX_BOUNDARY
      ) {
        // dragging out of bound
        return;
      }
      top.value = newTop;

      // calculate the new index where drag is headed to
      newIndex.value = Math.floor((newTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT);

      // swap the items present at newIndex and currentIndex
      if (newIndex.value !== currentIndex.value) {
        // find id of the item that currently resides at newIndex
        const newIndexItemKey = getKeyOfValue(
          newIndex.value,
          currentItemPositionsDerived.value,
        );

        // find id of the item that currently resides at currentIndex
        const currentDragIndexItemKey = getKeyOfValue(
          currentIndex.value,
          currentItemPositionsDerived.value,
        );

        if (
          newIndexItemKey !== undefined &&
          currentDragIndexItemKey !== undefined
        ) {
          // we update updatedTop and updatedIndex as next time we want to do calculations from new top value and new index
          currentItemPositions.value = {
            ...currentItemPositionsDerived.value,
            [newIndexItemKey]: {
              ...currentItemPositionsDerived.value[newIndexItemKey],
              updatedIndex: currentIndex.value,
              updatedTop: currentIndex.value * ITEM_HEIGHT,
            },
            [currentDragIndexItemKey]: {
              ...currentItemPositionsDerived.value[currentDragIndexItemKey],
              updatedIndex: newIndex.value,
            },
          };

          // update new index as current index
          currentIndex.value = newIndex.value;
        }
      }
    })
    .onEnd(() => {
      if (currentIndex.value === null || newIndex.value === null) {
        return;
      }
      top.value = withSpring(newIndex.value * ITEM_HEIGHT);
      // find original id of the item that currently resides at currentIndex
      const currentDragIndexItemKey = getKeyOfValue(
        currentIndex.value,
        currentItemPositionsDerived.value,
      );

      if (currentDragIndexItemKey !== undefined) {
        // update the values for item whose drag we just stopped
        currentItemPositions.value = {
          ...currentItemPositionsDerived.value,
          [currentDragIndexItemKey]: {
            ...currentItemPositionsDerived.value[currentDragIndexItemKey],
            updatedTop: newIndex.value * ITEM_HEIGHT,
          },
        };
      }
      // stop dragging
      isDragging.value = withDelay(200, withSpring(0));
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: top.value,
      transform: [
        {
          scale: isCurrentDraggingItem.value
            ? interpolate(isDraggingDerived.value, [0, 1], [1, 1.025])
            : interpolate(isDraggingDerived.value, [0, 1], [1, 0.98]),
        },
      ],
      shadowColor: isCurrentDraggingItem.value
        ? interpolateColor(
            isDraggingDerived.value,
            [0, 1],
            [COLOR_PALLETE.metalBlack, COLOR_PALLETE.crystalWhite],
          )
        : undefined,
      shadowOffset:
        Platform.OS === 'ios'
          ? {
              width: 0,
              height: isCurrentDraggingItem.value
                ? interpolate(isDraggingDerived.value, [0, 1], [0, 7])
                : 0,
            }
          : undefined,
      shadowOpacity: isCurrentDraggingItem.value
        ? interpolate(isDraggingDerived.value, [0, 1], [0, 0.2])
        : 0,
      shadowRadius: isCurrentDraggingItem.value
        ? interpolate(isDraggingDerived.value, [0, 1], [0, 10])
        : 0,
      elevation: isCurrentDraggingItem.value
        ? interpolate(isDraggingDerived.value, [0, 1], [0, 5])
        : 0, //  For Android,
      zIndex: isCurrentDraggingItem.value ? 1 : 0,
      borderBottomColor: COLOR_PALLETE.silverStorm,
      borderBottomWidth: 0.2,
    };
  }, [draggedItemIdDerived.value, isDraggingDerived.value]);

  return {
    animatedStyles,
    gesture,
  };
};
