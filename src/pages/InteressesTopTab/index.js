//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';


import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Button } from 'react-native';


//Referência para preencher todos os dados (titulo, descrição, nome, email etc...) corretamente.
//"Como Verificar se Uma Caixa de Texto foi Preenchida ao Usar TextInput no React Native:"
// Link do exemplo: https://developerplus.com.br/como-verificar-se-uma-caixa-de-texto-foi-preenchida-ao-usar-textinput-no-react-native/


export default function InteressesTopTab() {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () => {
        if (!textInputName.trim()) {
            alert('Digite o Nome');
            return;
        }

        if (!textInputEmail.trim()) {
            alert('Digite o E-mail');
            return;
        }

        alert('Successo');
    };



    return (

     
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Digite o Nome"
                    value={textInputName}
                    onChangeText={setTextInputName}
                //onChangeText={(value) => setTextInputName(value)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Digite o E-mail"
                    onChangeText={(value) => setTextInputEmail(value)}
                />
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Enviar"
                        onPress={checkTextInput}
                    />
                </View>
            </View>





        /* <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#000000",
                    fontWeight: "800"
                }}
            >
                Interesses está aqui
            </Text>
        </View>
    */

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 20,
    },
});