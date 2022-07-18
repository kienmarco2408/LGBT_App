import React, { useState } from "react";
import { View, Image, Text } from "react-native";

export default function NewsCard(props){
    let {name, title, url} = props.news_card
    return(
        <View>
            <View style={{
                height: 130, 
                paddingStart: 10,
                paddingTop: 5,
                flexDirection: "row"
                
                }}>
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
                <View style={{
                    flex:1,
                    marginRight: 10
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: 20,
                        marginLeft: 20,
                        fontWeight: "bold"
                    }}>
                        {name}
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 12,
                        marginTop: 20,
                        marginLeft: 20
                    }}>
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    )  
}
