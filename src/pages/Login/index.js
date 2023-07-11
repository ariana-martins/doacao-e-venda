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
//<TextInput style={estilos.TextoInput} placeholder="Digite seu usuário:" onChangeText={Text=>setUsuario}/>
//<TextInput style={estilos.TextoInput} placeholder="Digite sua senha:" secureTextEntry={true} onChangeText={Text=>setSenha}/>

//Função Login
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Login componente renderizará um <Text> elemento.

const Login = () => {

    return (
        <View style={estilos.conteiner}>
            <Text style={estilos.txtTitulo}>Doar & Vender</Text>
            <Image style={estilos.imgLogo} source={require('../../../src/assets/logo.png')} />
            <Text style={estilos.textoUser}>Usuário:</Text>
            <TextInput style={estilos.TextoInput}
                placeholder="Digite seu usuário:"
                keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.

            />
            <Text style={estilos.textoSenha}>Senha:</Text>
            <TextInput style={estilos.TextoInput} placeholder="Digite sua senha:" secureTextEntry={true} />
            <TouchableOpacity style={estilos.btnLogin} onPress={() => login()}>
                <Text style={estilos.textoLogin}>ENTRAR</Text>
            </TouchableOpacity>
            <Cadastrar />
        </View>
    );
};

//conteúdo de CSS
const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center', //centralizando todos os textos e imagens dentro do estilo conteiner
        justifyContent: 'center', //justifica todos os textos ao centro da tela
        padding: 20, //margem da área interna, tipo caixa de texto, quanto maior a margem, menos texto dá para digitar
    },
    txtTitulo: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 40, //tamanho do texto
    },
    imgLogo: {
        //  witdth: 200, //largura seria '200' mas dá erro
        height: 111.58, //altura 
        resizeMode: 'contain', //ajusta o tamanho da imagem
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
    }

});


//exporta componente.
export default Login;
