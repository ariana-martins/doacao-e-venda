import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import HeaderChat from '../../components/Header/HeaderChat';
import DialogConfirmacao from '../../components/Dialog/DialogConfirmacao';
import DialogErro from '../../components/Dialog/DialogErro';
import ModalEscolherImagem from '../../components/componentesGerais/ModalEscolharImagem';


export default function ItemListaChatNovaTarefa({ navigation }) {

    /*
    const { user, logout } = useContext(AuthContext);

    //const navigation = useNavigation();


    const [task, setTask] = useState([]);

    function deleteTask(id) {
        firebase.firestore().collection("Tasks").doc(id).delete()
    }
    //Referência de exemplo para criar lista, site tarefas (Tasks): 
    // Link do youtube: https://www.youtube.com/watch?v=0AM6AXlFwxM
    // Título do video do youtube: REACT NATIVE + FIREBASE: CRIANDO UM APP COMPLETO
    // Canal do youtube: Léo Scorza - OneBitCode

    const qlqrCoisa = firebase.firestore().collection('Tasks');
    useEffect(() => {
        qlqrCoisa.onSnapshot((querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                // ao invés de utilizar "id", trocar depois para "key", exemplo:
                // data.push({ ...doc.data(), key: doc.id
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])
*/
    /*
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
    */




    //array "Chat"
    const Chat = [
        {
            id: '1',
            image: require('../../../src/assets/img/img1.png'),
            title: 'Sapatênis',
            valor: 'R$200,00',
            messageTime: '4 mins atrás',
            messageText: 'João - dono do produto',
            imagemUserDono: require('../../assets/imgUserDono/logoTI.png'),
            messageUser: 'Usuário 1',
        },

    ];


    //falta modificar para "data"
    //const RenderItemListChat=({ data }) => {
    const RenderItemListChat = ({ item }) => {
        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatMensagens',
                    { userDono: item.messageText })}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper}>

                            <View style={{
                                flexDirection: 'row',
                                //flexWrap: 'wrap',
                                //   position: 'absolute', 
                                //top: 0, bottom: 0, left: 0, right: 0

                            }}>


                                <Image style={styles.prodImg}
                                    source={item.image}
                                />

                                <Image style={styles.userDonoImg}
                                    source={item.imagemUserDono}
                                />


                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column', marginLeft: 20, }}>
                                        <Text style={styles.userName}>{item.title}</Text>
                                        <Text style={styles.userValor}>{item.valor}</Text>
                                        <Text>{item.messageText}</Text>
                                        <Text>{item.messageUser}</Text>
                                    </View>
                                    <Text style={styles.postTime}>{item.messageTime}</Text>
                                </View>

                            </View>

                        </View>

                        <View style={styles.textSection}>


                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    //===========================================================================


    const [descricao, setDescricao] = useState(null);

    const addTarefa = async () => {
        //importar o firestore, e após isso, especificar a coleção, como tbm add os dados com o ID do usuário que queremos armazenar em nosso banco de dados
        firestore()
            .collection('Tasks')
            .add({
                descricao: descricao,
                status: false,
                // created_at: firestore.FieldValue.serverTimestamp()
              //  postProduto: firestore.Timestamp.fromDate(new Date()),
            })
            .then(() => { //se for bem sucedido, produto acrescentado.
                Alert.alert('Tarefa', 'Tarefa criada com sucesso')
                console.log('Tarefa adicionado!');
                setDescricao(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
            })
            .catch((error) => { //caso ao contrário, aparece um erro...
                console.log('Algo deu errado com a postagem adicionada ao firestore', error);
            });
            //navigation.navigate("ItemListaChat") //volta para a página ItemListaChat, após enviar a mensagem
            navigation.navigate("ItemListaChatNovaTarefa") //fica na pagina ItemListaChatNovaTarefa, após enviar a mensagem
    }


 

    return (

        <View style={styles.container}>

            <HeaderChat />


            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Chat}
                keyExtractor={item => item.id} //Mudar de item.id p/ item.key ( "key" do firebase)
                //falta modificar para "data"
                //renderItem={({ item }) => <RenderItemList data={item} />}
                renderItem={({ item }) => <RenderItemListChat item={item} />}

            />
            {/*          </View>   */}

            
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20}}>
                    Página da descrição da Tarefa
                    </Text>
            </View>

            
            <View style={{ backgroundColor: "#FFFFFF", flexDirection: 'row', paddingHorizontal: 10, }}>
                <View style={{ maxHeight: 40, paddingTop: 12 }}>
                    <TouchableOpacity>
                       <ModalEscolherImagem />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={{
                        flex: 1,
                        minHeight: 40,
                        maxHeight: 90,
                        paddingHorizontal: 12,
                        fontSize: 17,
                        paddingTop: 8,
                        marginHorizontal: 5,
                        borderRadius: 5,
                    }}
                    placeholder="Escreva sua mensagem aqui..."
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <View style={{ maxHeight: 40, paddingTop: 12 }}>
                    <TouchableOpacity>
                        <Icon name="send-outline" size={20} color="#000000" onPress={() =>{
                            addTarefa()
                            }}/>
                    </TouchableOpacity>
                </View>
            </View>



        </View>

    );

};

