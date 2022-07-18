import React from "react";
import { Button } from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';

export const Button_News = () => {
    return(
    <View>
        <View style={{flexDirection: "row"}}>
        <Button 
        dark="outlined-tonal"
        color="#FFF"
        uppercase=""
        style={styles.button_tags}
        buttonColor="#F5344B"
        mode="outlined" 
        onPress={() => console.log('')}
        >
            Tin tức mới
        </Button>
        <Button 
        dark="outlined-tonal"
        color="#FFF"
        uppercase=""
        style={styles.button_tags}
        buttonColor="#F5344B"
        mode="outlined" 
        onPress={() => console.log('')}
        >
            Sức khỏe
        </Button>
        <Button 
        dark="outlined-tonal"
        color="#FFF"
        uppercase=""
        style={styles.button_tags}
        buttonColor="#F5344B"
        mode="outlined" 
        onPress={() => console.log('')}
        >
            Pháp luật
        </Button>
        <Button 
        dark="outlined-tonal"
        color="#FFF"
        uppercase=""
        style={styles.button_tags}
        buttonColor="#F5344B"
        mode="outlined" 
        onPress={() => console.log('')}
        >
            Đời sống
        </Button>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    button_tags: {
        width: 120,
        height: 40,
        marginRight: 10,
        backgroundColor: "#F5344B"
    }
}) 