import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import TranslationScreen from '../screens/TranslationScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: TranslationScreen,
      options: {
        header: () => <Header />,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
