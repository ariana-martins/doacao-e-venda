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
                source={require('../../../assets/img/img1.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../../../assets/img/img2.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../../../assets/img/img3.png')}
                style={{ width: '100%', width: 370, height: 350}}
                />
            </View>
            <View style={styles.slide}>
                <Image
                source={require('../../../assets/img/img4.png')}
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
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        backgroundColor: '#FFFFFF',
    }
});
