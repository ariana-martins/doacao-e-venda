import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';


// "data" busca os produtos dos dados do firebase, que estão puxando da "PaginaInicial"
export default function ListaProdutosChat() {
    //Lista os produtos na PaginaInicial.

    return (
        <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper}>
                            <Image style={styles.prodImg}
                               // source={item.image}
                                source={require('./../../assets/img/img1.png')}
                            />
                        </View>

                        <View style={styles.textSection}>
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>teste title</Text>
                                <Text style={styles.postTime}>oi</Text>
                            </View>
                            <Text style={styles.userValor}>oi</Text>
                            <Text>meu produto</Text>
                            <Text>outro user conversou</Text>
                        </View>
                    </View>
                </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#FFFFFF',
    },
    txtTituloChats: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
        marginVertical: 10,
    },

    card: {
        width: '100%',
        marginRight: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginVertical: 5,
        paddingVertical: 5,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    prodImg: {
        width: 50,
        height: 50,
        borderRadius: 0,
    },
    textSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        // borderBottomWidth: 1,
        //borderBottomColor: '#CCCCCC',
    },
    userInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    userValor: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    postTime: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'roboto',
        marginRight: 10,
        paddingRight: 10,
    },
    messageText: {
        fontSize: 14,
        color: '#333333',
    },

});
