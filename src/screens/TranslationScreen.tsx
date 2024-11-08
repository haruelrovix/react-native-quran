import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './TranslationScreen.styles';
import { AnimatedList } from './AnimatedList';
import Header from '../components/Header';

const TranslationScreen = () => {
  const [draggable, setDraggable] = useState<boolean>(false);

  const toggleDraggable = () => {
    setDraggable(!draggable);
  };

  return (
    <View style={styles.container}>
      <Header />
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

export default TranslationScreen;
