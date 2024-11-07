import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import TranslationItem from '../components/TranslationItem';

interface TranslationItemType {
  id: string;
  title: string;
  language: string;
  isDownloaded: boolean;
}

const downloadedItems: TranslationItemType[] = [
  { id: '1', title: 'Dr. Mustafa Khattab, The Clear Quran', language: 'English', isDownloaded: true },
  { id: '2', title: 'Indonesian Islamic affairs ministry', language: 'Bahasa Indonesia', isDownloaded: true },
  { id: '3', title: 'King Fahad Quran Complex', language: 'Bahasa Indonesia', isDownloaded: true },
];

const TranslationScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.sectionTitle}>Downloaded</Text>
      <FlatList
        data={downloadedItems}
        renderItem={
          ({ item }) =>
          <TranslationItem
            title={item.title}
            language={item.language}
            isDownloaded={item.isDownloaded}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
});

export default TranslationScreen;
