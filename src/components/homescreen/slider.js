import React, {useState} from "react";
import { StyleSheet, SafeAreaView, Dimensions, ScrollView, Image, View, Text } from "react-native";

const images = [
    "https://www.unison.org.uk/content/uploads/2017/11/rainbow-1024x724.jpg",
    "https://www.mzv.cz/public/db/cd/3b/1989327_1533959_lgbt_flag.jpg",
    "https://ben.com.vn/tin-tuc/wp-content/uploads/2021/04/cong-dong-lgbt-1.jpg",
    "https://images.pexels.com/photos/2027059/pexels-photo-2027059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]
   
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export const Slider = () => {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({nativeEvent}) => onchange}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{uri: e}}

                            />
                        )
                    }

                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                            ●
                            </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT*0.25
    },
    wrapDot: {
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive:{
        margin: 3,
        color: "black",
    },
    dot:{
        margin: 3,
        color: "white"
    }
});