import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import SearchForm from '../../components/SearchForm';


export default function Pesquisar() {


    return (

        <View style={styles.container}>

            {/* //Formulário de pesquisa "SearchForm" é renderizado dentro da visualização da área segura "SafeAreaView"*/}
            <SafeAreaView>

        {/*
            <View style={styles.botaoFiltrar}>
                <View style={styles.filtrarArea}>
                    <TouchableOpacity>
                        <Icon name="funnel-outline" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={styles.txtFiltrar}>Filtrar por categoria</Text>
                </View>
            </View>
            <View style={styles.botaoPesquisar}>
                <View style={styles.inputArea}>
                    <Icon name="search" size={20} color="#000000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar / Pesquise aqui..."
                        keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                    />
                </View>
            </View>


            <View>
                <Text style={{ marginBottom: 10, paddingHorizontal: 20, }}>
                    Aqui vai os produtos pesquisados e filtrados...
                </Text>
            </View>
    */}

                <SearchForm/>

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },
    botaoFiltrar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        marginVertical: 5,
    },
    filtrarArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
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