import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },
    inputAreaVoltar: {
        justifyContent: 'center', //Centralizando na vertical todos os texto e imagem ao centro da tela.
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral na horizontal)
        backgroundColor: '#C4C4C4',
        elevation: 2,
        width: 40,
        height: 40,
        borderRadius: 10,
     // marginLeft: 15,
     // marginTop: 15,
     // marginBottom: 15, //marginBotom dá espaçamento na margem na parte inferior.
    },
});