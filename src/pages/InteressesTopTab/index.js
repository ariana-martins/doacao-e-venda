//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';


import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

//Referência para preencher todos os dados (titulo, descrição, nome, email etc...) corretamente 
// + Enviando para Firebase/Firestore e limpando a tela após todos os dados cadastrados.
//"React Native Firebase Todo App | React Native"
// Link do exemplo: https://www.youtube.com/watch?v=ZixONsxTy0g&list=PLeOkQb0b3nPzXq_jKX70NRvXlbZ9p7ji5&index=13
// Canal do Youtube: JAS ACADAMY


export default function InteressesTopTab() {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const ref = firestore().collection('myInteresses');


    const onSubmitPress = async () => {
        console.log(textInputName, "teste texto")
        if (textInputName.length == 0) {
            Alert.alert("Nome:","Por favor descreva um interesse")
            return
        }
        console.log(textInputEmail, "email texto")
        if (textInputEmail.length == 0) {
            Alert.alert("Email:","Por favor descreva um email")
            return
        }
        Alert.alert("Produto", "Produto cadastrado com sucesso!");

        await ref.add({
            title: textInputName,
            email: textInputEmail,
            complete: false
        })
        console.log(textInputName)
        setTextInputName('') //para que não seja armazenada novamente e evitar a redundancia
        console.log(textInputEmail)
        setTextInputEmail('')

    }


    return (


        <View style={styles.container}>
            <TextInput style={styles.textInputStyle}
                disable={textInputName.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                placeholder="Digite o Nome"
                value={textInputName}
                onChangeText={setTextInputName}
            />
            <TextInput style={styles.textInputStyle}
                disable={textInputEmail.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                placeholder="Digite o Email"
                value={textInputEmail}
                onChangeText={setTextInputEmail}
            />

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={onSubmitPress}
                    style={styles.button}
                >
                    <Text>Enviar</Text>
                </TouchableOpacity>
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
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //justifica o texto dentro do botão
        alignItems: 'center', //justifica o texto dentro do botão 
    },
});

