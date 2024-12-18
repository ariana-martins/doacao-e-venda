import { StyleSheet} from "react-native"

//conteúdo de CSS
export const styles = StyleSheet.create({
    containerAddLista: {
        flex: 1,
   //     margin: 20,
        backgroundColor: '#FFFFFF',
     //   paddingTop: 40,
    },
    buttonNovaTarefaAddLista: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 5,
        left: 20,
         //top: 0, bottom: 0, left: 0, right: 0
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonAddLista: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold',
      //  marginLeft: 40,
    },
    


    
    //=============================

     container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    addMargem: {
        margin: 10,
    },
    txtTituloChats: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
    },
    linhaDivid: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },

    card: {
      //  width: '100%',
     //   marginRight: 10,
     //   paddingRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
      //  marginVertical: 5,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },

    prodImg: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    userDonoImg: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute', //top: 0, bottom: 0, left: 0, right: 0
        bottom: 15,
        left: 55,
        backgroundColor: '#FFFFFF',
    },

    textSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        // borderBottomWidth: 1,
        //borderBottomColor: '#CCCCCC',
    },
    userInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userNameEvalor: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    styleMessageUserInteressedado: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    styleDataString: {
        fontSize: 13,
        color: '#000000',
        fontFamily: 'roboto',
        //marginRight: 10,
        //paddingRight: 10,
    },
    /*
    userValor: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    */
    postTime: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'roboto',
        marginRight: 10,
        paddingRight: 10,
    },
    messageText: {
        fontSize: 14,
        color: '#333333',
    },
});

