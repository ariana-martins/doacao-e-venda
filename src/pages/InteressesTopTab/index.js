import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
//import { Card } from 'react-native-elements';
import { Card } from 'react-native-paper';

import firestore, { firebase } from '@react-native-firebase/firestore';




export default function InteressesTopTab() {
    const [data, setData] = useState('');



    // Refazer o getDowload em "Adicionar novo produto" e aqui também incluir um "UseEffect + getDetail"
    // Conforme seguindo o manual do canal do Youtube: CODERS NEVER QUIT
    // Título do vídeo: Part 1/2 | OLX Clone using React Native & Firebase | React Native & Firebase for beginners in Hindi
    // Link canal do Youtube: https://www.youtube.com/watch?v=ntPQ-IPm3AM&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=7
    // Observação: Nesse exemplo inicia desde o login com o usuário, e mostra o "produto c/ imagem" em um Card c/ getDowload do Firebase + Storage.
    const ref = firebase.firestore().collection('produtos');
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



    //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
    // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
    const user_id = firebase.auth().currentUser.uid;


    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 16 }}>Lista de interesses</Text>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 10 }}>
                        <Card style={{ margin: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Card >
                                    <Card.Cover
                                        style={styles.img}
                                        source={{ uri: item.imagem }}
                                    />

                                </Card>
                                <View style={{ flexDirection: 'column', width: '100%' }}>
                                    <Text style={styles.txtTitle}>{item.titulo}</Text>
                                    <Text style={styles.txtValor}>{item.valor}</Text>
                                    <Text style={styles.txtDetalhes}>Detalhes: {item.descricao}</Text>
                                </View>
                                {/* Aqui vai o botão "Cancelar interesse, fica no canto inferior à direita do item do produto*/}
                            </View>

                        </Card>

                        {/*
                            <Card containerStyle={{ marginTop: 15 }}
                               
                            //   key={item.id} //uma id para cada produto
                            >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{user_id}</Text> 
                                {/*aqui vai o card de imagens, mas não está puxando do banco de dados todas as imagens*/}
                        {/*
                                <Card.Image 
                                    style={styles.img}
                                    source={{uri : item.imagem}} 
                                />
                                <Card.Divider />
                                <Card.Title>{item.titulo}</Card.Title>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.valor}</Text> 
                                
                                <Text style={{ fontSize: 16, marginTop: 5 }}>{item.descricao}</Text>
                                
                            </Card>
                    */}
                    </View >
                )
                }
            />

        </View >
    );

}



const styles = StyleSheet.create({
    img: {
        //  width: 96,
        width: 98,
        height: 118, // altura da imagem
        /*
        padding: 0,
        resizeMode: 'contain',
        */
    },
    txtTitle: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold', //texto em negrito
        color: '#000000',
        // margin: 10,
    },
    txtValor: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 15,
        color: '#000000',
        //marginTop: 10,
        //marginHorizontal: 10,
        //  margin: 10,

    },
    txtDetalhes: {
        paddingLeft: 10,
        paddingRight: 3,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 12,
        color: '#000000',
        width: '60%',

        //  marginHorizontal: 5,
        //   marginRight: 10,
        //paddingRight: 15,     

    },
});




















