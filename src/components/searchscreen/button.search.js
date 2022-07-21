import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const Button_Tags = ({ navigation }) => {
  const [tags, setTags] = useState([
    {
      name: 'bạo lực',
    },
    {
      name: 'cộng đồng lgbt',
    },
    {
      name: 'kì thị',
    },
    {
      name: 'lgbt là gì',
    },
    {
      name: 'les là gì',
    },
    {
      name: 'gay là gì',
    },
    {
      name: 'bisexual là gì',
    },
    {
      name: 'transgender là gì',
    },
  ]);

  return (
    <View>
      <FlatList
        data={tags}
        numColumns={3}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 0.32,
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              <Button
                onPress={() => navigation.navigate('Detail Search')}
                dark="outlined-tonal"
                color="#F5344B"
                uppercase=""
                style={styles.btn}
                buttonColor="#F5344B"
                mode="outlined"
              >
                <Text>{item.name}</Text>
              </Button>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderColor: '#F5344B',
    width: 120,
    height: 40,
    marginRight: 10,
  },
});
