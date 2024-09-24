import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/Ionicons';


import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';


//Função Login
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Login componente renderizará um <Text> elemento.


export default function Login() {
    const navigation = useNavigation();

    //Aqui vai apontar para o Hooks (o useState já aponta na parte de cima com react native)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [esqueciMinhaSenha, setEsqueciMinhaSenha] = useState(true);


    //Autenticação do usuário com o firebase

    // Vai Entrar direto nas páginas clicando em "Entrar" c/ => "userLogin" pois na Página inicial o usuário ele está autenticado no "<AuthNavigator/>" e então acessa o "<TabNavigator/>".
    //   return (
    //      <NavigationContainer>
    //        {user ? <TabNavigator /> : <AuthNavigator />}
    //      </NavigationContainer>
    //    )

    /*
        function userLogin() {
            signInWithEmailAndPassword(email, senha)
        }
    */






    //    function recuperarSenha() {

    const recuperarSenha = () => {
        setEsqueciMinhaSenha(false)

        if (email === "") {
            return (
                Alert.alert("Digite o email para recuperar a senha")
            )
        }


        //return 
        firebase.auth().sendPasswordResetEmail(email)

            .then(() => {
                setEsqueciMinhaSenha(true)
                Alert.alert('Email enviado com sucesso');
            })

            // .catch(error => {
            //     Alert.alert("O erro é: ", error.message);
            // })
            .catch(error => {
                Alert.alert("E-mail não existe!", "Por favor, realize o cadastro com e-mail válido!")
                //precisa deixar esse console log como "error.message" para que o Alert funcione certinho, 
                //sem mostrar erro na tela do usuario da aplicação
                console.log(error.message)
            })
    }




    const userLogin = async () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Por favor preencha todos os dados")
            return;
        }

        try { //modificar nome de "result" para "credencial"
            //acessa conta do usuário já criado na tela Cadastrar com mesmo email e senha
            const result = await auth().signInWithEmailAndPassword(email, senha)
            Alert.alert("Feito login")
            //   console.log('Feito Login')


            // console.log(auth().currentUser) //Esse console.log mostra todos os dados de login do usuário, mesmo não configurado o displayName.

            //  return result;
            return console.log(result)
            //na hora do login vai aparecer as informações de:
            {/*  
          {"additionalUserInfo": {"isNewUser": false}, "user": {"displayName": null, "email": "teste@faccat.br", "emailVerified": false,
         "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], 
         "providerId": "firebase", "tenantId": null, "uid": "_______"}}
        */}

        } catch (error) {
            //console.log(error.code) //error.code mostra se o endereço de e-mail ou a senha foi digitado errado, e mostra através do log
            Alert.alert("Algo está errado", "Digite novamente")
        }


    }


    //=================================================================
    {/* EXEMPLO DE Cadastrar/Login usuario:
// Nome do vídeo no youtube: #6 Signup & login to Firebase | WhatsApp Clone using React Native & Firebase in Hindi
// Link do youtube: https://www.youtube.com/watch?v=WsOCNkA8SpM&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=10
// Canal do youtube: CODERS NEVER QUIT
*/}

    //=================================================================

    return (

        <View style={styles.container}>
            <Text style={styles.txtLogin}>Login</Text>
            <Image style={styles.imgLogo} source={require('../../../src/assets/logo/logo_novo.jpg')} />

            <View style={styles.bordaEmail_e_Senha}>
                <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>

                <View style={styles.botaoAdicionarMargem}>
                    <View style={styles.inputAreaEmail}>
                        <TextInput
                            style={styles.input}
                            placeholder="Endereço de e-mail:"
                            value={email}
                            keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                            onChangeText={setEmail}
                        />
                        {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                        <Icon style={styles.iconEmailEsenha} name="person-outline" size={20} color="#000000" />
                    </View>
                </View>


                {esqueciMinhaSenha ?
                    <>
                        <Text style={styles.txtEmail_e_Senha}>Senha:</Text>


                        <View style={styles.botaoAdicionarMargem}>
                            <View style={styles.inputAreaSenha}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="************"
                                    value={senha}
                                    keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                    onChangeText={setSenha}
                                    secureTextEntry={passwordVisibility}
                                />
                                <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)} >
                                    {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                                    {/* Exemplo de mostrar e ocultar senha no TextInput no react native: https://stackoverflow.com/questions/74760150/hide-and-show-password-in-react-native-with-vector-icon */}
                                    <Icon style={styles.iconEmailEsenha} name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color="#000000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                    : null}





            </View>

            <View style={styles.bordaAreaBotoes}>
                {/* <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenha")}>
                        <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity> */}


                {esqueciMinhaSenha ?
                    <TouchableOpacity onPress={recuperarSenha}>
                        <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={recuperarSenha}>
                        <Text style={styles.textoEsqueciSenha}>Enviar e-mail de recuperação de senha</Text>
                    </TouchableOpacity>
                }



                {esqueciMinhaSenha ?
                    <>
                        <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => userLogin()}>
                            {/* onPress={() => navigation.navigate("ScreenNavigator")}> */}
                            <Text style={styles.txtEntrar_e_Cadastrar}>ENTRAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.navigate("Cadastrar")}>
                            <Text style={styles.txtEntrar_e_Cadastrar}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </>
                    : null}

            </View>
        </View>


    );
};


//=====================================================
/*
import React, { useState, useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { AuthContext } from "../navigations/AuthProvider";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.textBemVindo}>Bem-vindo ao App</Text>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle='Login'
                onPress={() => login(email, password)}
            />
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navButtonText}>Novo usuario? clique aqui</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBemVindo: {
        fontSize: 24,
        marginBottom: 10,
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 20,
        color: '#6646ee',
    },
});

*/