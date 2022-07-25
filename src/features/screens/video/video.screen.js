import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import VideoList from '../../../components/video/video.list';

export default function VideoScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <VideoList />
      </View>
    </SafeAreaView>
  );
}
