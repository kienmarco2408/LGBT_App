import React, { Component, useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  VirtualizedList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NewsList } from '../news/news.list';

export default function NewsDetail(props) {
  const { name, author, title, sub, url, url_2 } = props.news_card;

  return (
    <View>
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{sub}</Text>
        <Image
          style={{
            width: 321,
            height: 196,
            marginHorizontal: 35,
          }}
          source={{ uri: url_2 }}
        />
        <Text style={styles.content}>{sub}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 420,
    height: 375,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title_2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
});
