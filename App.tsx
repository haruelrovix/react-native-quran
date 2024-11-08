/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import TranslationScreen from './src/screens/TranslationScreen';
import SurahListScreen from './src/screens/SurahListScreen';
import { useStore } from './src/hooks/useStore';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { editions } = useStore();
  // const identifiers = ['en.asad', 'id.indonesian'];

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
            <TranslationScreen />
            <SurahListScreen surahNumber={114} identifiers={editions} />
          </ScrollView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
