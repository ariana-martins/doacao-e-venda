import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';


export default function Pesquisar() {
    return (

        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    botaoFiltrar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
    },
    filtrarArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtFiltrar: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 20,
    },
    botaoPesquisar: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
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