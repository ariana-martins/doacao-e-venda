//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';


import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Alert, FlatList } from 'react-native';
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

    const [user, setuser] = useState('');
    const [data, setData] = useState('');


    //Chamar uma constante ref = "referência"
    const ref = firestore().collection('myInteresses');


    const onSubmitPress = async () => {
        console.log(textInputName, "teste texto")
        if (textInputName.length == 0) {
            Alert.alert("Nome:", "Por favor descreva um interesse")
            return
        }
        console.log(textInputEmail, "email texto")
        if (textInputEmail.length == 0) {
            Alert.alert("Email:", "Por favor descreva um email")
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

    //variável constante
    const user_id = firebase.auth().currentUser.uid

    //a partir de então 
    useEffect(() => {
        //where p/ filtrar meus produtos, só vai mostrar as publicações do usuário logado,
        // e dentro do where, irá os parametros de quem é usuario ("id do usuário", "igual", usuário) 
        let ref = firebase.firestore().collection('produtos').where("user_id", "==", user)
            .onSnapshot(querySnapshot => {
                const data = []
                querySnapshot.forEach(doc => {
                    data.push({  //eu quero que o banco de dados traga todas as informações 
                        ...doc.data(),
                        key: doc.id // do banco que esteja este usuario que está logado
                    })
                })
                setData(data)
            })
        return () => ref()
    }, [])



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

            <View>
                <Text>Gerenciador</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 14 }}>
                            <Card containerStyle={{ marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.valor}</Text>
                                {/*aqui vai o card de imagens, mas não está puxando do banco de dados todas as imagens*/}
                                <Card.Image
                                    style={styles.img}
                                    source={{ uri: item.images }}
                                />
                                <Card.Divider />
                                <Card.Title>{item.titulo}</Card.Title>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.valor}</Text>

                                <Text style={{ fontSize: 16, marginTop: 5 }}>{item.descricao}</Text>

                            </Card>
                        </View>
                    )}
                />
        </View>

        </View >





        /* <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center", //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
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
        backgroundColor: '#7159c1',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
});

