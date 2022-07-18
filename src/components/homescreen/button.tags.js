import React from "react";
import { Button } from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';

export const Button_Tags = () => {
    return(
    <View>
        <View style={{flexDirection: "row"}}>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={styles.btn}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #hậu covid
            </Button>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={styles.btn}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #bạo hành
            </Button>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={styles.btn}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #come out
            </Button>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={styles.btn}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #kì thị
            </Button>
            <Button 
            dark="outlined-tonal"
            color="#F5344B"
            uppercase=""
            style={styles.btn}
            buttonColor="#F5344B"
            mode="outlined" 
            onPress={() => console.log('')}
            >
                #phân biệt
            </Button>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 120, 
        height: 40,
        marginRight: 10,
    }
}) 