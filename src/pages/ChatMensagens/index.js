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
                }}
            />
        </View>
    )

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

}

//=============================================================
//para funcionar aqui o Enviar e Receber Mensagens " <EnviarReceberMensagens />", estou utilizando (props) dentro da função dentro do arquivo desse componente de EnviarReberMensagens*/}
// left => p/ mensagens recebidas, a esquerda 
// right => p/ mensagens enviadas, a direita  "<EnviarReceberMensagens direita />
//=============================================================

// overflow: 'scroll' => direciona as caixa de "mensagens" p/ atrás do <input placeholder= 'Digite sua mensagem aqui...' />