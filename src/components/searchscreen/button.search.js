import React, {useState} from "react";
import { Button } from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';


export const Button_Tags = () => {
    const [tags, setTags] = useState(
        [
            {
                name: 'bạo lực'
            },
            {
                name: 'cộng đồng lgbt'
            },
            {
                name: 'kì thị'
            },
            {
                name: 'lgbt là gì'
            },
            {
                name: 'les là gì'
            },
            {
                name: 'gay là gì'
            },
            {
                name: 'bisexual là gì'
            },
            {
                name: 'transgender là gì'
            },
            
        ]
    ) 
    
    return(
    <View>
        <FlatList
            data={tags}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
                return (
                    <View>
                        <Button 
                            dark="outlined-tonal"
                            color="#F5344B"
                            uppercase=""
                            style={styles.btn}
                            buttonColor="#F5344B"
                            mode="outlined" 
                            onPress={() => console.log('')}
                            >
                                <Text>#{item.name}</Text>
                        </Button>
                    </View>
                )
            }}>
        </FlatList>
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