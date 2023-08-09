import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//falta configurar a 'function' da autenticacao do firebase no codigo 
//e falta criar uma parte de email e senha no console do firebase
//Falta configurar "KeyboardAvoidingView" para preencher o e-mail, senha, para a tela ficar na mesma posição sem o teclado sobreescrever a tela de preenchimento do login.


export default function Cadastrar() {
    const navigation = useNavigation();

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setdataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.conteiner}>
                <Text style={styles.txtLogin}>Cadastro</Text>
                <View style={styles.bordaimgLogo}>
                    <Image style={styles.imgLogo} source={require('../../../src/assets/logo_doar_e_vender.png')} />
                </View>
            </View>
            <View>
            <Text style={styles.txtEmail_e_Senha}>Nome Completo:</Text>
                <View style={styles.bordaTextInput}>
                    <TextInput
                        label="Nome Completo:"
                        value={nomeCompleto}
                        mode="outlined"
                        onChangeText={text => setNomeCompleto(text)}
                    />
                </View>
                <Text style={styles.txtEmail_e_Senha}>E-mail:</Text>
                <View style={styles.bordaTextInput}>
                    <TextInput
                        label="Endereço de e-mail:"
                        value={email}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                </View>
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

            <View style={styles.bordaAreaBotoes}>
                <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.navigate("Login")}>
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
        height: "25%", //espaço da pagina
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
        height: "100%", //espaço da pagina
        justifyContent: "space-evenly",
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

