import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NewsListSearch } from '../../../components/searchscreen/searchdetailscreen/news/news.list.search';

export default function DetailSearch({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <NewsListSearch />
      </View>
    </SafeAreaView>
  );
}
