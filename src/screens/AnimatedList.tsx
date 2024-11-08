import React from 'react';
import { ScrollView, View } from 'react-native';

import { useSharedValue } from 'react-native-reanimated';
import { ListItem } from '../components/ListItem';
import { getInitialPositions, ITEMS, ITEM_HEIGHT } from '../constants';
import { styles } from './AnimatedList.styles';
import { NullableNumber, TItemPositions } from '../types';

export const AnimatedList = ({ draggable }: { draggable: boolean }) => {
  // will hold the items position in list at every moment
  const currentItemPositions = useSharedValue<TItemPositions>(
    getInitialPositions(),
  );

  // used to know if drag is happening or not
  const isDragging = useSharedValue<number>(0);

  // this will hold id for item which user started dragging
  const draggedItemId = useSharedValue<NullableNumber>(null);

  return (
    <View style={styles.listContainer}>
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={{ height: ITEMS.length * ITEM_HEIGHT }}>
        {ITEMS.map(item => (
          <ListItem
            item={item}
            key={item.id}
            isDragging={isDragging}
            draggedItemId={draggedItemId}
            currentItemPositions={currentItemPositions}
            isDraggable={draggable}
          />
        ))}
      </ScrollView>
    </View>
  );
};
