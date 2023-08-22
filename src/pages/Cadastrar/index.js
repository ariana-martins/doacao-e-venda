import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import { Button } from 'react-native-elements';


//falta configurar a 'function' da autenticacao do firebase no codigo 
//e falta criar uma parte de email e senha no console do firebase
//Falta configurar "KeyboardAvoidingView" para preencher o e-mail, senha, para a tela ficar na mesma posição sem o teclado sobreescrever a tela de preenchimento do login.
// Esse "KeyboardAvoidingView" não utilizei na pagina de "Adicionar novo produto" posso pegar os exemplos de lá.

export default function Cadastrar({ navigation }) {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setdataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);


    //Autenticação do usuário com o firebase
    const userCadastrar = async () => {
        if (!email || !senha) {
            Alert.alert("Por favor preencha todos os dados")
            return
        }
        try { //Criar usuário com email e senha no firebase
            await auth().createUserWithEmailAndPassword(email, senha)
        } catch (err) {
            Alert.alert("Dados cadastrados")
        }
    }

    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.txtCadastro}>Cadastro</Text>
                <Image style={styles.imgLogo} source={require('../../../src/assets/logo_novo.jpg')} />

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
    {/*
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="Nome Completo:"
                            value={nomeCompleto}
                            mode="outlined"
                            onChangeText={text => setNomeCompleto(text)}
                        />
                    </View>
  */}
                    <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>
                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputAreaEmail}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="Endereço de e-mail::"
                                value={email}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setEmail}
                            />
                            {/* (Observação: o ícone está abaixo do TextInput, então ele aparece na extrema direita, se estivesse acima do TextInput, ele apareceria à esquerda.) */}
                            <Icon style={styles.iconEmail} name="person-outline" size={20} color="#000000" />
                        </View>
                    </View>

    {/* 
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="Endereço de e-mail:"
                            value={email}
                            mode="outlined"
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
    */}




                    <Text style={styles.txtEmail_e_Senha}>Data de Nascimento:</Text>
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="dd/mm/aaaa:"
                            value={dataNascimento}
                            mode="outlined"
                            onChangeText={text => setdataNascimento(text)}
                        />
                    </View>
                    <Text style={styles.txtEmail_e_Senha}>Senha:</Text>
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="Senha:"
                            value={senha}
                            mode="outlined"
                            secureTextEntry={true}
                            onChangeText={text => setSenha(text)}
                        />
                    </View>
                    <Text style={styles.txtEmail_e_Senha}>Confirmar Senha:</Text>
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="Confirmar Senha:"
                            value={confirmarSenha}
                            mode="outlined"
                            secureTextEntry={true}
                            onChangeText={text => setConfirmarSenha(text)}
                        />
                    </View>
                </View>
                {/* 
                <Button mode="contained" onPress={() => userCadastrar()} >
                    CadastrarTesteAuth
                </Button>
 */}
                <View style={styles.bordaAreaBotoes}>
                    <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.goBack()}>
                        {/* navigation.goBack está retornando para o Login após clicar em Cadastrar */}
                        <Text style={styles.txtEntrar_e_Cadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

//conteúdo de CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        margin: 20,
        backgroundColor: "pink",
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
        marginTop: 10,
    },
    bordaEmail_e_Senha_e_outros_dados: {
        width: "100%",
        backgroundColor: "yellow",
    },
    txtEmail_e_Senha: {
        fontFamily: "Roboto",
        fontSize: 24,
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

//Parei aqui, tenho que ver como formata data dd/mm/aaaa (dia, mês, ano) no cadastro do TextInput



    /*
    bordaTextInput: {
        paddingHorizontal: 15, //tamanho da borda do textInput do espaço na lateral esquerda e direita da tela.
    },
    TextoInput: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#FFFFFF', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        paddingLeft: 10, // a partir de onde inicia digitar o texto, à esquerda, dentro da borda
        marginBottom: 10, // margem do botão input, entre as duas bordas de input
    },
    textoUser: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 28, //tamanho do texto
    },
    textoSenha: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 28, //tamanho do texto
    },
    bordaAreaBotoes: {
        alignItems: "center", //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        paddingVertical: 15,
    },
    textoEsqueciSenha: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textDecorationLine: 'underline', //texto sublinhado
    },
    btnEntrar_e_Cadastrar: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    txtEntrar_e_Cadastrar: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    */
});

