import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TranslationItemPros {
  title: string;
  language: string;
  isDownloaded: boolean;
}

const TranslationItem: React.FC<TranslationItemPros> = ({ title, language, isDownloaded }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
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
