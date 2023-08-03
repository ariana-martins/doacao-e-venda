import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Cadastrar from '../../../src/pages/Cadastrar';

import auth from '@react-native-firebase/auth';
//falta configurar a 'function' da autenticacao do firebase no codigo 
//e falta criar uma parte de email e senha no console do firebase


//Aqui vai apontar para o Hooks (o useState já aponta na parte de cima com react native)
//const [usuario, setUsuario] = useState('');
//const [senha, setSenha] = useState('');

//Colocar o texto Input assim dentro da view, quando utilizar o hooks
//<TextInput style={styles.TextoInput} placeholder="Digite seu usuário:" onChangeText={Text=>setUsuario}/>
//<TextInput style={styles.TextoInput} placeholder="Digite sua senha:" secureTextEntry={true} onChangeText={Text=>setSenha}/>

//Função Login
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Login componente renderizará um <Text> elemento.

const Login = () => {

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.conteiner}>
                <Text style={styles.txtLogin}>Login</Text>
                <Image style={styles.imgLogo} source={require('../../../src/assets/logo_doar_e_vender.png')} />
            </View>

            <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>


            <TextInput style={styles.TextoInput}
                placeholder="Endereço de e-mail:"
                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.

            />
            <Text style={styles.txtEmail_e_Senha}>Senha:</Text>
            <TextInput style={styles.TextoInput} placeholder="Trocar para asteriscos ******" secureTextEntry={true} />

            <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>

            <TouchableOpacity style={styles.btnLogin} onPress={() => login()}>
                <Text style={styles.textoLogin}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnLogin} onPress={() => cadastrar()}>
                <Text style={styles.textoLogin}>CADASTRAR</Text>
            </TouchableOpacity>


        </View>
    );
};

//conteúdo de CSS
const styles = StyleSheet.create({
    conteiner: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //flex: 1, //preenche toda a tela
        // backgroundColor: '#FFFFFF', //cor da "tela do App/imagem" de plano de fundo
        //alignItems: 'center', //centralizando todos os textos e imagens dentro do estilo conteiner
        //justifyContent: 'center', //justifica todos os textos ao centro da tela
       // padding: 20, //margem da área interna, tipo caixa de texto, quanto maior a margem, menos texto dá para digitar
    },
    txtLogin: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 40, //tamanho do texto
      //  alignItems: "center",
     //   justifyContent: "center", //justifica todos os textos ao centro da tela
    },
    imgLogo: {
        width: 180, //largura da imagem
        height: 180, //altura da imagem
        resizeMode: 'contain', //ajusta o tamanho da imagem
    },
    txtEmail_e_Senha: {
        paddingHorizontal: 15,
        fontFamily: "Roboto",
        fontSize: 24,
        color: "#000000",
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
    textoLogin: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    btnLogin: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    },
    textoEsqueciSenha: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textDecorationLine: 'underline', //texto sublinhado
    },

});


//exporta componente.
export default Login;
