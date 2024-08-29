import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, } from 'react-native';

import { styles } from "./styles";

import Icon from 'react-native-vector-icons/Ionicons';

import firestore from '@react-native-firebase/firestore';

export default function ItemListaChat({ navigation, route }) {
    const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao);
    const idTarefa = route.params.id


    //Nome do vídeo de exemplo do youtube: REACT NATIVE + FIREBASE: CRIANDO UM APP COMPLETO
    //Vídeo de exemplo do youtube: https://www.youtube.com/watch?v=0AM6AXlFwxM
    //Canal do youtube: Léo Scorza - OneBitCode


    //Função Editar Tarefa - falta arrumar e editar por "id"
    const editTarefa = async (descricao, id) => {
        firestore()
            .collection('Tasks')
            .doc(id) //ao invés de adicionar ".add(id)", utilizar o ".doc()" com o "id" da tarefa
            .update({
                descricao: descricaoEdit,
            })
            .then(() => { //se for bem sucedido, produto acrescentado.
                Alert.alert('Tarefa', 'Tarefa editada com sucesso')
                console.log('Tarefa adicionado!');
              //  setDescricao(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
            })
            .catch((error) => { //caso ao contrário, aparece um erro...
                console.log('Algo deu errado com a postagem adicionada ao firestore', error);
            });
            navigation.navigate("ItemListaChat") //volta para a página ItemListaChat, após enviar a mensagem
           // navigation.navigate("ItemListaChatNovaTarefa") //fica na pagina ItemListaChatNovaTarefa, após enviar a mensagem
    }

    /*
    const addTarefa = async () => {
        //importar o firestore, e após isso, especificar a coleção, como tbm add os dados com o ID do usuário que queremos armazenar em nosso banco de dados
        firestore()
            .collection('Tasks')
            .add({
                descricao: descricao,
                status: false,
                // created_at: firestore.FieldValue.serverTimestamp()
              //  postProduto: firestore.Timestamp.fromDate(new Date()),
            })
            .then(() => { //se for bem sucedido, produto acrescentado.
                Alert.alert('Tarefa', 'Tarefa criada com sucesso')
                console.log('Tarefa adicionado!');
                setDescricao(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
            })
            .catch((error) => { //caso ao contrário, aparece um erro...
                console.log('Algo deu errado com a postagem adicionada ao firestore', error);
            });
            //navigation.navigate("ItemListaChat") //volta para a página ItemListaChat, após enviar a mensagem
            navigation.navigate("ItemListaChatNovaTarefa") //fica na pagina ItemListaChatNovaTarefa, após enviar a mensagem
    }
*/



    return (
        <View>
            <Text>qlqrCoisa da tarefa</Text>
            <View style={styles.inputAreaTitulo}>
                <TextInput
                    style={styles.inputDescricaoTituloDetalhes}
                    placeholder="Escreva aqui o nome da tarefa..."
                    onChangeText={setDescricaoEdit}
                    value={descricaoEdit}
                    keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.

                />
            </View>
            <View style={{
                maxHeight: 40, marginTop: 20,
                justifyContent: 'center', alignItems: "center",
                marginHorizontal: 30, backgroundColor: "pink",
            }}>
                <TouchableOpacity>
                    <Icon name="send-outline" size={20} color="#000000" onPress={() => {
                        editTarefa(descricaoEdit, idTarefa)
                    }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}



    //======================================
    //Função "CRUD" => Criar ItemListaChat 

    /* Exemplo em AsnycStorage, transformar para Firestore:
    // Fonte: https://www.luiztools.com.br/post/tutorial-crud-em-app-android-e-ios-com-react-native-2/
    async function handleButtonPress(){ 
      const listItem = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)};
      let savedItems = [];
      const response = await AsyncStorage.getItem('items');
      
      if(response) savedItems = JSON.parse(response);
      savedItems.push(listItem);
     
      await AsyncStorage.setItem('items', JSON.stringify(savedItems));
      navigation.navigate("AppList", listItem);
    }
    */