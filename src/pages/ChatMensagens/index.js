import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import EnviarReceberMensagens from '../../components/EnviarReceberMensagens';

import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';


import Icon from 'react-native-vector-icons/Ionicons';


export default function ChatMensagens() {


//Step 1: Create a Firestore Collection
// Create a reference to the "messages" collection
const messagesRef = firestore().collection('messages');


//Step 2: Add Messages to Firestore
const sendMessage = async (text, sender) => {
    try {
        // Add a new document to the "messages" collection
        await messagesRef.add({
            text,
            sender,
            timestamp: firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
        console.error('Error sending message: ', error);
    }
};

//Step 3: Real-Time Data Syncing
const subscribeToMessages = (callback) => {
    const unsubscribe = messagesRef
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
                messages.push({ id: doc.id, ...doc.data() });
            });
            callback(messages);
        });
    return unsubscribe;
};


    //Step 4: Displaying Messages
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        const unsubscribe = subscribeToMessages((newMessages) => {
            setMessages(newMessages);
        });
        return () => unsubscribe();
    }, []);

    const handleSend = () => {
        sendMessage(text, 'User');
        setText('');
    };


    return (
        
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>
                        <EnviarReceberMensagens />
                        <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: 'flex-end' }}>
                            <View style={{ backgroundColor: '#afeeee', borderRadius: 8 }}>
                                <Text style={{ padding: 8, color: 'black' }}>{item.sender}: {item.text}</Text>
                            </View>
                            <Text>Pessoa - 20:10</Text>
                        </View>
                    </View>
                )}
            />
            
          {/*
            <ScrollView>
                <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>
                    <EnviarReceberMensagens />
                    <EnviarReceberMensagens direita />
                    <EnviarReceberMensagens />
                </View>
            </ScrollView>
 */}
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, backgroundColor:'white', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'flex-end', }}>
                {/*<View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }} >*/}
                    <Icon name="camera-outline" size={20} color="#000000" />
                    <TextInput
                        style={{ flex: 1,
                            minHeight: 40,
                            maxHeight: 90,
                            paddingHorizontal: 12,
                            fontSize: 17,
                            paddingTop: 8,
                            marginHorizontal: 5,
                         //   borderColor: 'black',
                        //    borderWidth: 1,
                        //    backgroundColor: 'yellow',
                            borderRadius: 5,
                        }}
                        value={text}
                        onChangeText={setText}
                        placeholder="Escreva sua mensagem aqui..."

                    />
                <Button title="Enviar" onPress={handleSend} />
                {/*</View>*/}
                
            </View>
            
        </View>
        
    );
};




/*
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';

import EnviarReceberMensagens from '../../components/EnviarReceberMensagens';
import { Input } from '@rneui/base';


//Continuar olhando e testando o vídeo
// Título do video do Canal do Youtube: #8 Gifted chat UI & one to one chat using firestore | React Native & Firebase tutorial in Hindi
// Link do video do Canal do Youtube: https://www.youtube.com/watch?v=flAFZC-xNwk&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=21

export default function ChatMensagens() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        setMessages([
            {
                _id: 1,
                text: 'Olá Mundo',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png',
                },
            },
        ])
    }, [])


    const onSend = (messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                   // created_at: firestore.FieldValue.serverTimestamp()
                   /*incluir essa linha "created_at: ..." para que seja criado e vinculado no firebase a data
                   e horário que o usuário digitou no chat, como por exemplo, quando o usuário acrescentou um produto e aparece "nesse caso só no firebase" */
    //            }}
  //          />
   //     </View>
  //  )

/*
return (
    <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ScrollView>
            <View style={{ marginTop: 8, display: 'flex', flex: 1, overflow: 'scroll' }}>
                <EnviarReceberMensagens />
                <EnviarReceberMensagens direita />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
                <EnviarReceberMensagens />
            </View>
        </ScrollView>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
            <Input placeholder='Digite sua mensagem aqui...' containerStyle={{ display: 'flex', flex: 1 }} />
            <Button title={'Enviar'} />
        </View>

    </View>

)
    */

//}

//=============================================================
//para funcionar aqui o Enviar e Receber Mensagens " <EnviarReceberMensagens />", estou utilizando (props) dentro da função dentro do arquivo desse componente de EnviarReberMensagens*/}
// left => p/ mensagens recebidas, a esquerda 
// right => p/ mensagens enviadas, a direita  "<EnviarReceberMensagens direita />
//=============================================================

// overflow: 'scroll' => direciona as caixa de "mensagens" p/ atrás do <input placeholder= 'Digite sua mensagem aqui...' />