import React from 'react';
import { Button, SafeAreaView, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './HomeScreen.styles';

export type RootStackParamList = {
  Home: undefined;
  Translation: undefined;
};

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View>
        <Text style={styles.header}>Al Quran app built using React Native</Text>
        <Text style={styles.text}>and following stacks:</Text>
        <Text style={styles.list}>- React Native Gesture Handler</Text>
        <Text style={styles.list}>- React Native Reanimated</Text>
        <Text style={styles.list}>- React Navigation</Text>
        <Text style={styles.list}>- TanStack Query</Text>
        <Text style={styles.list}>- Zustand</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.subheader}>Data is retrieved from:</Text>
        <Text style={styles.text}>https://alquran.cloud</Text>
      </View>
      <View style={styles.source}>
        <Text style={styles.subheader}>Source code:</Text>
        <Text style={styles.text}>
          https://github.com/haruelrovix/react-native-quran
        </Text>
      </View>
      <Button
        onPress={() => navigate('Translation')}
        title="Go to سُورَةُ النَّاسِ" />
    </SafeAreaView>
  );
}

export default HomeScreen;
