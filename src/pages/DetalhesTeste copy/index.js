import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';

import SwiperNumberComponent from '../../components/componentesGerais/CarrouselImagens/SwiperNumber';
import Icon from 'react-native-vector-icons/Ionicons';

import Produtos from '../../data/testeProdutos';
import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';

//Falta configurar botão "Voltar", utilizar o "<Button title='Voltar'onPress={() => navigation.goBack()}"/>
//Utilizar esse botão/função ao invés do "ScreenNavigations", pois vai retornar a página anterior o "goBack"
//================
//Falta configurar para clicar no botão chat, e aparecer o UserDono, 
//clicando na imagem do produto da página Inicial, e depois clicar em Chat aqui na tela Detalhes
//Já está configurado em App.js em ChatMensagens e aparece o nome do UserDono


export default function DetalhesTeste({ userDono }) {
    const route = useRoute(); //Recebe o item da "PaginaInicial"
    //const { name, detalhes, preco } = route.params; //Recebe os itens "route.params" da "PaginaInicial"
    const { data } = route.params; //Recebe os itens "route.params" da "PaginaInicial"

    const navigation = useNavigation();

    const [registrarInteresse, setRegistrarInteresse] = useState(true);


    return (
        
        <View style={styles.container}>

            <View style={styles.addMargemTituloDetalhes}>
                <BotaoVoltar />
                <Text style={styles.txtTituloDetalhes}>Detalhes</Text>
            </View>

            <View style={styles.bordaIgmDetalhes}>
                <Image
                    style={styles.igmDetalhes}
                    source={{ uri: data.imagem }}
                />
            </View>

            <Text style={styles.txtTitle}>{data.titulo}</Text>
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


            {/* ===>>> Falta trazer apenas o título, descrição, valor, imagem 
                    apenas do produto que o usuário clicou para ver todas as informações somente daquele unico produto. 
                        ==>> Também falta criar uma função/renderizar se o produto foi "Registrar Interesse" = true / "Cancelar Interesse" = false
                    */}

            <View style={styles.botaoAdicionarMargem}>
                {/*<TouchableOpacity style={styles.btnInteresse} */}
                <TouchableOpacity style={{ backgroundColor: registrarInteresse ? '#000000' : '#191970', width: 250, height: 40, borderRadius: 10, justifyContent: 'center' }}

                    onPress={() => setRegistrarInteresse(!registrarInteresse)}>
                    {/*<Text style={styles.textoBotao}>Registrar Interesse</Text>*/}
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                        {registrarInteresse ? 'Registrar Interesse' : 'Cancelar Interesse'}
                    </Text>
                </TouchableOpacity>


            </View>

            <View style={styles.botaoAdicionarMargem}>
                <Pressable style={styles.btnChat}
                    onPress={() => navigation.navigate('ChatMensagens', { userDono })}
                // onPress={() => navigation.navigate('ChatMensagens', {userDono: item.messageText})}
                >
                    <Text style={styles.textoBotao}>Chat</Text>
                </Pressable>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    addMargemTituloDetalhes: {
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        marginVertical: 10,
    },
    txtTituloDetalhes: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
        marginLeft: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
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
    txtTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold', //texto em negrito
        color: '#000000',
        marginTop: 10,
    },
    txtValor: {
        paddingHorizontal: 20,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
    },
    txtDetalhes: {
        paddingHorizontal: 20,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        lineHeight: 25,
        marginTop: 10,
        //        marginVertical: 60,
    },
    botaoAdicionarMargem: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    textoBotao: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    btnInteresse: {
        width: 250, //largura
        height: 40, //altura 
        //backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
        backgroundColor: '#191970',
    },
    btnChat: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
        //backgroundColor: '#191970',
    },

});