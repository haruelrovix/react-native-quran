import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './Header.styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Translation</Text>
    </SafeAreaView>
  );
};

export default Header;
