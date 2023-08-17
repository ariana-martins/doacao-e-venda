import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';

import SwiperNumberComponent from '../../components/SwiperNumber';
import Icon from 'react-native-vector-icons/Ionicons';


//Falta configurar para clicar no botão chat, e aparecer o UserDono, 
//clicando na imagem do produto da página Inicial, e depois clicar em Chat aqui na tela Detalhes
//Já está configurado em App.js em ChatMensagens e aparece o nome do UserDono


export default function Detalhes() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.swiperNumberContent}>
                <SwiperNumberComponent/>
            </View>

            <Text style={styles.txtTitle}>
            Calçado marrom novo.            
            </Text>                

            <Text style={styles.txtValor}>
                R$ 120,00
            </Text>
            
            <Text style={styles.txtDetalhes}>
            Detalhes: calçado marrom novo. /
            Genero: Masculino /
            Marca: Coturno /
            Tamanho: 42 / 
            </Text>
            
            <View style={styles.botaoAdicionarMargem}> 
                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.textoBotao}>Registrar Interesse</Text>  
                </TouchableOpacity>
            </View>
            
            <View style={styles.botaoAdicionarMargem}> 
                <Pressable style={styles.btn} onPress={() => navigation.navigate('ChatMensagens', 
                {userDono: item.messageText})}>
                    <Text style={styles.textoBotao}>Chat</Text>  
                </Pressable>
            </View>
            
            
        </View>
    
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    swiperNumberContent:{
        flexDirection: 'row',
        height: 340,
        width: '100%',
    },
    txtTitle:{
        paddingHorizontal: 20,
        fontFamily: 'Inter', 
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
    },
    txtValor:{
        paddingHorizontal: 20,
        fontFamily: 'Inter', 
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
    },
    txtDetalhes:{
        paddingHorizontal: 20,
        fontFamily: 'Inter', 
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000',
        lineHeight: 25,
        marginTop: 10,
//        marginVertical: 60,
    },

    botaoAdicionarMargem:{
        paddingHorizontal: 15, 
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    textoBotao:{
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize:20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    btn:{
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    }

});