import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import FormButton from '../../components/FormItens/FormButton';
import { AuthContext } from '../../components/componentesGerais/Auth/AuthProvider';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
//import firestore from '@react-native-firebase/firestore';
import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import ImageCropPicker from 'react-native-image-crop-picker';
import EscolherImagemPerfil from '../../components/componentesGerais/EscolherImagemPerfil';



export default function PerfilTopTab() {


    /*
    //Dica do cadastrar o usuário e mostrar o nome do usuário no perfil
    //Link: https://stackoverflow.com/questions/64578393/displaying-user-data-from-firebase-firestore-in-react-native-within-a-text-tag
    [OK - corrigido aqui dia 05/07/2024]
*/
    const [user, setUser] = useState();
    const { uid } = auth().currentUser;

    const getUser = async () => {
        try {
            const documentSnapshot = await firestore()
                .collection('users')
                .doc(uid)
                .get();

            const userData = documentSnapshot.data();
            setUser(userData);
        } catch {
            //do whatever
        }
    };

    // Get user on mount
    useEffect(() => {
        getUser();
    }, []);

    console.log(user && user?.nomeCompleto)
    console.log(user && user?.email)



    //Função voltar ao Inicio do aplicativo, para fazer outro login.
    const Logout = () => {
        Alert.alert("SAIR", "Tem certeza que deseja SAIR?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "SIM",
                onPress: () => auth().signOut() //Navigation.goBack() volta para "PaginaInicial" pois as Tabs já estão configuradas como InitialHome para iniciar na "Pagina Inicial"
                //Dicas nos links: https://www.tabnews.com.br/marcosveloso/template-de-rotas-react-native-com-native-stack-bottom-tabs-e-drawer-navigator
                //Dicas nos link complementar com o código gitHub: https://github.com/MarcosVel/routes-template/commit/33e621df08b702225460437fd0b3fb58678b98d9

            }
        ]);
        return true;

    };


    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <EscolherImagemPerfil />

                <View style={{ marginTop: 20 }} >
                    <View style={{ flexDirection: "row", fontWeight: 'bold' }}>
                        {/* (Observação: o ícone está acima do Text (do usuário conectado, user_id), então ele aparece na extrema esquerda, se estivesse abaixo do Text, ele apareceria à direita.) */}
                        <Icon style={styles.iconEmail} name="person-outline" size={20} color="#000000" />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Usuário: {user && user?.nomeCompleto}</Text>
                    </View>
                    <View style={{ flexDirection: "row", fontWeight: 'bold' }}>
                        <Icon style={styles.iconEmail} name="mail-outline" size={20} color="#000000" />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Email: {user && user?.email}</Text>
                    </View>
                </View>

            </View>


            <View style={styles.botaoAdicionarMargem}>
                <TouchableOpacity style={styles.btn} onPress={() => Logout()} >
                    {/* onPress={() => navigation.navigate("Login")}> */}
                    <Text style={styles.textoBotao}>SAIR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: "center"
    },

    botaoAdicionarMargem: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        width: '100%',
        marginVertical: 10,
    },
    btn: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
    },
    textoBotao: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },

    iconEmail: {
        padding: 5, //para alinhar da Erquerda p/ direita, na margem dentro do "FlexDirection: rom" do View area do Text do "Email"
    },


})

