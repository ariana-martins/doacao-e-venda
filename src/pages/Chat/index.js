import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Chat() {
    const navigation = useNavigation();


    const Chat = [
        {
        id: '1',
        image: require('../../../src/assets/img1.png'),
        title: 'Sapatênis',
        valor: 'R$200,00', 
        messageTime: '4 mins atrás',
        messageText: 'João - dono do produto',
        messageUser: 'Usuário 1',
        },
        {
        id: '2',
        image: require('../../../src/assets/img2.png'),
        title: 'Blusa branca',
        valor: 'R$0,00',
        messageTime: '2 horas atrás',
        messageText: 'Maria - dono do produto',
        messageUser: 'Usuário 2',
        },
        {
        id: '3',
        image: require('../../../src/assets/img3.png'),
        title: 'Tênis branco',
        valor: 'R$0,00',
        messageTime: '2 dias atrás',
        messageText: 'Maria - dono do produto',
        messageUser: 'Usuário 3',
        },
    ];



    return (
        <View style={styles.container}>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                data={Chat}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                        {userDono: item.messageText})}>
                        <View style={styles.userInfo}>
                            <View style={styles.userImgWrapper}>
                                <Image style={styles.prodImg}
                                source={item.image}
                                />
                            </View>

                            <View style={styles.textSection}>
                                <View style={styles.userInfoText}>
                                    <Text style={styles.userName}>{item.title}</Text>
                                    <Text style={styles.postTime}>{item.messageTime}</Text>
                                </View>
                                <Text style={styles.userValor}>{item.valor}</Text>
                                <Text>{item.messageText}</Text>
                                <Text>{item.messageUser}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        backgroundColor: "#FFFFFF",
    },
    card:{
        width: '100%',
    },
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImgWrapper:{
        paddingTop: 15,
        paddingBottom: 15,
    },
    prodImg:{
        width: 50,
        height: 50,
        borderRadius: 0,
    },
    textSection:{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    userInfoText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName:{
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    userValor:{
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    postTime:{
        fontSize: 12,
        color: '#666666',
        fontFamily: 'roboto',
    },
    messageText:{
        fontSize: 14,
        color: '#333333',
    },
  
});