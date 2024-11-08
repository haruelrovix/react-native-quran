import React from 'react';
import { Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { SharedValue } from 'react-native-reanimated';

import { styles } from './ListItem.styles';
import { TItemPositions, TListItem } from '../types';
import { useGesture } from '../hooks/useGesture';
import { useStore } from '../hooks/useStore';
import { transformEditions } from '../utils/transformers';

export const ListItem = ({
  item,
  isDragging,
  draggedItemId,
  currentItemPositions,
  isDraggable,
}: TListItem) => {
  const { updateEditions } = useStore();
  const setItems = (items: SharedValue<TItemPositions>) =>
    updateEditions(transformEditions(items));

  const { animatedStyles, gesture } = useGesture(
    item,
    isDragging,
    draggedItemId,
    currentItemPositions,
    setItems,
  );

  return (
    <Animated.View key={item.id} style={[styles.itemContainer, animatedStyles]}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.language}</Text>
      </View>
      {isDraggable ? (
        <GestureDetector gesture={gesture}>
          <Animated.View style={styles.draggerContainer}>
            <View style={[styles.dragger, styles.marginBottom]} />
            <View style={[styles.dragger, styles.marginBottom]} />
            <View style={styles.dragger} />
          </Animated.View>
        </GestureDetector>
      ) : (
        <Animated.View style={styles.draggerContainer}>
          <Text style={styles.deletable}>-</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};
