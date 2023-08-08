import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { TextInput } from 'react-native-paper';
import Cadastrar from '../../../src/pages/Cadastrar';

import auth from '@react-native-firebase/auth';
//falta configurar a 'function' da autenticacao do firebase no codigo 
//e falta criar uma parte de email e senha no console do firebase
//Falta configurar "KeyboardAvoidingView" para preencher o e-mail, senha, para a tela ficar na mesma posição sem o teclado sobreescrever a tela de preenchimento do login.

//Função Login
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Login componente renderizará um <Text> elemento.

const Login = () => {
    //Aqui vai apontar para o Hooks (o useState já aponta na parte de cima com react native)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.conteiner}>
                <Text style={styles.txtLogin}>Login</Text>
                <View style={styles.bordaimgLogo}>
                    <Image style={styles.imgLogo} source={require('../../../src/assets/logo_doar_e_vender.png')} />
                </View>
            </View>
            <View style={styles.bordaEmail_e_Senha}>
                <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>
                {/* //Colocar o texto Input assim dentro da view, quando utilizar o hooks */}
                {/* //<TextInput style={styles.TextoInput} placeholder="Digite seu usuário:" onChangeText={Text=>setUsuario}/>  */}
                {/* //<TextInput style={styles.TextoInput} placeholder="Digite sua senha:" secureTextEntry={true} onChangeText={Text=>setSenha}/> */}
                <View style={styles.bordaTextInput}>
                    <TextInput
                        label="Endereço de e-mail:"
                        value={email}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                </View>
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
                <TouchableOpacity>
                    <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => login()}>
                    <Text style={styles.txtEntrar_e_Cadastrar}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => cadastrar()}>
                    <Text style={styles.txtEntrar_e_Cadastrar}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

//conteúdo de CSS
const styles = StyleSheet.create({
    conteiner: {
        alignItems: 'center', //centralizando todos os textos e imagens dentro do estilo conteiner
        // padding: 20, //margem da área interna, tipo caixa de texto, quanto maior a margem, menos texto dá para digitar
        height: "40%", //espaço da pagina
        justifyContent: "space-evenly",
    },
    txtLogin: {
        paddingTop: 15,
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 40, //tamanho do texto
    },
    bordaimgLogo: {
        borderRadius: 180,
        resizeMode: 'contain', //ajusta o tamanho da imagem
    },
    imgLogo: {
        width: 250, //largura da imagem
        height: 250, //altura da imagem
    },
    bordaEmail_e_Senha: {
        height: "30%",
        justifyContent: "space-evenly",
    },
    txtEmail_e_Senha: {
        paddingHorizontal: 15,
        fontFamily: "Roboto",
        fontSize: 24,
        color: "#000000",
    },
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
        alignItems: "center", //justifica todos os botões e texto ao centro da tela
        paddingVertical: 15,
        height: "30%",
        justifyContent: "space-evenly",
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
        alignItems: 'center', //centraliza o texto ao meio da borda
    },
    txtEntrar_e_Cadastrar: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },

});


//exporta componente.
export default Login;
