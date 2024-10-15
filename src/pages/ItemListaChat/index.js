import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
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
    const [chatNovoItem, setChatNovoItem] = useState([]);

    //===================================
    //chatsNovo (no firebase firestore)
    // const [chats, setChats] = useState(null);

    const refChat = firebase.firestore().collection('chatsNovo').orderBy('id', 'desc');
    useEffect(() => {
        refChat.onSnapshot(querySnapshot => {
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
    //===================================

    const refChatNovoProdItem = firebase.firestore().collection('chatNovoItemProduto').orderBy('id', 'desc');
    useEffect(() => {
        refChatNovoProdItem.onSnapshot(querySnapshot => {
            const chatNovoItem = []
            querySnapshot.forEach(doc => {
                chatNovoItem.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setChatNovoItem(chatNovoItem)
        })
        //  return () => ref()
    }, [])

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
    /*  const ref = firebase.firestore().collection('Tasks').orderBy('postMensagem', 'desc');
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
  
  */

    //======================================================


    //array "Chat"
    const Chat = [
      /*  {
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
        {
            id: '3',
            image: require('../../../src/assets/img/img3.png'),
            title: 'Tênis branco',
            valor: 'R$0,00',
            messageTime: '2 dias atrás',
            messageText: 'Maria - dono do produto', // {userDono: data.user_id} porém tem que ser o "nomeCompleto"
            imagemUserDono: require('../../assets/imgUserDono/logoFACCAT.png'),
            //  imagemUserDono: source={uri: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png'},
            messageUser: 'Usuário 3',
        },
*/
    ];


    //[OK] falta modificar para "data"
    //const RenderItemListChat=({ item }) => {
    const RenderItemListChat = ({ data }) => {
        return (


            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                  //{ userDono: item.messageText })}>
                  { userDono: data.userDono,
                      image: data.imagem, //'Imagem do produto'
                      name: data.titulo, //'Titulo do produto', 
                      valor: data.valor, //'Valor do produto',
                  })}>

                    <ListItem style={styles.card} bottomDivider>
                        {/*    <Avatar source={{ uri: l.avatar_url }} /> */}
                        {/* Imagem produto - idimgproduto */}
                        <Avatar style={styles.prodImg} source={{ uri: data.image }} />
                        {/*<Avatar rounded source={{ uri: l.avatar_url }} /> */}
                         {/* <Avatar style={styles.userDonoImg} source={data.imagemUserDono} /> */}
                        {/* Imagem user dono do produto - idimgproprietario*/}
                         <Avatar style={styles.userDonoImg} source={data.imageUserDono} />
                        <ListItem.Content>
                        {/*<ListItem.Title style={styles.userNameEvalor}>{item.title}</ListItem.Title>*/}
                            <ListItem.Title style={styles.userNameEvalor}>{data.titulo}</ListItem.Title>
                            <ListItem.Title style={styles.userNameEvalor}>{data.valor}</ListItem.Title>
                            {/* Nome user dono do produto - idproprietario */}
                            <ListItem.Subtitle>{data.userDono}</ListItem.Subtitle>
                            <ListItem.Subtitle style={styles.styleMessageUserInteressedado}>{data.messageUser}</ListItem.Subtitle> 
    
                        </ListItem.Content>

                        <ListItem.Content right>
                            {/* 20:10 */}
                            <ListItem.Subtitle right>{data.messageTime.toDate().toDateString()}</ListItem.Subtitle>
                        </ListItem.Content>

                    </ListItem>
                </TouchableOpacity>

            </View >
        );
    };




    // Falta fazer
  
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


            <FlatList
                showsHorizontalScrollIndicator={false}
                //data={Chat}
                //keyExtractor={item => item.id.toString()} //Mudar de item.id p/ item.key ( "key" do firebase), "toString()" transforma em String
                data={chatNovoItem}
                keyExtractor={item => String(item.key)} 
                //[OK] falta modificar para "data"
                //renderItem={({ item }) => <RenderItemListChat item={item} />}
                renderItem={({ item }) => <RenderItemListChat data={item} />}
            />

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => String(item.key)} //Mudar de item.id p/ item.key ( "key" do firebase)
                //falta modificar para "data"
                //renderItem={({ item }) => <RenderItemList data={item} />}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() =>
                                navigation.navigate("ChatMensagensNovo", { item: item })}>
                                <Text>{item.chatName}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />


            <View style={styles.containerAddLista}>
                {/*
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
                */}
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

