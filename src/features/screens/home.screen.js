import React from 'react';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Slider } from '../../components/homescreen/slider';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.xuhuong}>
          <Text style={{fontSize: 24, fontWeight: "bold"}}>Xu Hướng</Text>
        </View>
        <View style={styles.tags_area}>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={{width: 120, height: 40}}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #hậu covid
            </Button>
        </View>
        <Slider/>
        <View style={{padding: 16}}>
          <Text>Tags</Text>
        </View>
        <View style={{padding: 50, backgroundColor:"yellow"}}>
          <Text>News</Text>
        </View>
        <View style={{padding: 50, backgroundColor:"yellow"}}>
          <Text>News</Text>
        </View>
        <View style={{padding: 50, backgroundColor:"yellow"}}>
          <Text>News</Text>
        </View>
        <View style={{padding: 15, backgroundColor:"pink"}}>
          <Text>Navigation bar</Text>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    xuhuong:{ 
      padding: 30, 
      paddingLeft: 16,
    },
    tags_area:{
    
      padding: 10
    },
    button_tags: {
        borderColor: "#F5344B",
    }
});
  