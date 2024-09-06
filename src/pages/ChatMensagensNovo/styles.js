import { StyleSheet} from "react-native"

//conteúdo de CSS
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerChatMsg: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
    },
    headerChatMsgBotaoVoltar: {
        marginBottom: 15, 
        marginTop: 15, 
        marginLeft: 15
    },
    headerTxtTituloDetalhesPerfil: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#000000',
        marginLeft: 5,
        textAlign: 'center',
        padding: 5,
    },
    headerImgDetalhesPerfil: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50,
        resizeMode: "cover",
    },
//=====
    containerStyloDetalhesDoProduto: {
         flexDirection: 'row', 
         backgroundColor: '#FFFFFF', 
         margin: 10,           
         borderBottomWidth: 1, 
         borderBottomColor: '#CCCCCC',
    },
    imagemMaisDetalhesDoProduto: {
        width: 50,
        height: 50,
        marginRight: 10,
        resizeMode: "cover",
    },
//=====
    containerStyloEnviarChatMensagens: {
        backgroundColor: "#FFFFFF", 
        flexDirection: 'row', 
        paddingHorizontal: 10,
    },
    containerStyloModalImgEnviarChatMensagens: {
        maxHeight: 40, 
        paddingTop: 12
    },
    styloTextInputEnviarChatMensagens: {
        flex: 1,
        minHeight: 40,
        maxHeight: 90,
        paddingHorizontal: 12,
        fontSize: 17,
        paddingTop: 8,
        marginHorizontal: 5,
    },
  

});

