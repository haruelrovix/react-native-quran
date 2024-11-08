import { StyleSheet } from 'react-native';
import { COLOR_PALLETE } from '../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    padding: 15,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeader: {
    marginRight: 40,
    fontSize: 18,
    color: COLOR_PALLETE.silverStorm,
  },
});
