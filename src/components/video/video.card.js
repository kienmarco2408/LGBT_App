import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
  Button,
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Icon from 'react-native-ionicons';

function VideoCard(props) {
  let { videos, thumbnail, description } = props.list;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontWeight: '500',
              marginTop: 16,
            }}
          >
            {description}
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Video
              style={{ borderRadius: 16, width: 300, height: 450, top: -85 }}
              ref={video}
              source={{ uri: video }}
              resizeMode="cover"
              useNativeControls
              isMuted={true}
              posterSource={{ uri: thumbnail }}
              usePoster={true}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('screen').width);
const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    width: deviceWidth - 72,
    height: 351,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
});

export default VideoCard;
