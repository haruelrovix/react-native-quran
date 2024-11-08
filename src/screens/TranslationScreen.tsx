import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './TranslationScreen.styles';
import { AnimatedList } from './AnimatedList';
import Header from '../components/Header';

const TranslationScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.sectionTitle}>Downloaded</Text>
      <AnimatedList />
    </View>
  );
};

export default TranslationScreen;
