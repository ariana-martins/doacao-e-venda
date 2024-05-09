import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';


export default function PesquisaFiltro() {

    const navigation = useNavigation();


    return (

        <View style={styles.container}>

            {/* //Formulário de pesquisa "SearchForm" é renderizado dentro da visualização da área segura "SafeAreaView"*/}
            <SafeAreaView>

                <View>
                    <View style={styles.filtrarArea}>
                        <Text style={styles.txtFiltrar}>Página Inicial</Text>
                        {/* Falta configurar o botão Filtrar e pesquisar ir direto
                     "dentro de cada função" da página de pesquisar*/}
                        <View style={styles.botaoFiltrar}>
                            {/* Botão Filtrar por categoria */}
                            <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>
                                <Icon name="funnel-outline" width={20} height={20} size={20} color="#000000" />
                            </TouchableOpacity>
                            {/* Botão Pesquisar por palavra-chave*/}
                            <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>
                                <Icon name="search" width={20} height={20} size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //  flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },
    botaoFiltrar: {
        //  flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingTop: 5,
        flexDirection: 'row',
        // alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '18%',
        justifyContent: 'space-between',
        //    marginVertical: 5,
        //width: 20,
        //    height: 20,
        //  backgroundColor: 'pink',
    },
    filtrarArea: {
        paddingHorizontal: 15,
        //  alignContent: 'space-between',
        flexDirection: 'row',
        //  alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'space-between',
    },
    txtFiltrar: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'black',
    },
    botaoPesquisar: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '98%',
        backgroundColor: '#C4C4C4',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },
});