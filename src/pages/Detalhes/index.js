import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';
import HeaderDetalhes from '../../components/Header/HeaderDetalhes';

//import SwiperNumberComponent from '../../components/componentesGerais/CarrouselImagens/SwiperNumber';
//import Produtos from '../../data/testeProdutos';

//================
//Falta configurar para clicar no botão chat, e aparecer o UserDono, 
//clicando na imagem do produto da página Inicial, e depois clicar em Chat aqui na tela Detalhes
//Já está configurado em App.js em ChatMensagens e aparece o nome do UserDono


export default function Detalhes({ userDono }) {
    const route = useRoute(); //Recebe o item da "PaginaInicial"
    //const { name, detalhes, preco } = route.params; //Recebe os itens "route.params" da "PaginaInicial"
    const { data } = route.params; //Recebe os itens "route.params" da "PaginaInicial" buscando do firebase

    const navigation = useNavigation();

    const [registrarInteresse, setRegistrarInteresse] = useState(true);


//======================================
//Função "CRUD" => Criar ItemListaChat 

/* Exemplo em AsnycStorage, transformar para Firestore:
// Fonte: https://www.luiztools.com.br/post/tutorial-crud-em-app-android-e-ios-com-react-native-2/
async function handleButtonPress(){ 
  const listItem = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)};
  let savedItems = [];
  const response = await AsyncStorage.getItem('items');
  
  if(response) savedItems = JSON.parse(response);
  savedItems.push(listItem);
 
  await AsyncStorage.setItem('items', JSON.stringify(savedItems));
  navigation.navigate("AppList", listItem);
}
*/


    //===================================
    //Função informações dos "Detalhes" no "ChatMensagens", dentro do novo "ItemListaChat" Message
    const abrirChatMessageChat = () => {
        //navigation.navigate('Detalhes', { name: 'titulo vai aqui', detalhes: 'descricao aqui', preco: '0,01' });
        //  navigation.navigate('ChatMensagens', { data });
        navigation.navigate('ChatMensagens', {
            userDono: data.user_id, //'User Dono', //data.user_id,
            imageUserDono: require('../../assets/imgUserDono/logoFACCAT.png'),
            image: data.imagem,
            name: data.titulo, //'Titulo do produto', 
            valor: data.valor,
        });
        // console.log('ChatMensagens', {userDono: data.titulo});
    };

    //===================================
    //Função Abrir NovoChat ItemListaChat Message
    //  const novoItemListaChat = () => {
    //navigation.navigate('Detalhes', { name: 'titulo vai aqui', detalhes: 'descricao aqui', preco: '0,01' });
    //  navigation.navigate('ChatMensagens', { data });
    // navigation.navigate('ChatMensagens', {data});
    // console.log('ChatMensagens', {userDono: data.titulo});
    // };


    return (

        <View style={styles.container}>
            <HeaderDetalhes />

 
            <Card style={{ marginHorizontal: 15, marginTop: 10 }}>
                <Card.Cover
                    style={styles.igmDetalhes}
                    source={{ uri: data.imagem }}
                />
                <Text style={styles.txtTitle}>{data.titulo}</Text>
            </Card>
            

            <ScrollView >
                <Text style={styles.txtDetalhes}>Detalhes: {data.descricao}</Text>
                <Text style={styles.txtValor}>R$ {data.valor}</Text>

                {/**
            <View style={styles.swiperNumberContent}>
                //aqui vai mais que uma imagem, carrossel de imagens
                <SwiperNumberComponent />
            </View>
            */}
                {/*
            <Text style={styles.txtTitle}>{name}</Text>
            <Text style={styles.txtDetalhes}>Detalhes: {detalhes}</Text>
            <Text style={styles.txtValor}>R$ {preco}</Text>
            */}


                {/* ==>>  falta criar uma função/renderizar se o produto foi "Registrar Interesse" = true / "Cancelar Interesse" = false
                    */}

                <View style={{ marginVertical: 15 }}>
                    <View style={styles.botaoAdicionarMargem}>
                        {/*<TouchableOpacity style={styles.btnInteresse} */}
                        <TouchableOpacity
                            style={{ backgroundColor: registrarInteresse ? '#000000' : '#191970', width: 250, height: 40, borderRadius: 10, justifyContent: 'center' }}
                            onPress={() => setRegistrarInteresse(!registrarInteresse)}>
                            {/*<Text style={styles.textoBotao}>Registrar Interesse</Text>*/}
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                                {registrarInteresse ? 'Registrar Interesse' : 'Cancelar Interesse'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botaoAdicionarMargem}>
                        <Pressable style={styles.btnChat}
                            //onPress={() => navigation.navigate('ChatMensagens', { userDono })}
                            // onPress={() => navigation.navigate('ChatMensagens', {userDono: item.messageText})}
                            onPress={abrirChatMessageChat}
                        >
                            <Text style={styles.textoBotao}>Chat</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    igmDetalhes: {
        width: '100%', // ocupa toda largura do Card.Image
        height: 250, // altura da imagem
    },
    txtTitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold', //texto em negrito
        color: '#000000',
        margin: 10,
    },
    txtDetalhes: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        // lineHeight: 25,
        marginTop: 10,
        marginHorizontal: 10,
    },
    txtValor: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
        marginHorizontal: 10,
    },
    botaoAdicionarMargem: {
        paddingHorizontal: 15,
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center',
        marginVertical: 10,
    },
    btnChat: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    },
    textoBotao: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    /*
    swiperNumberContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%',
        marginTop: 10,
    },
    bordaIgmDetalhes: {
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    igmDetalhes: {
        width: '100%',
        width: 300,
        height: 300,
    },

    btnInteresse: {
        width: 250, //largura
        height: 40, //altura 
        //backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
        backgroundColor: '#191970',
    },

    */
});