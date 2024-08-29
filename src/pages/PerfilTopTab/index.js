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


//================================================================================================
// Falta acrescentar displayName == NomeCompleto para o usuário, exemplo do link:
// https://stackoverflow.com/questions/71525271/react-native-firebase-authentication-displayname-null
// Link verificado dia 13/11/2023.

// console.log(auth().currentUser) // Linha já acrescentado no Login, para ver dados de login no console.log
// Esse console.log mostra todos os dados de login do usuário, mesmo não configurado o displayName.
//================================================================================================


export default function PerfilTopTab() {
    // const navigation = useNavigation();

    //Falta configurar o authContext. Perfil - Sair do App (seria o "logout" do AuthContext)
    //const { user, logout } = useContext(AuthContext);

    // const [userInfo, setUserInfo] = useState([]);
    //const [nomeCompleto, setNomeCompleto] = useState('');
    // const [email, setEmail] = useState('');

    //const [users, setUsers] = useState(null);

    //const [userData, setUserData] = useState(null);





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

    /*
        const getUsers = async () => {
            const querySanp = await firestore().collection('users').get()
            const allusers = querySanp.docs.map(docSnap => docSnap.data())
           // console.log(allusers)
           setUsers(allusers)
           console.log('usuario logado: ', user.uid)
        }
    
        useEffect(() => {
            getUsers()
        }, [])
    
    */

    //Ref of our image
    //const reference = storage().ref('url or name_of_file');
    const reference = storage().ref('Logo FACCAT (1).png');

    /*
        const choosePhotoFromLibrary = () => {
    
            ImageCropPicker.openPicker({
                width: 300,
                height: 400,const currentUser = 
                cropping: true
            }).then(images => {
                console.log(images);
            });
        }
    
    */


    //function for choose the image with image-crop-picker
    const choose_photo = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("Selecione uma imagem aqui:", image);
            setImage(image.path)
            //   sheet.current.close()
        }).catch(error => {
            console.log("Aviso: Cancelou imagemmm", error);
        });
    }


    //React Hook com useState para pegar a imagem selecionada e exibi-la em nosso aplicativo.
    const [image, setImage] = React.useState(null);


    //===========================================
    // Referência: https://dev.to/papemalick2015/react-native-firebase-storage-11kf
    // Agora vamos salvar a imagem no Firebase Storage
    // Para isso criamos outra função que iremos vincular com nossa referência, essa é a url da imagem.
    // Eu movo a referência constante dentro da função
    // save_photo

    const savephoto = async () => {
        const aploaduri = image;
        let filename = aploaduri.substring(aploaduri.lastIndexOf('/') + 1);
        const reference = storage().ref(`imagens/${filename}`)
        const task = reference.putFile(aploaduri)

        //set  transferred state
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        try {
            await task;
            const url = await reference.getDownloadURL() //Baixando um arquivo com uma URL, e para obter uma URL de uma referência usando .getDownloadURL().

            Alert.alert("Imagem!", "Imagem salva com sucesso.")
            console.log('Download URL:', url);
            return url
        }
        catch (error) {
            // Handle any errors that occur
            console.error("Qualquer erro", error);

        };

        // setImage(null);  //Essa linha resolveu temporariamente o erro de "Possible Unhandled Promise Rejeition (id: 1) qdo faz o upload da imagem e após salvar aparece esse erro..."

    }

    {/*

    const RenderCard = ({ item }) => {
        return (
            <View style={styles.myCard}>
                {/* "pic" é a "identificação da imagem" no firestore junto com "nomeCompleto" "uid" "email"...  */}
    {/* <Image source={{uri:item.pic}} style={{width:60, height: 60, borderRadius:30, backgroundColor: "green" }} /> */ }
    {/*         <Image source={require('../../assets/logo/logo_novo.jpg')} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "green" }} />
                {/*<Image source={require('../../../src/assets/logo_novo.jpg')} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: "black" }} /> */}
    {/*           <View>
                    <Text style={styles.txtEmail_e_Senha}>{item.nomeCompleto}</Text>
                    <Text style={styles.txtEmail_e_Senha}>{item.email}</Text>
                </View>
            </View>
        )
    }

*/}

    // ao invés desse user_id,tu pode fazer a mesma coisa mas usando o user todo

    // Ou seja, vai fazer um filtro para filtrar somente o usuário "conectado".
    //const user_id = firebase.auth().currentUser.uid; //[OK também, aqui mostra o Uid do usuário ao invés do email] 
    //const user_id = firebase.auth().currentUser.displayName; //Para incluir o nomeCompleto no Perfil do Usuário, tenho que fazer o displayName do firebase ficar igual o nome Completo.
    // const user_id = firebase.auth().currentUser.uid;
    //console.log('Users',users);

    /*
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setUserInfo(snapshot.data());
                } else { }
            })
    
        console.log('User:', userInfo.nomeCompleto); //Está em loop, repetindo o nomeCompleto na tela do console.log
        console.log('Email:', userInfo.email); //Está em loop, repetindo o email na tela do console.log
    
    */

    {/*
    //Dica do cadastrar o usuário e mostrar o nome do usuário no perfil
    //Link: https://stackoverflow.com/questions/64578393/displaying-user-data-from-firebase-firestore-in-react-native-within-a-text-tag
    [OK - corrigido aqui dia 05/07/2024]
*/}
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





    // Agora vamos criar o Button para escolher a imagem e exibi-la ("choose_photo")

    return (
        <View style={styles.container}>

            



            {/*
            <View style={styles.container_images}>
                <TouchableOpacity onPress={choose_photo}>
                    {image && <Image source={{ uri: image }}
                        style={styles.image_picker} />}
                    {!image && <Image source={require('../../assets/logo/logo.png')}
                        style={styles.image_picker} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={savephoto}>
                    <Text>Salvar imagem</Text>
                </TouchableOpacity>

            </View>
     
    */}

            {/* //====>>>> Falta configurar navegação do Login p/ as telas de páginas do usuário  */}
            {/* O Logout deve funcionar como exemplo do vídeo: "Part 1/2 | OLX Clone using React Native & Firebase | React Native & Firebase for beginners in Hindi" */}
            {/* Link do vídeo: https://www.youtube.com/watch?v=ntPQ-IPm3AM&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=6 */}
            {/* 
            <View>
                {/*
                <Text style={styles.txtEmail_e_Senha}>{nomeCompleto}Nome Usuário aqui</Text>
                <Text style={styles.txtEmail_e_Senha}>{email}E-mail do usuário aqui</Text>
                */}

            {/*
                <Text>{auth().currentUser.email}</Text>
                <Button mode="contained" onPress={() => auth().signOut()} >
                    LogoutTeste
                </Button>
                 */}

            {/*
                <FlatList
                    data={users}
                    renderItem={({ item }) => {
                        return <RenderCard item={item} />
                    }}
                    keyExtractor={(item) => item.uid}
                >
                </FlatList>

            </View>
                */}



            <View style={{ alignItems: 'center', marginTop: 20 }}>
             
             {/*
                <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: "green" }}
                    source={require('../../assets/logo/logo_novo.jpg')} />
            */}

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

            {/*
 
            <View style={styles.containerTeste}>
                <Text style={styles.textBemVindoUser}>Bem vindo user: {user.uid}</Text>
                <FormButton buttonTitle='Logout' onPress={() => logout()} />
            </View>
*/}


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
    containerTeste: {
        //  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    textBemVindoUser: {
        fontSize: 20,
        color: '#333333',
    },
    container_images: {
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        //   marginTop: hp('1%')
    },
    image_picker: {
        width: 100,
        height: 100,
        borderRadius: 50, //essa numeração é para deixar a borda da imagem completamente circular
        margin: 10,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#7159c1',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center' //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
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
    txtEmail_e_Senha: {
        fontFamily: "Roboto",
        fontSize: 20,
        color: "#000000",
        marginTop: 5,
        marginLeft: 15,
    },
    myCard: {
        flexDirection: "row", //direciona o texto que estava abaixo da imagem, para ao lado da imagem.
        margin: 3, // dá espaço na margem de cada item (imagem + texto: "nome" e "email") 
        padding: 4, // dá espaço à esquerda da margem da tela p/ cada item
        backgroundColor: "mistyrose",
        borderBottomWidth: 10,
        borderBottomColor: 'blue',
    },
    iconEmail: {
        padding: 5, //para alinhar da Erquerda p/ direita, na margem dentro do "FlexDirection: rom" do View area do Text do "Email"
    },

})

