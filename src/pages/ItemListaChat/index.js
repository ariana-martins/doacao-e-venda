import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import ListaProdutosChat from '../ListaProdutosChat';
import testeChat from '../../data/testeChat';

export default function ItemListaChat() {
    const navigation = useNavigation();

  //  const route = useRoute(); //Recebe o item da "PaginaInicial"
    //const { name, detalhes, preco } = route.params; //Recebe os itens "route.params" da "PaginaInicial"
   // const { testeChat } = route.params;


    const Chat = [
        {
            id: '1',
            image: require('../../../src/assets/img/img1.png'),
            title: 'Sapatênis',
            valor: 'R$200,00',
            messageTime: '4 mins atrás',
            messageText: 'João - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            messageUser: 'Usuário 1',
        },
        {
            id: '2',
            image: require('../../../src/assets/img/img2.png'),
            title: 'Blusa branca',
            valor: 'R$0,00',
            messageTime: '2 horas atrás',
            messageText: 'Maria - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            messageUser: 'Usuário 2',
        },
        {
            id: '3',
            image: require('../../../src/assets/img/img3.png'),
            title: 'Tênis branco',
            valor: 'R$0,00',
            messageTime: '2 dias atrás',
            messageText: 'Maria - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            messageUser: 'Usuário 3',
        },
        
    ];



    //===================================
    //Função Abrir Tela Detalhes
    //const abrirDetalhes = (data) => {
    //navigation.navigate('Detalhes', { name: 'titulo vai aqui', detalhes: 'descricao aqui', preco: '0,01' });
    //navigation.navigate('Detalhes', {data});
    // console.log(data);
    /*
    const abrirChatMessage = (data) => {
        //navigation.navigate('ChatMensagens', {data});
        console.log(data);
    };
*/

/*
    return (
        <View style={styles.container}>
            <View style={styles.addMargem}>
                <View style={styles.linhaDivid}>
                    <Text style={styles.txtTituloChats}>Chats</Text>
                </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={testeChat}
                        // data={data} //data, da onde eu vou pegar os dados desta lista (nesse caso é o card/lista de "produtos")
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListaProdutosChat data={item} />}
                    />
                </View>
            </View>


    );
    */
    
    return (
        <View style={styles.container}>
               <View style={styles.addMargem}>
                <View style={styles.linhaDivid}>
                    <Text style={styles.txtTituloChats}>Chats</Text>
                </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Chat}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                            { userDono: item.messageText })}>
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
        </View>
    );
                
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    addMargem: {
        margin: 10,
    },
    txtTituloChats: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
        marginVertical: 10,
    },
    linhaDivid: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },

    card: {
        width: '100%',
        marginRight: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginVertical: 5,
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