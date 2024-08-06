import React from "react";
import { View, StyleSheet } from "react-native";
//nova importação do React Native Elements "@rneui/themed".
import { Header } from "@rneui/themed";
import BotaoVoltar from "../componentesGerais/BotaoVoltar";



export default function HeaderDetalhes() {


    return (

          <Header
                containerStyle={{ backgroundColor: '#FFFFFF', justifyContent: 'center',    
                width: '100%', borderBottomWidth: 1, borderBottomColor: '#CCCCCC',}}
                
                leftComponent={
                    <View style={styles.headerLeft}>
                     <BotaoVoltar />
                   </View>}

                centerComponent={{ text: 'Detalhes', style: styles.headerTexto }}
            />
    );

}

const styles = StyleSheet.create({
    headerTexto: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'Roboto', 
        marginTop: 10,
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
});