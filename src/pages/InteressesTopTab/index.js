import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
//import { Card } from 'react-native-elements';
import { Card, Divider } from 'react-native-paper';

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
        <View style={{ flex: 1, padding: 10, backgroundColor: '#FFFFFF' }}>

            <Text style={styles.txtTitleInteresses}>Lista de interesses - Aguardando confirmação:</Text>

            {/** Falta criar função: Lista de interesses - Aguardando confirmação:<  */}

            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ maxHeight: 170 }}
                renderItem={({ item }) => (
                    <View style={{ justifyContent: 'center' }}>
                        <Card style={{ margin: 5 }}>
                            <View style={{ flexDirection: 'row' }}>

                                <Card >
                                    <Card.Cover
                                        style={styles.img}
                                        source={{ uri: item.imagem }}
                                    />

                                </Card>
                                {/*<View style={{ flexDirection: 'column', width: '100%' }}> */}

                                <View style={{ flexDirection: 'column', width: 220, height: 150 }}>

                                    <View style={{ width: '100%', height: '65%', }}>
                                        <Text style={styles.txtTitle}>{item.titulo}</Text>
                                        <Text style={styles.txtValor}>{item.valor}</Text>
                                        <Text style={styles.txtDetalhes}>Detalhes: {item.descricao}</Text>
                                    </View>

                                    <View style={styles.botaoAdicionarMargem}>
                                        <TouchableOpacity style={styles.btnChat}
                                        // onPress={() => navigation.navigate('ChatMensagens', { userDono })}
                                        // onPress={() => navigation.navigate('ChatMensagens', {userDono: item.messageText})}
                                        onPress={() => {Alert.alert('Cancelar Interesse', 'Clicou em Cancelar Interesse')}}
                                        >
                                            <Text style={styles.textoBotao}>Cancelar Interesse</Text>
                                            
                                        </TouchableOpacity>
                                    </View>
                                    {/* Aqui vai o botão "Cancelar interesse, fica no canto inferior à direita do item do produto*/}
                                </View>


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
                )}
            />
            <Text style={styles.txtTitleInteresses}>Lista de interesses - Aceitos ou Recusados:</Text>


            <Text style={styles.txtSubtituloInteresses}>Aceitos:</Text>

            {/** Falta criar função: Lista de interesses - Aceitos ou Recusados:  */}

            <View style={{ marginTop: 5, }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image style={styles.prodImage2} source={require('../../assets/img/img9.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img8.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img7.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img6.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img5.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img4.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img3.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img2.png')} />
                </ScrollView>
            </View>

            <Text style={styles.txtSubtituloInteresses}>Recusados:</Text>

            {/** Falta criar função: Lista de interesses - Aceitos ou Recusados:  */}

            <View style={{ marginTop: 5, }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image style={styles.prodImage2} source={require('../../assets/img/img3.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img2.png')} />
                    <Image style={styles.prodImage2} source={require('../../assets/img/img1.png')} />

                </ScrollView>
            </View>


            <Text style={styles.txtTitleInteresses}>Lista de interesses - Adquiridos:</Text>

            {/* Falta criar função: Lista de interesses Adquiridos: */}
            <View style={{ marginTop: 5, }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image style={styles.prodImage} source={require('../../assets/img/img5.png')} />
                    <Image style={styles.prodImage} source={require('../../assets/img/img4.png')} />
                    <Image style={styles.prodImage} source={require('../../assets/img/img3.png')} />
                    <Image style={styles.prodImage} source={require('../../assets/img/img2.png')} />
                    <Image style={styles.prodImage} source={require('../../assets/img/img1.png')} />
                </ScrollView>
            </View>


        </View >
    );

}



const styles = StyleSheet.create({
    txtTitleInteresses: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Roboto',
    },
    txtSubtituloInteresses: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    img: {
        width: 98,
        height: 118, // altura da imagem
    },
    txtTitle: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold', //texto em negrito
        color: '#000000',
    },
    txtValor: {
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 15,
        color: '#000000',
    },
    txtDetalhes: {
        paddingLeft: 10,
        paddingRight: 3,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 12,
        color: '#000000',

    },
    botaoAdicionarMargem: {
        //paddingHorizontal: 15,
        // alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        //justifyContent: 'center',
        //  marginVertical: 10,
        alignItems: 'flex-end',
        marginRight: 10,
    },

    btnChat: {
        width: 80, //largura
        //  width: 250, //largura
        height: 50, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda

    },
    textoBotao: {
        color: '#FFFFFF', //cor do texto
        //fontWeight: 'bold', //texto em negrito
        fontSize: 15, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },

    prodImage: {
        width: 96,
        height: 118,
        resizeMode: "cover",
        //  justifyContent: 'center',
        //  alignItems: 'center',
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 5,
    },
    prodImage2: {
        width: 60,
        height: 80,
        resizeMode: "cover",
        //  justifyContent: 'center',
        //  alignItems: 'center',
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 5,
    }

});




















