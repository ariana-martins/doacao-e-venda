import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import EnviarReceberMensagens from '../../components/EnviarReceberMensagens';
import { Input } from '@rneui/base';

export default function ChatMensagens() {
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
}

//=============================================================
//para funcionar aqui o Enviar e Receber Mensagens " <EnviarReceberMensagens />", estou utilizando (props) dentro da função dentro do arquivo desse componente de EnviarReberMensagens*/}
// left => p/ mensagens recebidas, a esquerda 
// right => p/ mensagens enviadas, a direita  "<EnviarReceberMensagens direita />
//=============================================================

// overflow: 'scroll' => direciona as caixa de "mensagens" p/ atrás do <input placeholder= 'Digite sua mensagem aqui...' />