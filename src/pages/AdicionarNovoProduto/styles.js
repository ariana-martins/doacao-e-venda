import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    
    bordaAddFotos: {
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#000000",
        borderStyle: 'dashed',
        width: "80%",
        //height: "80%",
        alignSelf: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    bordaButtonEscolherImagem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonEscolherImagem: {
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        marginTop: 10,
    },
    buttonTextEscolherImagem: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },

    texto: {
        marginHorizontal: 15,
        marginTop: 5,
        fontFamily: 'Roboto',
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',
    },  
    inputAreaTitulo: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        height: 40, //altura da borda do textInput
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    },
    inputAreaDetalhes: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        height: 80, //altura da borda do textInput
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    },
    inputDescricaoTituloDetalhes: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: "#000000",
    },

    checkboxOpcoes: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        marginBottom: 5,
        alignItems: 'center',
    },
    textoCheckBoxOpcoes: { //Texto ao lado do Checkbox
        fontFamily: 'Roboto',
        color: '#000000', //cor do texto
        fontSize: 15, //tamanho do texto
    },
    inputAreaCheckBoxOpcoes: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        height: 40, //altura da borda do textInput
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    }, 
    inputValor: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
    },
    
    bordabuttonCadastrarCancelar: {
        alignItems: 'center',
    },
    buttonCadastrarCancelar: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
        alignItems: 'center',
        marginTop: 10,
    },
    buttonTextCadastrarCancelar: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    

})