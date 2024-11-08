import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 5,
  },
  list: {
    margin: 2,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  source: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});
