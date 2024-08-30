import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
//Novo React Native Elements
import { ListItem, Avatar } from '@rneui/themed';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';

import HeaderChat from '../../components/Header/HeaderChat';
import DialogConfirmacao from '../../components/Dialog/DialogConfirmacao';
import DialogErro from '../../components/Dialog/DialogErro';
import { Divider } from 'react-native-paper';


export default function ItemListaChat({ navigation }) {

    const { user, logout } = useContext(AuthContext);

    //const navigation = useNavigation();


    const [data, setData] = useState([]);


    //Exemplo de ChatScreen UI
    //Link do GitHub: https://github.com/itzpradip/react-native-firebase-social-app/blob/master/screens/ChatScreen.js
    // Nome do vídeo de exemplo no youtube: React Native Chat App UI Tutorial
    // Link do canal do youtube: https://www.youtube.com/watch?v=bGGeD5RkdzQ&list=PLQWFhX-gwJbmrCwksjn77tdl36dIWPFAt&index=10
    

    //Nome do vídeo de exemplo do youtube: REACT NATIVE + FIREBASE: CRIANDO UM APP COMPLETO
    //Vídeo de exemplo do youtube: https://www.youtube.com/watch?v=0AM6AXlFwxM
    //Canal do youtube: Léo Scorza - OneBitCode

    //Função deletar Tarefa - falta arrumar e deletar por "id"
    const deleteTask = async () => {
        firebase.firestore()
            .collection("Tasks")
            .doc("iqTV0edUEE1FJbEa0Ovh")
            .delete()
            .then(() => {
                Alert.alert("Deletado com sucesso")
                console.log('id deletado')
            })
            // .catch(() => {
            //     Alert.alert("Error qlqr")
            // })
            .catch(error =>
                console.log("Qlqr erro da tarefa deletado", error))
    }
    /*
        function deleteTask(id) {
            firebase.firestore().collection("Tasks").doc(id).delete()
        }
        */

    //Referência de exemplo para criar lista, site tarefas (Tasks): 
    // Link do youtube: https://www.youtube.com/watch?v=0AM6AXlFwxM
    // Título do video do youtube: REACT NATIVE + FIREBASE: CRIANDO UM APP COMPLETO
    // Canal do youtube: Léo Scorza - OneBitCode

    /*  const qlqrCoisa = firebase.firestore().collection('Tasks');
      useEffect(() => {
          qlqrCoisa.onSnapshot((querySnapshot) => {
              const data = []
              querySnapshot.forEach((doc) => {
                  // ao invés de utilizar "id", trocar depois para "key", exemplo:
                  // data.push({ ...doc.data(), key: doc.id
                  data.push({ ...doc.data(), key: doc.id })
              })
              setTask(data)
          })
      }, [])
      */

    // ".orderBy('postProduto', 'desc')" acrescentado as listas por ultimo no inicio da pagina.
    const ref = firebase.firestore().collection('Tasks').orderBy('postMensagem', 'desc');
    useEffect(() => {
        ref.onSnapshot(querySnapshot => {
            const data = []
            querySnapshot.forEach(doc => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setData(data)
        })
        //  return () => ref()
    }, [])


    //======================================================
    //import { ListItem, Avatar } from 'react-native-elements'

    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT(1).jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT%20-%20P&B.jpg',
            subtitle: 'Vice Chairman'
        },
        // ... // more items
    ];


    //======================================================


    //array "Chat"
    const Chat = [
        /*
         {
             id: '1',
             image: require('../../../src/assets/img/img1.png'),
             title: 'Sapatênis',
             valor: 'R$200,00',
             messageTime: '4 mins atrás',
             messageText: 'João - dono do produto',
             imagemUserDono: require('../../assets/imgUserDono/logoTI.png'),
             messageUser: 'Usuário 1',
         },
         {
             id: '2',
             image: require('../../../src/assets/img/img2.png'),
             title: 'Blusa branca',
             valor: 'R$0,00',
             messageTime: '2 horas atrás',
             messageText: 'Maria - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
             imagemUserDono: require('../../assets/imgUserDono/logoFaccatColor.png'),
             messageUser: 'Usuário 2',
         },
         */
        {
            id: '3',
            image: require('../../../src/assets/img/img3.png'),
            title: 'Tênis branco',
            valor: 'R$0,00',
            messageTime: '2 dias atrás',
            messageText: 'Maria - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            imagemUserDono: require('../../assets/imgUserDono/logoFACCAT.png'),
            messageUser: 'Usuário 3',
        },

    ];


    //falta modificar para "data"
    //const RenderItemListChat=({ data }) => {
    const RenderItemListChat = ({ item }) => {
        return (


            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                    { userDono: item.messageText })}>

                    <ListItem style={styles.card} bottomDivider>
                        {/*    <Avatar source={{ uri: l.avatar_url }} /> */}
                        <Avatar style={styles.prodImg} source={item.image} />
                        {/*<Avatar rounded source={{ uri: l.avatar_url }} /> */}
                        <Avatar style={styles.userDonoImg} source={item.imagemUserDono} />
                        <ListItem.Content>
                            <ListItem.Title style={styles.userNameEvalor}>{item.title}</ListItem.Title>
                            <ListItem.Title style={styles.userNameEvalor}>{item.valor}</ListItem.Title>
                            <ListItem.Subtitle>{item.messageText}</ListItem.Subtitle>
                            <ListItem.Subtitle>{item.messageUser}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content right>
                            <ListItem.Subtitle right>{item.messageTime}</ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>

            </View >
        );
    };


    // Falta fazer
    {/*
=> Identifcar o chat, que são dois usuários diferentes:
    - Meu Id: tirando duvidas no chat de outro usuario
    - Id de outro usuario: que está tirando dúvidas para meu usuário
*/}
    {/*
=> Add "Sala 1(item_enviado)" Chat (através da página "Detalhes") com:
    * imagem do produto,
    * nome do produto,
    * valor do produto,    
    * imagem do usuario que está doando e/ou vendendo outro produto e eu estou tirando duvidas com esse usuario,
    * nome do usuario que está doando e/ou vendendo outro produto e eu estou tirando duvidas com esse usuario,
    * nome do meu usuário.
=> Add "Sala 2(item_recebido)" Chat (através da página "Detalhes") com:
    * imagem do meu produto,
    * nome do meu produto,
    * valor do meu produto,    
    * imagem do meu usuario que está doando e/ou vendendo outro produto e alguém está tirando duvidas com meu usuario,
    * nome do usuario que está doando e/ou vendendo outro produto e alguém está tirando duvidas com meu usuario,
    * nome do outro usuário que está tirando duvida do meu produto.
*/}

    {/*
=> Não enviar mensagem para:
    * Se é meu produto, desabilitar o chat
    * Se é meu produto, identificar de alguma forma que é meu produto na página inicial e em detalhes.
*/}

    //===============================================================================================

    /*
    const [groupName, setGroupName] = useState("");
     
    const handleCreateRoom = () => {
        console.log( "createRoom", groupName );
        //closedModal();
    };
     
    const rooms = [
        {
            id: "1",
            name: "Novu Hangouts",
            messages: [
                {
                    id: "1a",
                    text: "Hello guys, welcome!",
                    time: "07:50",
                    user: "Tomer",
                },
                {
                    id: "1b",
                    text: "Hi Tomer, thank you! 😇",
                    time: "08:50",
                    user: "David",
                },
            ],
        },
        {
            id: "2",
            name: "Hacksquad Team 1",
            messages: [
                {
                    id: "2a",
                    text: "Guys, who's awake? 🙏🏽",
                    time: "12:50",
                    user: "Team Leader",
                },
                {
                    id: "2b",
                    text: "What's up? 🧑🏻‍💻",
                    time: "03:50",
                    user: "Victoria",
                },
            ],
        },
    ];
     
    */


    //Tem que ir para o firebase
    /*
    const chats = [
        {
            id: // data.key,
            image: //imagem do produto,
            title: //titulo do produto,
            valor: //valor do produto,
            messageTime: //horário creat_at,
            messageText: // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            imagemUserDono: //img dono do produto
            messageUser: //outro usuario com interesse no meu produto...
        },
    ];
    */


    //===================================
    //Função Abrir Tela Detalhes
    //const abrirDetalhes = (data) => {
    //navigation.navigate('Detalhes', { name: 'titulo vai aqui', detalhes: 'descricao aqui', preco: '0,01' });
    //navigation.navigate('Detalhes', {data});
    // console.log(data);
    /*
    const abrirChatMessage = (data) => {
        //navigation.navigate('ChatMensagens', {data});
        console.log(data);
    };
    */


    return (

        <View style={styles.container}>

            <HeaderChat />


            {/*  <View style={styles.addMargem}> */}

            {/*
                <View style={styles.linhaDivid}>
                    <Text style={styles.txtTituloChats}>Chats</Text>

                    {/*
                    <View>
                        <TextInput
                            placeholder='Group name aqui:'
                            onChangeText={(value) => setGroupName(value)}
                        />
                    </View>
                    <Pressable onPress={handleCreateRoom}>
                    <Icon name="add" size={20} color="#000000" />
                    </Pressable> 
    */}

            {/*          </View>
                {/*
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View>
                        <Text>Não há chat criado</Text>
                        <Text>Clique aqui para criar novo chat</Text>
                    </View>

                )}

                */}



            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Chat}
                keyExtractor={item => item.id} //Mudar de item.id p/ item.key ( "key" do firebase)
                //falta modificar para "data"
                //renderItem={({ item }) => <RenderItemList data={item} />}
                renderItem={({ item }) => <RenderItemListChat item={item} />}

            />
            {/*          </View>   */}
          {/*
            <View>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <View style={{ paddingVertical: 8 }}>


                            </View>
                        </>
                    }
                />
            </View>
                */}
            <View style={styles.containerAddLista}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // data={task}
                    data={data}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.styloTarefas}>
                                <TouchableOpacity
                                    style={styles.styloDeletarTarefa}
                                    onPress={() => {
                                        deleteTask(item.id)
                                    }}
                                >
                                    <Icon name="star" size={20} color="#F92e6a" />
                                </TouchableOpacity>
                                <Text style={styles.styloDescricaoTarefa}
                                    onPress={() => {
                                        navigation.navigate("ItemListaChatDetalhes", {
                                            id: item.id,
                                            descricao: item.descricao,
                                        })
                                    }}
                                >
                                    {item.descricao}
                                </Text>
                                <Divider style={{ borderWidth: 1, borderColor: 'pink' }} />
                            </View>
                        )
                        //Falta acrescentar "se o usuário não digitou a descrição,
                        // é == error, descreva algo".
                    }}
                />
                <TouchableOpacity
                    style={styles.buttonNovaTarefaAddLista}
                    onPress={() => navigation.navigate("ItemListaChatNovaTarefa")}
                >
                    <Text style={styles.iconButtonAddLista}>+</Text>
                </TouchableOpacity>

            </View>

            {/*
                    ==>>> Dialog
                    EU ACHO QUE COLOCA A MESMA MENSAGEM QUE TEM nos alerts hj e os mesmos botões
                    */}

            {/*
            <DialogConfirmacao />
            <DialogErro />
                */}

        </View>

    );

};

