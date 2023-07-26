import React from 'react';
import { View, Text } from 'react-native';

export default function EnviarReceberMensagens(props) {
    return (
        
            <View style={{ width: 180, margin: 10, display: 'flex', alignSelf: props.direita ? 'flex-end' : 'flex-start' }}>
                <View style={{ backgroundColor: '#cdcdcd', borderRadius: 8 }}>
                    <Text style={{ padding: 8, color: 'black' }}>Chat Mensagens enviadas e recebidas</Text>
                </View>
                <Text>Pessoa - 10:20</Text>
            </View>   
    )
}




// width => largura da caixa de texto das mensagens 
// margin = > largura da parte externa da caixa de texto das mensagens
// borderRadius: 8 => Borda da caixa de texto um pouco arredondada
// padding: 8 => na largura do texto

//====================================================================
// alignSelf: props.direita ? 'flex-end' : 'flex-start' // => vai alinhar a caixa de texto para direita (acrescenta o "props.direita" que vem do arquivo "ChatMensagens" e de dentro da funcao "<EnviarReceberMensagens direita />")
// Sempre que existir a propriedade (props) de direita. ele vai ser movido para direita, então utilizamos o 'flex-end;
// Se não, então utilizamos o 'flex-start' que ficou dentro da função do outro arquivo como "<EnviarReceberMensagens /> .
//=================================================================
