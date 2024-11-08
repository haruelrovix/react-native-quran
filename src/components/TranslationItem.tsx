import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TranslationItemProps = {
  title: string;
  language: string;
  isDownloaded: boolean;
  disabled: boolean;
  onLongPress: (event: GestureResponderEvent) => void;
};

const TranslationItem = ({
  title,
  language,
  isDownloaded,
  onLongPress,
  disabled,
}: TranslationItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onLongPress={onLongPress}
        disabled={disabled}>
        <Text>{isDownloaded ? '-' : '↓'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 16,
  },
  language: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    padding: 5,
  },
});

export default TranslationItem;
