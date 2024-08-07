import React, { useContext, useState } from 'react';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Pressable, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import HeaderChat from '../../components/Header/HeaderChat';

export default function ItemListaChat() {

    const { user, logout } = useContext(AuthContext);

    const navigation = useNavigation();

    const Chat = [
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
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                                { userDono: item.messageText })}>
                                <View style={styles.userInfo}>
                                    <View style={styles.userImgWrapper}>

                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', position: 'absolute', }}>
                                            <Image style={styles.prodImg}
                                                source={item.image}
                                            />

                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                                                    <Text style={styles.userName}>{item.title}</Text>
                                                    <Text style={styles.userValor}>{item.valor}</Text>
                                                    <Text>{item.messageText}</Text>
                                                    <Text>{item.messageUser}</Text>
                                                </View>
                                                <Text style={styles.postTime}>{item.messageTime}</Text>
                                            </View>

                                        </View>

                                    </View>

                                    <View style={styles.textSection}>

                                        {/*
                                        <Icon
                                            name='person-circle-outline'
                                            size={45}
                                            color='black'
                                            style={{marginTop: 10}}
                                        />
                    */}

                                        
                                        <View style={{ marginTop: 20, }}>
                                            <Image style={styles.userDonoImg}
                                                source={item.imagemUserDono}
                                            />
                                        </View>
                                    

                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
 
  {/*          </View>   */}


        </View>

    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    addMargem: {
        margin: 10,
    },
    txtTituloChats: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
    },
    linhaDivid: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },

    card: {
        width: '100%',
        marginRight: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginVertical: 5,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },

    prodImg: {
        width: 60,
        height: 60,
    },
    userDonoImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    textSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        // borderBottomWidth: 1,
        //borderBottomColor: '#CCCCCC',
    },
    userInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    userValor: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    postTime: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'roboto',
        marginRight: 10,
        paddingRight: 10,
    },
    messageText: {
        fontSize: 14,
        color: '#333333',
    },


});