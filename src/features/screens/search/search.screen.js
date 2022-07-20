import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button_Tags } from '../../../components/searchscreen/button.search';
import { SearchBar } from '../../../components/searchscreen/searchbar';

export default function SearchScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.khampha}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Khám phá</Text>
      </View>
      <View style={{ margin: 20 }}>
        <SearchBar />
      </View>
      <View>
        <Button_Tags />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  khampha: {
    paddingTop: 20,
    paddingLeft: 16,
  },
});
