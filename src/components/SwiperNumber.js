import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import Swiper from "react-native-swiper";

export default function SwiperNumberComponent(){
    return(
        <Swiper style={styles.wrapper} 
        dotStyle={{
            backgroundColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
        activeDotColor="#FFFFFF"
        activeDotStyle={{
            borderColor: '#000000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
        >
            <View style={styles.slide}>
                <Image
                source={require('../assets/img1.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../assets/img2.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../assets/img3.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../assets/img4.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper:{

    },
    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});
