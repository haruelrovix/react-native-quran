import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TranslationScreen from '../screens/TranslationScreen';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
    },
    Translation: {
      screen: TranslationScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
