import { StyleSheet } from "react-native"

//conteúdo de CSS
export const styles = StyleSheet.create({
    container: {
        flex: 1,
   //     margin: 20,
        backgroundColor: '#FFFFFF',
        padding: 20,
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
        paddingTop: 20,
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

