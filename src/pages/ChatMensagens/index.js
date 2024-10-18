// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
// import { styles } from './styles';

// import { useRoute } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import Icon from 'react-native-vector-icons/Ionicons';

// import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';
// import EnviarReceberMensagens from '../../components/EnviarReceberMensagens';
// import ModalEscolherImagem from '../../components/componentesGerais/ModalEscolharImagem';




// export default function ChatMensagens() {


//     const route = useRoute(); //Recebe o item da "PaginaInicial"
//     //const { name, detalhes, preco } = route.params; //Recebe os itens "route.params" da "PaginaInicial"
//     const { userDono, imageUserDono, image, name, valor } = route.params; //Recebe os itens "route.params" da "PaginaInicial" buscando do firebase



//     //Step 1: Create a Firestore Collection
//     // Create a reference to the "messages" collection
//     const messagesRef = firestore().collection('messages');
//     //Falta criar uma nova collection('Chatrooms') por exemplo, para diferenciar a conversa p/ cada usuário/chat ItemListaChat


//     //Step 2: Add Messages to Firestore
//     const sendMessage = async (text, enviadoPara) => {
//         try {
//             // Add a new document to the "messages" collection
//             await messagesRef.add({
//                 text,
//                 //  enviadoPor, //falta acrescentar, para identificar o outro usuário.
//                 enviadoPara,
//                 //timestamp: firestore.FieldValue.serverTimestamp(),
//                 createdAt: new Date(),
//             });
//         } catch (error) {
//             console.error('Error sending message: ', error);
//         }
//     };

//     //Step 3: Real-Time Data Syncing
//     const subscribeToMessages = (callback) => {
//         const unsubscribe = messagesRef
//             //.orderBy('timestamp')
//             .orderBy('createdAt', 'desc')
//             .onSnapshot((snapshot) => {
//                 const messages = [];
//                 snapshot.forEach((doc) => {
//                     messages.push({ id: doc.id, ...doc.data() });
//                 });
//                 callback(messages);
//             });
//         return unsubscribe;
//     };


//     //Step 4: Displaying Messages
//     const [messages, setMessages] = useState([]); // ([]) => array vazio
//     const [text, setText] = useState('');

//     useEffect(() => {
//         const unsubscribe = subscribeToMessages((newMessages) => {
//             setMessages(newMessages);
//         });
//         return () => unsubscribe();
//     }, []);

//     const handleSend = () => {
//         sendMessage(text, userDono); //testar acrescentar a id/key do "produto" 
//         //sendMessage(text, 'User'); //testar acrescentar a id/key do "produto" 
//         setText('');
//     };


//     {/*=======>>>>>> //Falta Configurar nesta tela. <<<<========================
//     // Na tela de "Chats/"ChatMensagens" qdo digita a msg, tem que deixar o texto aparecendo 
//     a ultima msg que o usuário digitou (utilizar algo assim "initialScrollIndex={index}") 
//     e vincular o texto somente a esse usuário... 

//     //OK - temporariamente com a opção "inverted={-1}" no Flatlist.
//     //==========================================================================
//     */}



//     return (

//         <View style={styles.container}>

//             <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', }}>
//                 <View style={styles.headerChatMsg}>
//                     <View style={styles.headerChatMsgBotaoVoltar}>
//                         <BotaoVoltar />
//                     </View>
//                     {/*<Text style={styles.headerTxtTituloDetalhesPerfil}>Nome Completo Perfil + Img Perfil</Text>*/}
//                     <Text style={styles.headerTxtTituloDetalhesPerfil}>{userDono}</Text>
//                     {/*ImageUserDono vem da página "Detalhes" */}
//                     {/* <Image style={styles.headerImgDetalhesPerfil}
//                         source={imageUserDono} /> */}

//                     {imageUserDono ?

//                         <Image style={styles.headerImgDetalhesPerfil}
//                             source={imageUserDono} />
//                         :
//                         <Image style={styles.headerImgDetalhesPerfil}
//                             source={require('../../assets/logo/logo_novo.jpg')} />
//                     }

//                 </View>
//             </View>

//             <View style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>

//                 <View style={styles.containerStyloDetalhesDoProduto}>
//                     {image ?
//                         <Image style={styles.imagemMaisDetalhesDoProduto} source={{ uri: image }} />
//                         :
//                         null
//                     }


//                     <View style={{ flex: 1, flexDirection: 'column' }} >
//                         <Text style={{ paddingRight: 10 }}>{name}</Text>
//                         <Text style={{ marginVertical: 5 }}>{valor}</Text>
//                     </View>
//                 </View>


//                 <FlatList
//                     data={messages}
//                     inverted={-1} //junto com a data e horário ".orderBy('createdAt', 'desc')" o texto fica próximo do botão "Enviar"
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ item }) => (
//                         <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>

//                             <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: 'flex-end' }}>
//                                 <View style={{ backgroundColor: '#afeeee', borderRadius: 8 }}>
//                                     <Text style={{ padding: 8, color: 'black' }}>{item.enviadoPara}:{"\n"}{item.text}</Text>
//                                     <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
//                                         <Text>20:10</Text>
//                                         <Icon name="checkmark-done-outline" size={20} color="#000000" />
//                                     </View>
//                                 </View>
//                             </View>

//                             <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: 'flex-start' }}>
//                                 <View style={{ backgroundColor: '#cdcdcd', borderRadius: 8 }}>
//                                     <Text style={{ padding: 8, color: 'black' }}>texto</Text>
//                                     <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
//                                         <Text>20:10</Text>
//                                         <Icon name="checkmark-done-outline" size={20} color="#000000" />
//                                     </View>
//                                 </View>

//                             </View>

//                         </View>
//                     )}
//                 />




//                 <View style={styles.containerStyloEnviarChatMensagens}>
//                     <View style={styles.containerStyloModalImgEnviarChatMensagens}>
//                         <TouchableOpacity>
//                             {/*<Icon name="camera-outline" size={20} color="#000000" onPress={() => setModalActive(true)} />*/}
//                             <ModalEscolherImagem />
//                         </TouchableOpacity>
//                     </View>

//                     <TextInput
//                         style={styles.styloTextInputEnviarChatMensagens}
//                         value={text}
//                         onChangeText={setText}
//                         placeholder="Escreva sua mensagem aqui..."
//                     />
//                     <View style={{ maxHeight: 40, paddingTop: 12 }}>
//                         <TouchableOpacity>
//                             <Icon name="send-outline" size={20} color="#000000" onPress={handleSend} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//             </View>

//         </View>

//     );
// };





import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';

import { GiftedChat, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';


//Exemplo de React Native ChatScreen UI.
// Link do gitHub: https://github.com/itzpradip/react-native-firebase-social-app/blob/master/screens/ChatScreen.js
// Título do Youtube: React Native Chat App UI Tutorial
// Link do Youtube: https://www.youtube.com/watch?v=bGGeD5RkdzQ&list=PLQWFhX-gwJbmrCwksjn77tdl36dIWPFAt&index=10


//Continuar olhando e testando o vídeo
// Título do video do Canal do Youtube: #8 Gifted chat UI & one to one chat using firestore | React Native & Firebase tutorial in Hindi
// Link do video do Canal do Youtube: https://www.youtube.com/watch?v=flAFZC-xNwk&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=21

export default function ChatMensagens() {
    const route = useRoute(); //Recebe o item da "PaginaInicial"
    //const { name, detalhes, preco } = route.params; //Recebe os itens "route.params" da "PaginaInicial"
    const { userDono, imageUserDono, image, name, valor } = route.params; //Recebe os itens "route.params" da "PaginaInicial" buscando do firebase



    const [messages, setMessages] = useState([]);

    const [user, setUser] = useState();
    const { uid } = auth().currentUser;


    const getUser = async () => {
        try {
            const documentSnapshot = await firestore()
                .collection('users')
                .doc(uid)
                .get();

            const userData = documentSnapshot.data();
            setUser(userData);
        } catch {
            //do whatever
        }
    };

    // Get user on mount
    useEffect(() => {
        getUser();
    }, []);




    // useEffect(() => {

    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Olá Mundo',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png',
    //             },
    //         },
    //         {
    //             _id: 2,
    //             text: 'Hello world',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 1,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])


    // const subscribeToMessages = (callback) => {
    //         const unsubscribe = messagesRef
    //             //.orderBy('timestamp')
    //             .orderBy('createdAt', 'desc')
    //             .onSnapshot((snapshot) => {
    //                 const messages = [];
    //                 snapshot.forEach((doc) => {
    //                     messages.push({ id: doc.id, ...doc.data() });
    //                 });
    //                 callback(messages);
    //             });
    //         return unsubscribe;
    //     };


    //=================================================
    {/* Função da estilização do Botão "Enviar" mensagem, troca do nome "send" da biblioteca GiftedChat para um "icone" */}
    // Configurado no dia 18/10/2024.
    
    const renderSend = (props) => {
        return (
            <Send {...props}>

                <View>
                    <Icon name="send-outline" size={20} color="#000000" 
                         style={{marginBottom: 12, marginRight: 5}} />
                </View>

            </Send>
        )
    }

    // Exemplo de estilização do chat (GiftedChat) no canal do youtube:
    // Nome do título no youtube: React Native Chat App UI Tutorial
    // Link do youtube: https://www.youtube.com/watch?v=bGGeD5RkdzQ
    // Canal do Youtube: Pradip Debnath
    
    //=================================================




    const collectionRef = firebase.firestore().collection('chatsN').orderBy('createdAt', 'desc')
    useEffect(() => {
        const unsubscribe = collectionRef.onSnapshot(querySnapshot => {

            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });

        return () => unsubscribe();
    }, []);


    // const onSend = (messages = []) => {
    //     setMessages(previousMessages =>
    //         GiftedChat.append(previousMessages, messages),
    //     )
    // }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0]
        firestore()
            .collection('chatsN')
            .add({
                _id,
                createdAt,
                text,
                user,
            })

    }, []);


    return (
        <View style={{ flex: 1 }}>

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', }}>
                <View style={styles.headerChatMsg}>
                    <View style={styles.headerChatMsgBotaoVoltar}>
                        <BotaoVoltar />
                    </View>
                    {/*<Text style={styles.headerTxtTituloDetalhesPerfil}>Nome Completo Perfil + Img Perfil</Text>*/}
                    <Text style={styles.headerTxtTituloDetalhesPerfil}>{userDono}</Text>
                    {/*ImageUserDono vem da página "Detalhes" */}

                    {imageUserDono ?

                        <Image style={styles.headerImgDetalhesPerfil}
                            source={imageUserDono} />
                        :
                        <Image style={styles.headerImgDetalhesPerfil}
                            source={require('../../assets/imgUserDono/logoTI.png')} />
                    }

                </View>
            </View>


            <View style={styles.containerStyloDetalhesDoProduto}>

                {image ?
                    <Image style={styles.imagemMaisDetalhesDoProduto} source={{ uri: image }} />
                    :
                    null
                }

                <View style={{ flex: 1, flexDirection: 'column' }} >
                    <Text style={{ paddingRight: 10 }}>{name}</Text>
                    <Text style={{ marginVertical: 5 }}>{valor}</Text>
                </View>
            </View>



            {/* Exemplo revisado e utilizado como base o GiftedChat, dia 03/10/2024
            Link: https://jscrambler.com/blog/build-a-chat-app-with-firebase-and-react-native
            */}

            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={true}
                onSend={messages => onSend(messages)}
                user={{
                    //  _id: 1,
                    // created_at: firestore.FieldValue.serverTimestamp()
                    /*incluir essa linha "created_at: ..." para que seja criado e vinculado no firebase a data
                    e horário que o usuário digitou no chat, como por exemplo, quando o usuário acrescentou um produto e aparece "nesse caso só no firebase" */
                    //_id: 2,
                    _id: user && user?.email,
                    avatar: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png',
                    //avatar: 'https://i.pravatar.cc/300'
                }}
                alwaysShowSend //ativa o botão enviar, deixa aparecendo fixo na tela
                renderSend={renderSend} //renderSend prop, e entao chamarei a funcao renderSend (antes do igual), configura botao "Enviars"
                placeholder="Escreva sua mensagem aqui..."
            />
        </View>
    );




}


//=============================================================
// overflow: 'scroll' => direciona as caixa de "mensagens" p/ atrás do <input placeholder= 'Digite sua mensagem aqui...' />  