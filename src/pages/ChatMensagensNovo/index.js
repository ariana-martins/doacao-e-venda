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
    const user_id = firebase.auth().currentUser.uid;

    const sendMessage = async () => {
        // Aqui preciso obter o carimbo da data e hora exato, da vez que a mensagem foi entregue/mensagem enviada
        // precisamos usar data/hora do servidor 
        const timestamp = firestore.FieldValue.serverTimestamp()
        //pegar a funcao que fornecera o carimbo da data e hora do servidor
        //constante id exclusivo
        const id = `${Date.now()}`
        const doc = {
            key: id,
            itemID: item.key,
            timestamp: timestamp,
            message: message,
            //Falta chamar o usuario com uma "const" no useState(), verificando se o current.user já funciona...
            user: user_id, //qual usuário envia a mensagem (aqui precisa obter o objeto do usuario), 
        }
        //adicionar uma subcolecao
        //dentro desse chat preciso atualizar as mensagens enviadas
        setMessage("")
        await firestore()
            .collection('chatsNovo')
            .doc(item.id)
            .collection('messagesNovo') //uma nova colecao, dentro da colecao "chatsNovo"
            .add({
                doc,
            }) //se tudo der certo abrir o objeto
            .then(() => {})
            //se tiver um erro
            .catch((error) => {
                Alert.alert("Error: ", error)
            })
     };

    
    return (
        <View style={styles.container}>

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', }}>
                <View style={styles.headerChatMsg}>
                    <View style={styles.headerChatMsgBotaoVoltar}>
                        <BotaoVoltar />
                    </View>
                    <Text style={styles.headerTxtTituloDetalhesPerfil}>{item.chatName}</Text>
                    <Image style={styles.headerImgDetalhesPerfil}
                        source={require('../../assets/logo/logo_novo.jpg')} />
                </View>
            </View>


            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
                <View style={styles.containerStyloDetalhesDoProduto}>
                    <Image style={styles.imagemMaisDetalhesDoProduto}
                        // source={{ uri: image }} 
                        source={require('../../assets/logo/logo_novo.jpg')}
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }} >
                        <Text style={{ paddingRight: 10 }}>texto</Text>
                        <Text style={{ marginVertical: 5 }}>valor</Text>
                    </View>
                </View>


                <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>
                    <Text>qlqr coisa</Text>
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