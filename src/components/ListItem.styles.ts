import { StyleSheet } from 'react-native';
import { COLOR_PALLETE, ITEM_HEIGHT } from '../constants';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: ITEM_HEIGHT,
    position: 'absolute',
    backgroundColor: COLOR_PALLETE.crystalWhite,
  },
  descriptionContainer: {
    width: '80%',
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 3,
  },
  subtitle: {
    color: COLOR_PALLETE.silverStorm,
    fontSize: 12,
  },
  draggerContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 5,
  },
  dragger: {
    width: '30%',
    height: 2,
    backgroundColor: COLOR_PALLETE.silverStorm,
  },
  deletable: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
