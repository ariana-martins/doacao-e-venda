import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
//nova importação do React Native Elements "@rneui/themed".
import { Header } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Ionicons';

export default function HeaderPaginaInicial() {

    const navigation = useNavigation();


    const FiltrarPorCategoria = () => {
        navigation.navigate('Pesquisar');
    };

    const PesquisarPalavraChave = () => {
        navigation.navigate('Pesquisar');
    };


    return (

          <Header
                containerStyle={{ backgroundColor: '#FFFFFF', justifyContent: 'center',
                width: '100%', borderBottomWidth: 1, borderBottomColor: '#CCCCCC',}}
                
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={FiltrarPorCategoria}>
                            <Icon name="funnel-outline" size={20} color="#000000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={PesquisarPalavraChave}>
                            <Icon name="search" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{ text: 'Página Inicial', style: styles.headerTexto }}
            />
    );

}

const styles = StyleSheet.create({
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    headerTexto: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'Roboto',
        
    }
});