import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    const [passwordVisibility, setPasswordVisibility] = useState(true);

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
                    {/* //<TextInput placeholder="Digite seu usuário:" onChangeText={Text=>setUsuario}/>  */}
                    {/* //<TextInput placeholder="Digite sua senha:" secureTextEntry={true} onChangeText={Text=>setSenha}/> */}

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


                    {/*         
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
             */}



                </View>

                <View style={styles.bordaAreaBotoes}>
                    <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenha")}>
                        <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnEntrar_e_Cadastrar} onPress={() => navigation.navigate("SettingScreenTeste")}>
                        <Text style={styles.txtEntrar_e_Cadastrar}>ENTRAR</Text>
                    </TouchableOpacity>
                    {/*
                    <Button mode="contained" onPress={() => userLogin()} >
                        LoginTesteAuth
                    </Button>
 */}
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
        margin: 20, // espaço da margem ao redor da tela, de fora para dentro da tela.
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
        marginTop: 5,
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
    botaoAdicionarMargem: {
        width: '100%',
        marginTop: 5,
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
    bordaAreaBotoes: {
        flex: 1,
        alignItems: "center", //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        height: "40%", // altura 
        width: "100%", // largura do espaço da página na parte "bordaAreaBotoes"
        justifyContent: "center", //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
    },
    textoEsqueciSenha: {
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textDecorationLine: 'underline', //texto sublinhado
        marginVertical: 50,
    },
    btnEntrar_e_Cadastrar: {
        flex: 1,
        height: 50, //altura dos botões
        width: "100%", // largura 100% da tela dos botões, os botões vão até na margem da "bordaAreaBotoes"
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        marginVertical: 15,
        justifyContent: "center", //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
    },
    txtEntrar_e_Cadastrar: {
        color: '#FFFFFF', //cor do texto 
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
    },

});

