import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Button_News } from '../../../components/homescreen/button.news';
import { Button_Tags } from '../../../components/homescreen/button.tags';
import { Slider } from '../../../components/homescreen/slider';
import { NewsList } from '../../../components/homescreen/news/news.list';
import { ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.xuhuong}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Xu hướng</Text>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 10 }}>
          <Button_Tags />
        </View>
        <Slider />
        <View style={{ marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
          <Button_News />
        </View>
        <NewsList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  xuhuong: {
    padding: 20,
    paddingLeft: 16,
  },
  button_tags: {
    borderColor: '#F5344B',
  },
});
