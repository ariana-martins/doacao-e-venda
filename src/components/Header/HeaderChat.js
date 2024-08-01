import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
//nova importação do React Native Elements "@rneui/themed".
import { Header } from "@rneui/themed";



export default function HeaderChat() {


    return (

          <Header
                containerStyle={{ backgroundColor: '#FFFFFF', justifyContent: 'center',    
                width: '100%', borderBottomWidth: 1, borderBottomColor: '#CCCCCC',}}
                
                centerComponent={{ text: 'Chats', style: styles.headerTexto }}
            />
    );

}

const styles = StyleSheet.create({
    headerTexto: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'Roboto',  
    }
});