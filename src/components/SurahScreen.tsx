import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { fetchSurah } from '../services/quranService';
import { styles } from './SurahScreen.styles';

type SurahScreenProps = { surahNumber: number; identifier: string | undefined };

const SurahScreen = ({ surahNumber, identifier }: SurahScreenProps) => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['surahData', surahNumber, identifier],
    queryFn: () => fetchSurah(surahNumber, identifier),
  });

  if (isFetching) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>({identifier})</Text>
      <Text style={styles.title}>
        Surah {surahNumber}: {data.name}
      </Text>
      {data.ayahs.map((ayah: any) => (
        <Text key={ayah.number} style={styles.ayah}>
          {ayah.numberInSurah}) {ayah.text}
        </Text>
      ))}
    </View>
  );
};

export default SurahScreen;
