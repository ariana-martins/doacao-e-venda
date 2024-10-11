import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from './styles';

import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';
import ModalEscolherImagem from '../../components/componentesGerais/ModalEscolharImagem';
import Icon from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

//====================================================================
// Exemplo de novo chat com firebase
// Titulo no canal do Youtube: Mastering Real-time Chat: Expo and Firebase App Development Tutorial
// Link no canal do youtube: https://www.youtube.com/watch?v=Z55bnTZRGZE&list=PL5JH4SeiwEwxcF1T76WUtrujfsH5YKtFO&index=11
// Canal do youtube: Vetrivel Ravi
//====================================================================


export default function ChatMensagensNovo({ route }) {
    const { item, } = route.params
  // console.log("Room :", item)
  

    const [message, setMessage] = useState(""); //começa com uma string vazia
    const [messageUser, setMessageUser] = useState([]);
  
   const user_id = firebase.auth().currentUser.uid;

    const sendMessage = async () => {
        // Aqui preciso obter o carimbo da data e hora exato, da vez que a mensagem foi entregue/mensagem enviada
        // precisamos usar data/hora do servidor 
        const timestamp = firestore.FieldValue.serverTimestamp()
        //pegar a funcao que fornecera o carimbo da data e hora do servidor
        //constante id exclusivo
        const id = `${Date.now()}`
        const docRef = {
            key: id,
            itemID: item.key,
            timestamp: timestamp,
            message: message,
            //Falta chamar o usuario com uma "const" no useState(), verificando se o current.user já funciona...
            user: user_id, //qual usuário envia a mensagem (aqui precisa obter o objeto do usuario, nome completo, email, imagem do usuario, ao inves do user_id), 
            //nomeCompleto: auth.currentUser.nomeCompleto, // qual usuário envia a mensagem (aqui precisa obter o objeto do usuario, nome completo, email, imagem do usuario, ao inves do user_id), 
            //email: auth.currentUser.email, //qual usuário envia a mensagem (aqui precisa obter o objeto do usuario, nome completo, email, imagem do usuario, ao inves do user_id), 
            //photoURL: auth.currentUser.photoURL, //qual usuário envia a mensagem (aqui precisa obter o objeto do usuario, nome completo, email, imagem do usuario, ao inves do user_id),             
        }
        //adicionar uma subcolecao
        //dentro desse chat preciso atualizar as mensagens enviadas
        setMessage("")
        await firestore()
            .collection('chatsNovo')
            .doc(item.id)
            .collection('messagesNovo') //uma nova colecao, dentro da colecao "chatsNovo"
            .add({
                docRef,
            }) //se tudo der certo abrir o objeto
            .then(() => {})
            //se tiver um erro
            .catch((error) => {
                Alert.alert("Error: ", error)
            })
            console.log(docRef)
    };

    /* useLayoutEffect(() => {
         // como fazer?
 
     }, []);*/


     //EXEMPLO 1 (VIDEO COMPLETO)
     /* Seguindo o useLayoutEffect desse video a seguir 
     Link do Youtube: https://www.youtube.com/watch?v=Z55bnTZRGZE&list=PL5JH4SeiwEwxcF1T76WUtrujfsH5YKtFO
     Título do youtube: Mastering Real-time Chat: Expo and Firebase App Development Tutorial
     Canal do Youtube: Vetrivel Ravi
     A partir do minuto do vídeo: 
     => 3:00:00 explica a parte da Navegação do chat com .map() 
     // Falta puxar as informações do useLayoutEffect(() => {},[]) visualizando a mensagem que o usuario digitou p/ outro usuario
     */
     
     //EXEMPLO 2
     /* Seguindo o useLayoutEffect desse video a seguir 
     Link do Youtube: https://www.youtube.com/watch?v=AkEnidfZnCU
     Título do youtube: React Native Crash Course for Beginners - Build 4 Apps in 14 Hours (Redux, Tailwind + More) [2023]
     A partir do minuto do vídeo: "SIGNAL BUILD"
     => 13:11:48 Building the Chat Screen
     =>> 13:39 (utiliza o "{message.map()...}")
     => 14:02:35 Deploying the Final Demo App
     */

     
    useLayoutEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection('chatsNovo')
            .doc(item.id)
            .collection('messagesNovo')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setMessageUser(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            );
        return unsubscribe;
    }, []);



    return (
        <View style={styles.container}>

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', }}>
                <View style={styles.headerChatMsg}>
                    <View style={styles.headerChatMsgBotaoVoltar}>
                        <BotaoVoltar />
                    </View>
                    <Text style={styles.headerTxtTituloDetalhesPerfil}>{item.chatName}</Text>
                    <Image style={styles.headerImgDetalhesPerfil}
                        source={{ uri: 'https://www2.faccat.br/portal/sites/default/files/logo_azul_2.png' }} />
                </View>
            </View>


            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
                <View style={styles.containerStyloDetalhesDoProduto}>
                    <Image style={styles.imagemMaisDetalhesDoProduto}
                        // source={{ uri: image }} 
                        source={{ uri: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png' }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }} >
                        <Text style={{ paddingRight: 10 }}>texto</Text>
                        <Text style={{ marginVertical: 5 }}>valor</Text>
                    </View>
                </View>


                <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>
                     {/* Aqui eu busco do banco de dados as mensagens que usuário está digitando */}
                     {messageUser.map(({ id, data }) => (
                        data.user === user ? (
                            <View key={id}>
                                {/* <Avatar /> */}
                                <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: 'flex-start' }}>
                                    <View style={{ backgroundColor: '#cdcdcd', borderRadius: 8 }}>
                                        <Text style={{ padding: 8, color: 'black' }}>{data.messageUser}</Text>
                                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                            <Text>20:10</Text>
                                            <Icon name="checkmark-done-outline" size={20} color="#000000" />
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ) : (
                            <View>
                                {/* <Avatar /> */}
                               <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: 'flex-start' }}>
                                    <View style={{ backgroundColor: '#cdcdcd', borderRadius: 8 }}>
                                        <Text style={{ padding: 8, color: 'black' }}>texto</Text>
                                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                            <Text>20:10</Text>
                                            <Icon name="checkmark-done-outline" size={20} color="#000000" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    ))}

                </View>



                <View style={styles.containerStyloEnviarChatMensagens}>
                    <View style={styles.containerStyloModalImgEnviarChatMensagens}>
                        <TouchableOpacity>
                            <ModalEscolherImagem />
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.styloTextInputEnviarChatMensagens}
                        placeholder="Escreva sua mensagem aqui..."
                        value={message}
                        onChangeText={setMessage} //alteração da mensagem
                       //onSubmitEditing={setMessage} 
                    />
                    <View style={{ maxHeight: 40, paddingTop: 12 }}>
                        <TouchableOpacity>
                            <Icon name="send-outline" size={20} color="#000000"
                                onPress={sendMessage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}