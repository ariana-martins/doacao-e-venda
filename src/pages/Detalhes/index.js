import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';

import SwiperNumberComponent from '../../components/componentesGerais/CarrouselImagens/SwiperNumber';
import Icon from 'react-native-vector-icons/Ionicons';

import Produtos from '../../data/produtos';


//Falta configurar para clicar no botão chat, e aparecer o UserDono, 
//clicando na imagem do produto da página Inicial, e depois clicar em Chat aqui na tela Detalhes
//Já está configurado em App.js em ChatMensagens e aparece o nome do UserDono


export default function Detalhes({ userDono }) {
    const navigation = useNavigation();

    const [registrarInteresse, setRegistrarInteresse] = useState(true);


    return (
        <View style={styles.container}>

            <View style={styles.swiperNumberContent}>
                {/*aqui vai as imagens*/}
                <SwiperNumberComponent />
            </View>
                    {/* ===>>> Falta trazer apenas o título, descrição, valor, imagem 
                    apenas do produto que o usuário clicou para ver todas as informações somente daquele unico produto. 
                        ==>> Também falta criar uma função/renderizar se o produto foi "Registrar Interesse" = true / "Cancelar Interesse" = false
                    */}
            <FlatList
                data={Produtos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <View>
                        <Text style={styles.txtTitle}>{item.title}</Text>

                        <Text style={styles.txtDetalhes}>Detalhes: {item.descricao}</Text>

                        <Text style={styles.txtValor}>{item.valor}</Text>
                    </View>


                )}
            />
            

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
    swiperNumberContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%',
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