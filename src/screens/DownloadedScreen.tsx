import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './DownloadedScreen.styles';
import { AnimatedList } from './AnimatedList';

const DownloadedScreen = () => {
  const [draggable, setDraggable] = useState<boolean>(false);

  const toggleDraggable = () => {
    setDraggable(!draggable);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.sectionTitle}>Downloaded</Text>
        <TouchableOpacity onPress={toggleDraggable}>
          <Text style={styles.sectionHeader}>▲▼</Text>
        </TouchableOpacity>
      </View>
      <AnimatedList draggable={draggable} />
    </View>
  );
};

export default DownloadedScreen;
