import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

//import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { Button } from 'react-native-elements';


//falta configurar a 'function' da autenticacao do firebase no codigo 
//e falta criar uma parte de email e senha no console do firebase
//Falta configurar "KeyboardAvoidingView" para preencher o e-mail, senha, para a tela ficar na mesma posição sem o teclado sobreescrever a tela de preenchimento do login.
// Esse "KeyboardAvoidingView" não utilizei na pagina de "Adicionar novo produto" posso pegar os exemplos de lá.

//Função Login
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Login componente renderizará um <Text> elemento.


export default function Login() {
    const navigation = useNavigation();

    //Aqui vai apontar para o Hooks (o useState já aponta na parte de cima com react native)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    //Autenticação do usuário com o firebase
    const userLogin = async () => {
        if (!email || !senha) {
            Alert.alert("Por favor preencha todos os dados")
            return
        }
        try { //acessa conta do usuário já criado na tela Cadastrar com mesmo email e senha
            const result = await auth().signInWithEmailAndPassword(email, senha)
            console.log(result.user)
        } catch (err) {
            Alert.alert("Os dados não conferem, tente novamente")
        }

    }



    return (
        // backgroundColor: "red" // cor para teste aqui da tela toda
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.txtLogin}>Login</Text>
                <Image style={styles.imgLogo} source={require('../../../src/assets/logo_novo.jpg')} />


                <View style={styles.bordaEmail_e_Senha}>
                    <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>
                    {/* //Colocar o texto Input assim dentro da view, quando utilizar o hooks */}
                    {/* //<TextInput style={styles.TextoInput} placeholder="Digite seu usuário:" onChangeText={Text=>setUsuario}/>  */}
                    {/* //<TextInput style={styles.TextoInput} placeholder="Digite sua senha:" secureTextEntry={true} onChangeText={Text=>setSenha}/> */}
                   
                    <View style={styles.botaoAdicionarMargem}>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.input}
                                // disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                                placeholder="Endereço de e-mail:"
                                value={email}
                                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                                onChangeText={setEmail}
                            />
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
            {/*                    
            <TextInput style={styles.TextoInput}
                placeholder="Endereço de e-mail:"
                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.

            />
            */}

                    <Text style={styles.txtEmail_e_Senha}>Senha:</Text>
                    <View style={styles.bordaTextInput}>
                        <TextInput
                            label="Senha:"
                            value={senha}
                            mode="outlined"
                            secureTextEntry={true}
                            //onChangeText={text => setSenha(text)} //ver a diferença entre essa linha e a debaixo do "onChanceText"
                            onChangeText={setSenha} //ver a diferença entre essa linha e a de cima do "onChanceText"
                        />
                    </View>
                    {/*
            <TextInput style={styles.TextoInput}
                placeholder="Trocar para asteriscos******" //ok
                secureTextEntry={true}
            />
             */}











                </View>

                <View style={styles.bordaAreaBotoes}>
                    <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenha")}>
                        <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.navigate("SettingScreenTeste")}>
                        <Text style={styles.txtEntrar_e_Cadastrar}>ENTRAR</Text>
                    </TouchableOpacity>

                    <Button mode="contained" onPress={() => userLogin()} >
                        LoginTesteAuth
                    </Button>

                    <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.navigate("Cadastrar")}>
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
        margin: 10,
        backgroundColor: "blue",
    },
    txtLogin: {
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
    bordaEmail_e_Senha: {
        width: "100%",
    },
    txtEmail_e_Senha: {
        fontFamily: "Roboto",
        fontSize: 24,
        color: "#000000",
        marginTop: 20,
    },
    //parei de ver daqui pra baixo, no {TextInput}, fazer igual o que está no Figma
    bordaTextInput: {
        width: "100%",
        backgroundColor: "maroon",
    },

    botaoAdicionarMargem: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        width: '100%',
        marginVertical: 10,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '98%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    },
    input: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },


    /*
    TextoInput: {
                width: "100%",
            textAlign: "right",
            width: 250, //largura
            height: 40, //altura
            backgroundColor: '#FFFFFF', //cor dentro da borda, onde vai ser incluído o texto
            borderRadius: 10, // circunferência da borda
            paddingLeft: 10, // a partir de onde inicia digitar o texto, à esquerda, dentro da borda
            marginBottom: 10, // margem do botão input, entre as duas bordas de input
     // paddingHorizontal: 15, //tamanho da borda do textInput do espaço na lateral esquerda e direita da tela.
    }, */

    /*
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
            //  height: "30%",
            justifyContent: "space-evenly", //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
            backgroundColor: "cyan"
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

