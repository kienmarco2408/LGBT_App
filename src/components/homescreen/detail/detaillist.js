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
import NewsDetail from './detail';

export const NewsDetailList = () => {
  const navigation = useNavigation();

  const [newsDetail, setNewsDetail] = useState([
    {
      name: 'Any mechanical keyboard enthusiasts in design?',
      author: 'By Steven W.Thrasher | May 30, 2022 - 12:24',
      title:
        "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
      sub: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.',
      url: 'https://i.pinimg.com/736x/a6/1c/a0/a61ca0f98cf9d5ec90eb0601831efe52.jpg',
      url_2:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1D-bpfPOJs9Y8HTJzakCyj_MBo1S6DGwGm6UzLSjBDApzeh_A8QmwU5IWkZuu7tf_Qs&usqp=CAU',
    },
  ]);

  return (
    <View>
      {newsDetail.map((eachItem) => (
        <NewsDetail news_card={eachItem} key={eachItem.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
