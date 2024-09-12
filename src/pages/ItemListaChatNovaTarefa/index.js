import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import HeaderChat from '../../components/Header/HeaderChat';
import DialogConfirmacao from '../../components/Dialog/DialogConfirmacao';
import DialogErro from '../../components/Dialog/DialogErro';
import ModalEscolherImagem from '../../components/componentesGerais/ModalEscolharImagem';
import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';


export default function ItemListaChatNovaTarefa({ navigation }) {

    const [descricao, setDescricao] = useState(null);

    //const [user, setUser] = useState();
    const [addChat, setAddChat] = useState(""); //adiciona chat com string vazia.

    const user_id = firebase.auth().currentUser.uid;

    const addTarefa = async () => {
        //importar o firestore, e após isso, especificar a coleção, como tbm add os dados com o ID do usuário que queremos armazenar em nosso banco de dados
        firestore()
            .collection('Tasks')
            .add({
                descricao: descricao,
                status: false,
                postMensagem: firestore.Timestamp.fromDate(new Date()),
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


    //========================================================================================
    // Exemplo de novo chat com firebase
    // Titulo no canal do Youtube: Mastering Real-time Chat: Expo and Firebase App Development Tutorial
    // Link no canal do youtube: https://www.youtube.com/watch?v=Z55bnTZRGZE&list=PL5JH4SeiwEwxcF1T76WUtrujfsH5YKtFO&index=11
    // Canal do youtube: Vetrivel Ravi

    /*   const createNovoChat = async () => {
           //cria id exclusivo para o chat
           let id = `${Date.now()}` //data e hora que será unico para cada chat
   
           const _doc = {
               _id : id,
               user : user,
               chatNome : addChat, //criar um nome para o chat
           }
   
           if (addChat !== "") { //nome da coleção "chatsNovo" no firestore
               
               setDoc(doc(firestoreDB, "chatsNovo", id), _doc)
               .then(() => {
                   setAddChat("")
                   navigation.replace("ItemListaChat")
               })
               .catch((error) => {
                   Alert.alert("Error: ", error)
               })
               setDoc(doc(firestoreDB, "chatsNovo", id), _doc)
               .then(() => {
                   setAddChat("")
                   navigation.replace("ItemListaChat")
               })
               .catch((error) => {
                   Alert.alert("Error: ", error)
               })
           }
       };
   */


    //====================================================================
    // Exemplo de novo chat com firebase
    // Titulo no canal do Youtube: Mastering Real-time Chat: Expo and Firebase App Development Tutorial
    // Link no canal do youtube: https://www.youtube.com/watch?v=Z55bnTZRGZE&list=PL5JH4SeiwEwxcF1T76WUtrujfsH5YKtFO&index=11
    // Canal do youtube: Vetrivel Ravi

    const createNovoChat = async () => {
        //cria id exclusivo para o chat, tem que manter isso, se não, não funciona heheh
        let id = `${Date.now()}` // carimbo da data e hora do periodo milisegundos (como um numero) que será unico para cada chat
        let user = {
            id: user_id,
            nomeCompleto: 'nome completo', //acrescentar do "user_id" que fica exemplo "nomeCompleto: user_id"
            imagem: 'imagem do user', //acrescentar do "user_id" que fica exemplo "imagem: user_id"
            teste: {
                outroUser: 'outroUser',
                informacao: 'descricao info',
            },
            msgs: [
                {
                    idpessoa: 'IapDvw...',
                    txt: 'teste 3',
                    dthr: '22/08/2024 20:10',
                },
                {
                    idpessoa: 'IapDvw...',
                    txt: 'teste 3',
                    dthr: '22/08/2024 20:10'
                }
            ]
        }

        if (addChat !== "") { //se adicionar chat é diferente de string vazia
            //vamos criar um novo chat
            firestore()
            .collection('chatsNovo')
            .doc(id)
            .set({
                id: id,
                user,
                chatName: addChat,
            })
            .then(() => { //promessa, se tudo for salvo com sucesso, 
                setAddChat("") //vou dizer definido no chat como vazio
                navigation.navigate("ItemListaChat") 
            })
            .catch((error) => {
                Alert.alert("Error: ", error)
            })
        }
 
        
    }
    //====================================================================


    return (

        <View style={styles.container}>

            {/*        <HeaderChat />


            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Chat}
                keyExtractor={item => item.id} //Mudar de item.id p/ item.key ( "key" do firebase)
                //falta modificar para "data"
                //renderItem={({ item }) => <RenderItemList data={item} />}
                renderItem={({ item }) => <RenderItemListChat item={item} />}

            />
            {/*          </View>   */}

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', }}>
                <View style={styles.headerChatMsg}>
                    <View style={styles.headerChatMsgBotaoVoltar}>
                        <BotaoVoltar />
                    </View>
                    {/*<Text style={styles.headerTxtTituloDetalhesPerfil}>Nome Completo Perfil + Img Perfil que está digitando, 
                        Preciso mudar para o user para quem vou escrever a mensagem.
                    </Text>*/}
                    <Text style={styles.headerTxtTituloDetalhesPerfil}>Usuário que está digitando</Text>
                    {/*ImageUserDono vem da página "Detalhes" */}
                    {/* <Image style={styles.headerImgDetalhesPerfil}
                        source={imageUserDono} /> */}
                    <Image style={styles.headerImgDetalhesPerfil}
                        source={{ uri: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png' }} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>
                    Página da descrição da Tarefa
                </Text>
            </View>


            <View style={{ backgroundColor: "#FFFFFF", flexDirection: 'row', paddingHorizontal: 10, }}>
                <View style={{ maxHeight: 40, paddingTop: 12 }}>
                    <TouchableOpacity>
                        <ModalEscolherImagem />
                    </TouchableOpacity>
                </View>

{/*
                <TextInput 
                    style={{ flex: 1, minHeight: 40, maxHeight: 90, paddingHorizontal: 12,
                        fontSize: 17, paddingTop: 8, marginHorizontal: 5, borderRadius: 5,
                    }}
                    placeholder="Escreva sua mensagem aqui..."
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <View style={{ maxHeight: 40, paddingTop: 12 }}>
                    <TouchableOpacity>
                        <Icon name="send-outline" size={20} color="#000000" onPress={() => {
                            addTarefa()
                        }} />
                    </TouchableOpacity>
                </View>
    */}       


                <TextInput
                    style={{
                        flex: 1, minHeight: 40, maxHeight: 90, paddingHorizontal: 12,
                        fontSize: 17, paddingTop: 8, marginHorizontal: 5, borderRadius: 5,
                    }}
                    placeholder="Escreva sua mensagem aqui..."
                    value={addChat}
                    //onChangeText={(text) => setAddChat(text)}
                    onChangeText={setAddChat}
                  //  onSubmitEditing={setAddChat} 
                />
                <View style={{ maxHeight: 40, paddingTop: 12 }}>
                    <TouchableOpacity>
                        <Icon name="send-outline" size={20} color="#000000"
                            onPress={createNovoChat} />
                    </TouchableOpacity>
                </View>
             

            </View>



        </View>

    );

};

