import { StyleSheet } from "react-native"

//conteúdo de CSS
export const styles = StyleSheet.create({
    container: {
        flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },
    botaoFiltrar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        marginVertical: 5,
    },
    filtrarArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    txtFiltrar: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'black',
    },

    containerItemLista: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    adicionarMargem: {
        margin: 10,
    },
    prodImg: {
        width: 96,
        height: 118,
        resizeMode: "cover",
    },

    txt: {
        width: 96,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
        fontWeight: 'bold',
    },

    vlr: {
        width: 96,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
    }




    // item: {
    //     backgroundColor: "#f9c2ff",
    //     padding: 20,
    //     marginVertical: 8
    // },
    // header: {
    //     fontSize: 32,
    //     backgroundColor: "#fff"
    // },
    // title: {
    //     fontSize: 24
    // },


    // inputAreaVoltar: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    //     backgroundColor: '#C4C4C4',
    //     elevation: 2,
    //     width: 40,
    //     height: 37,
    //     borderRadius: 10,
    //     marginLeft: 15,
    //     marginTop: 15,
    // },

    // botaoPesquisar: {
    //     paddingHorizontal: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    //     justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
    //     width: '100%',
    //     marginVertical: 20,
    // },

    // inputArea: {
    //     paddingHorizontal: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    //     width: '98%',
    //     backgroundColor: '#C4C4C4',
    //     elevation: 2,
    //     paddingHorizontal: 10,
    //     height: 37,
    //     borderRadius: 10,
    // },

    // input: {
    //     fontFamily: 'Roboto',
    //     paddingHorizontal: 10,
    //     fontSize: 15,
    //     width: '98%'
    // },


});

