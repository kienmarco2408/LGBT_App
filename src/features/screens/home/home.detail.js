import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NewsDetailList } from '../../../components/homescreen/detail/detaillist';
import { NewsList } from '../../../components/homescreen/news/news.list';

export default function DetailNews({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 2 }}>
        <NewsDetailList />
        <View style={{ paddingVertical: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Bài Viết Liên Quan
          </Text>
        </View>
        <View>
          <NewsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
