import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import NewsCardSearch from './news.card.search';
import { FlatList } from 'react-native';

export const NewsListSearch = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: 'Any mechanical keyboard enthusiasts in design?',
      title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
      url: 'https://i.pinimg.com/736x/a6/1c/a0/a61ca0f98cf9d5ec90eb0601831efe52.jpg',
    },
    {
      name: 'How to design a product that can grow itself 10x in year:',
      title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
      url: 'https://mcdn.coolmate.me/image/September2021/lgbt-7.jpg',
    },
    {
      name: 'The More Important the Work, the More Important the Rest',
      title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
      url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/3107/production/_123015521_gettyimages-1233663229.jpg',
    },
    {
      name: 'Polish and Ukrainian activists march for LGBTQ rights in Warsaw',
      title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQesyZzeiU8bfobR77x4PStnMcIqu18evjQ&usqp=CAU',
    },
  ]);
  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(eachNews) => eachNews.name}
        renderItem={({ item }) => (
          <NewsCardSearch news_card_search={item} key={item.name} />
        )}
      ></FlatList>
    </View>
  );
};
