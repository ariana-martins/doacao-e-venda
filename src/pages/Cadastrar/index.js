import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


// Falta acrescentar displayName == NomeCompleto para o usuário, exemplo do link:
// https://stackoverflow.com/questions/71525271/react-native-firebase-authentication-displayname-null
// Link verificado dia 13/11/2023.


export default function Cadastrar() {
    const navigation = useNavigation();

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    //  const [dataNascimento, setdataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    //Autenticação do usuário com o firebase
    const userCadastrar = async () => {

        if (confirmarSenha !== senha) {
            Alert.alert("Senha não confere")
            return
        } else {
            setConfirmarSenha()
        }


        if (!email.trim() || !senha.trim() || !nomeCompleto.trim() || !confirmarSenha.trim()) {
            Alert.alert("Por favor preencha todos os dados")
            return
        }
        try { //Criar usuário com email e senha no firebase
            const result = await auth().createUserWithEmailAndPassword(email, senha)
            firestore().collection('users').doc(result.user.uid).set({
                // nomeCompleto: result.user.displayName, //Preciso utilizar essa linha para acrescentar o displayName, mas ele está retornando como "null" no firebase em "nomeCompleto".
                nomeCompleto: nomeCompleto,
                email: result.user.email,
                uid: result.user.uid,
            })
        }

        catch (err) {
            Alert("algo deu errado")
        }
    }

    //Falta formatar a data dd/mm/aaaa (dia, mês, ano) no cadastro do TextInput


    // Outro exemplo de tela de cadastro com data de nascimento (porém um pouco incompleto) no Link a seguir:
    // https://pt.stackoverflow.com/questions/493069/como-pegar-id-dos-dados-criados-em-firebase



    return (
        <View style={styles.container}>

            <KeyboardAvoidingView behavior='position' style={{ flex: 1, width: "100%" }}>

                <View style={styles.bordaTxtLogo}>
                    <Text style={styles.txtCadastro}>Cadastro</Text>
                    <Image style={styles.imgLogo} source={require('../../../src/assets/logo/logo_novo.jpg')} />
                </View>

                <View style={styles.bordaEmail_e_Senha_e_outros_dados}>

                    <Text style={styles.txtEmail_e_Senha}>Nome Completo:</Text>

                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputAreaEmail}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="Nome completo:"
                                value={nomeCompleto}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setNomeCompleto}
                            />
                            {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                            <Icon style={styles.iconEmail} name="person-outline" size={20} color="#000000" />
                        </View>
                    </View>

                    <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>
                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputAreaEmail}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="Endereço de e-mail:"
                                value={email}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setEmail}
                            />
                            {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                            <Icon style={styles.iconEmail} name="person-outline" size={20} color="#000000" />
                        </View>
                    </View>

                    {/* Utilizar aqui talvez a biblioteca (mascara) para criar data de nascimento:
                            => React Native Masked text (npm i react-native-mask-text), e/ou
                            => React Native Mask Input (npm i react-native-mask-input)
                        */}

                    {/*
                        <Text style={styles.txtEmail_e_Senha}>Data de Nascimento:</Text>
                        <View style={styles.botaoAdicionarMargem}>
                            <View style={styles.inputAreaEmail}>
                                <TextInput
                                    style={styles.input}
                                    // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                    placeholder={"dd/mm/aaaa"}
                                    value={dataNascimento}
                                    keyboardType="numeric" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                    onChangeText={setdataNascimento}
                                />
                            </View>
                        </View>
                    */}

                    <Text style={styles.txtEmail_e_Senha}>Senha:</Text>
                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputAreaSenha}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="************"
                                value={senha}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setSenha}
                                secureTextEntry={passwordVisibility}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)} >
                                {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                                {/* Exemplo de mostrar e ocultar senha no TextInput no react native: https://stackoverflow.com/questions/74760150/hide-and-show-password-in-react-native-with-vector-icon */}
                                <Icon style={styles.iconSenha} name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.txtEmail_e_Senha}>Confirmar Senha:</Text>
                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputAreaSenha}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="************"
                                value={confirmarSenha}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setConfirmarSenha}
                                secureTextEntry={passwordVisibility}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)} >
                                {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                                {/* Exemplo de mostrar e ocultar senha no TextInput no react native: https://stackoverflow.com/questions/74760150/hide-and-show-password-in-react-native-with-vector-icon */}
                                <Icon style={styles.iconSenha} name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.bordaAreaBotoes}>
                        <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => userCadastrar()}>
                            {/* onPress={() => navigation.goBack()}  */}
                            {/* navigation.goBack está retornando para o Login após clicar em Cadastrar */}
                            <Text style={styles.txtEntrar_e_Cadastrar}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>
        </View>
    );
};
