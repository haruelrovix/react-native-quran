import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DownloadedScreen from '../screens/DownloadedScreen';
import SurahListScreen from '../screens/SurahListScreen';
import { useStore } from '../hooks/useStore';

const queryClient = new QueryClient();

export type RootStackParamList = {
  Home: undefined;
  Translation: undefined;
};

function TranslationScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const { editions } = useStore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView>
            <DownloadedScreen />
            <SurahListScreen surahNumber={114} identifiers={editions} />
          </ScrollView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default TranslationScreen;
