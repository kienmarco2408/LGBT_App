import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Button_News } from '../../../components/homescreen/button.news';
import { Button_Tags } from '../../../components/homescreen/button.tags';
import { Slider } from '../../../components/homescreen/slider';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.xuhuong}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Xu hướng</Text>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 16 }}>
          <Button_Tags />
        </View>
        <Slider />
        <View style={{ marginLeft: 10, marginBottom: 16, marginTop: 16 }}>
          <Button_News />
        </View>
        <NewsList />
      </ScrollView>
    </SafeAreaView>
  );
}

const NewsList = () => {
  const navigation = useNavigation();
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail News')}
              >
                <View
                  style={{
                    height: 130,
                    paddingStart: 10,
                    paddingTop: 5,
                    flexDirection: 'row',
                  }}
                >
                  <View>
                    <Image
                      style={{
                        width: 118,
                        height: 118,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                      source={{
                        uri: item.url,
                      }}
                    />
                  </View>
                  <View style={{ right: 35, marginTop: 5 }}>
                    <Ionicons
                      name="bookmarks-outline"
                      size={23}
                      color="black"
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: 20,
                        marginLeft: 10,
                        fontWeight: 'bold',
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

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
