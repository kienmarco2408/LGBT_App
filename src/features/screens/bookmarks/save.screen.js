import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

export default function BookmarksScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.bookmarks}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Đã Lưu</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <View style={{ width: 150, height: 150, marginLeft: 40 }}>
            <Image
              source={require('../../../../assets/Frame34.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <Text style={styles.title}>Đã đánh dấu</Text>
        </View>

        <View>
          <View style={{ width: 150, height: 150, marginLeft: 30 }}>
            <Image
              source={require('../../../../assets/Frame36.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <Text style={styles.title_2}>LGBT</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bookmarks: {
    padding: 20,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  title: {
    position: 'absolute',
    width: 85,
    height: 17,
    left: 80,
    top: 170,
  },
  title_2: {
    position: 'absolute',
    width: 85,
    height: 17,
    left: 90,
    top: 170,
  },
});
