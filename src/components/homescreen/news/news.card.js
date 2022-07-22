import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NewsCard(props, { onPress }) {
  let { name, title, url } = props.news_card;
  return (
    <View>
      {/* <TouchableOpacity onPress={onPress}> */}
      <View
        style={{
          height: 130,
          paddingStart: 10,
          paddingTop: 5,
          flexDirection: "row"
        }}
      >
        <View>
          <Image
            style={{
              width: 118,
              height: 118,
              resizeMode: "cover",
              borderRadius: 10,
              marginRight: 10
            }}
            source={{
              uri: url
            }}
          />
        </View>
        <View style={{ right: 35, marginTop: 5 }}>
          <Ionicons name="bookmarks-outline" size={23} color="black" />
        </View>
        <View
          style={{
            flex: 1,
            marginRight: 10
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 14,
              marginTop: 20,
              marginLeft: 10,
              fontWeight: "bold"
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
}
