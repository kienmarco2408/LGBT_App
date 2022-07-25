import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import VideoCard from './video.card';

function VideoList(props) {
  const [lists, setList] = useState([
    {
      id: '1',
      videos: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      thumbnail:
        'https://login.medlatec.vn//ImagePath/images/20201019/20201019_lgbt-la-gi.jpg',
      description:
        'Apple opens another megastore in China amid William Barr criticism',
    },
    {
      id: '2',
      videos: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      thumbnail:
        'https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2022/01/lgbt-la-gi-8-jpg-1641974273-12012022145753.jpg',
      description:
        'Spaceflight Inc. debuts new orbital transfer vehicle for satellite rideshare rocket launches',
    },
    {
      id: '3',
      videos: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      thumbnail:
        'https://kenh14cdn.com/zoom/320_200/203336854389633024/2022/6/4/photo1654320900754-16543209009961347320857.png',
      description:
        'The Calm meditation app is getting its own celebrity-filled HBO Max show',
    },
  ]);

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <View style={{ height: 34, width: 70, left: 27, marginTop: 10 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'left',
          }}
        >
          Video
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexDirection: 'column' }}>
        {lists.map((eachList) => (
          <Lit list={eachList} key={eachList.id} />
        ))}
      </ScrollView>
    </View>
  );
}

export default VideoList;
