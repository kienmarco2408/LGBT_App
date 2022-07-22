import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Button } from "react-native-paper";
import { SearchBar } from "../../../components/searchscreen/searchbar";

export default function SearchScreen({ navigation }) {
  const [tags, setTags] = useState([
    {
      name: "bạo lực"
    },
    {
      name: "cộng đồng lgbt"
    },
    {
      name: "kì thị"
    },
    {
      name: "lgbt là gì"
    },
    {
      name: "les là gì"
    },
    {
      name: "gay là gì"
    },
    {
      name: "bisexual là gì"
    },
    {
      name: "transgender là gì"
    }
  ]);
  return (
    <SafeAreaView>
      <View style={styles.khampha}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Khám phá</Text>
      </View>
      <View style={{ margin: 20 }}>
        <SearchBar />
      </View>
      <View>
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
                    marginTop: 20
                  }}
                >
                  <Button
                    onPress={() => navigation.navigate("Detail Search")}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  khampha: {
    paddingTop: 20,
    paddingLeft: 16
  },
  btn: {
    flex: 1,
    borderColor: "#F5344B",
    width: 120,
    height: 40,
    marginRight: 10
  }
});
