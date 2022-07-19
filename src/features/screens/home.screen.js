import React from 'react';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Button_News } from '../../components/homescreen/button.news';
import { Button_Tags } from '../../components/homescreen/button.tags';
import { Slider } from '../../components/homescreen/slider';
import { NewsList } from '../../components/homescreen/news/news.list';
import { ScrollView } from 'react-native';

export default function HomeScreen({ navigation }){
    return (
      <SafeAreaView style={styles.container}>
        
          <View style={styles.xuhuong}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Xu Hướng</Text>
          </View>
          <Button_Tags/>
          <Slider />
          <Button_News />
          <ScrollView>
            <NewsList/>
          </ScrollView>

      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    xuhuong:{ 
      padding: 30, 
      paddingLeft: 16,
    },
    button_tags: {
        borderColor: "#F5344B",
    }
});
  