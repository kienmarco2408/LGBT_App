import React, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";

export const Button_News = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: "Tin tức mới"
    },
    {
      name: "Sức khỏe"
    },
    {
      name: "Pháp luật"
    },
    {
      name: "Đời sống"
    },
    {
      name: "Xã hội"
    },
    {
      name: "Podcast"
    }
  ]);
  return (
    <View>
      <FlatList
        horizontal={true}
        data={news}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View>
              <Button
                dark="outlined-tonal"
                color="white"
                uppercase=""
                style={styles.button_news}
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
  button_news: {
    width: 120,
    height: 40,
    marginRight: 10,
    backgroundColor: "#F5344B"
  }
});
