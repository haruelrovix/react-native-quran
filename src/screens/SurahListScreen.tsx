import React from 'react';
import { View } from 'react-native';
import SurahScreen from '../components/SurahScreen';
import { styles } from './SurahListScreen.styles';

interface SurahListScreenProps {
  surahNumber: number;
  identifiers: string[];
}

const SurahListScreen = ({
  surahNumber,
  identifiers,
}: SurahListScreenProps) => {
  return (
    <View style={styles.container}>
      {identifiers.map(identifier => (
        <SurahScreen
          key={identifier}
          surahNumber={surahNumber}
          identifier={identifier}
        />
      ))}
    </View>
  );
};

export default SurahListScreen;
