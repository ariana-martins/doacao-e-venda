import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    const [dataNascimento, setdataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    //Autenticação do usuário com o firebase
    const userCadastrar = async () => {
        if (!email.trim() || !senha.trim() || !nomeCompleto.trim()) {
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
        } catch (err) {
            Alert("algo deu errado")
        }
    }

    //Falta formatar a data dd/mm/aaaa (dia, mês, ano) no cadastro do TextInput


    // Outro exemplo de tela de cadastro com data de nascimento (porém um pouco incompleto) no Link a seguir:
    // https://pt.stackoverflow.com/questions/493069/como-pegar-id-dos-dados-criados-em-firebase

    // Um exemplo em JavaScrip da data de Nascimento:
    // https://pt.stackoverflow.com/questions/5160/como-calcular-a-idade-de-uma-pessoa-com-js-a-partir-da-data-de-nascimento

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
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
        </View >
    );
};

//conteúdo de CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    bordaTxtLogo: {
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: "center",
    },
    txtCadastro: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 35, //tamanho do texto
        fontFamily: "Roboto", //nome da fonte do texto
    },
    imgLogo: {
        width: 120, //largura
        height: 120, //altura
        borderRadius: 180,
        marginTop: 5,
    },
    bordaEmail_e_Senha_e_outros_dados: {
        width: "100%",
    },
    txtEmail_e_Senha: {
        fontFamily: "Roboto",
        fontSize: 20,
        color: "#000000",
        marginTop: 5,
    },
    botaoAdicionarMargem: {
        width: '100%',
    },
    inputAreaEmail: {
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        flexDirection: "row",
    },
    inputAreaSenha: {
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        flexDirection: "row",
    },
    input: {
        flex: 1, //TextInput flex 1 para que ele ocupe toda a largura da exibição pai do View InputAreaEmail
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 18,
        width: '100%',
    },
    iconEmail: {
        padding: 10, //para alinhar da Erquerda p/ direita, na margem dentro do "FlexDirection: rom" do View InputAreaEmail
    },
    iconSenha: {
        padding: 10, //para alinhar da Erquerda p/ direita, na margem dentro do "FlexDirection: rom" do View InputAreaEmail
    },
    //Exemplos TextInpu com Icones "https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native"
    btnEntrar_e_Cadastrar: {
        height: 50, //altura dos botões
        width: "100%", // largura 100% da tela dos botões, os botões vão até na margem da "bordaAreaBotoes"
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: "center", //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        marginTop: 20,
    },
    txtEntrar_e_Cadastrar: {
        color: '#FFFFFF', //cor do texto 
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
    },
});

