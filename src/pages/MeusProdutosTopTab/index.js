import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';


//import firebase from '@react-native-firebase/firestore';
import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/Ionicons';


//============================================================================

//Exemplo do código abaixo do banco de dados do vídeo do Youtube: "React-Native, Renderizar no App Itens do banco | Criando App do Zero"
// Link do vídeo do Youtube: https://www.youtube.com/watch?v=y5SiIiQkp0M
//Canal do Youtube: Guilherme Fernando - Developer
//puxa os dados do banco de dados/firebase/firestore em tempo real... Explica certinho para que serve cada linha do código "UseEffect"


export default function MeusProdutos() {
   
    const [data, setData] = useState('');



//a partir de então 
useEffect(()=>{
    //where p/ filtrar meus produtos, só vai mostrar as publicações do usuário logado,
    // e dentro do where, irá os parametros de quem é usuario ("id do usuário", "igual", usuário) 
    let ref = firebase.firestore().collection('produtos').where('user_id', '==', user_id)
        .onSnapshot(querySnapshot =>{
        const data = []
        querySnapshot.forEach(doc =>{
            data.push({ //eu quero que o banco de dados traga todas as informações 
                 ...doc.data(),
                    key:doc.id // do banco que esteja este usuario que está logado
            })
        })
            setData(data)
    })
    return () => ref()
}, [])




  //variável constante
  const user_id = firebase.auth().currentUser.uid

return (

    <View style={{ padding: 18, backgroundColor: '#FFFFFF' }}>
    <Icon name="notifications-outline" size={20} color="#000000" />    
    <Text style={{ 
            fontWeight: 'bold', fontSize: 15,
            borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, textAlign: 'center', justifyContent: 'center',
        }}>Clique aqui para verificar todas noticações</Text>
    
  
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 14 }}>
                        <Card containerStyle={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{user_id}</Text>
                            {/*aqui vai o card de imagens, mas não está puxando do banco de dados todas as imagens*/}
                            <Card.Image
                                style={styles.img}
                                source={{ uri: item.images }}
                            />
                            <Card.Divider />
                            <Card.Title>{item.titulo}</Card.Title>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.valor}</Text>

                            <Text style={{ fontSize: 16, marginTop: 5 }}>{item.descricao}</Text>

                        </Card>
                       
                    </View>
                )}
            />
        

    </View >





    /* <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center", //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
            backgroundColor: "#FFFFFF",
        }}
    >
        <Text
            style={{
                fontSize: 20,
                color: "#000000",
                fontWeight: "800"
            }}
        >
            Interesses está aqui
        </Text>
    </View>
*/

);
};



const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
},
textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 20,
},
button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#7159c1',
    justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
    alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
},
img: {   
    padding: 0,
    resizeMode: 'contain',
},
});



