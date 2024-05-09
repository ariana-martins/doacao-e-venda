/*
// =========== Exemplo para padronizar o estilo de todo o App ====================================

import { extendTheme } from 'native-base';

export const customTheme = extendTheme({
    colors: {
        primary: {
            700: '#996DFF',
        },
        secondary: {
            700: '#FBA94C',
        },
        blue: {
            900: '#0c4a6e', //exemplo, trocar para a cor que to usando
        },
        green: {
            700: '#00875F',
            500: '#00B37E',
            300: '#04D361',
        },
        gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
            300: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6',
        },
        yellow: {
            700: '#FFCA00',
            500: '#FFCF52',
        },
        pink: {
            600: '#e11d48',
            300: '#fda4af',
            200: '#fecdd3', // Plano de fundo temporário das telas
        },
        violet: {
            500: '#6646ee', //activyIndicator, Loading
        },
        white: '#FFFFFF', // Plano de fundo padrão de todas as telas
        black: '#000000',
        
    },
    fonts: { //fontsFamily, a confirmar se funciona
        //fontFamily: 'roboto', //padrao
        header: 'Roboto',
        medium: 'Roboto',
        regular: 'Roboto',
        semibold: 'Roboto',
    },
    fontWeight: { //tamanho das fonts de texto, a confirmar se funciona
        negrito: 'bold',
    },
    fontSize: {
        "pqnoTexto": 12,
        "medioTexto": 14,
        "medioSubtitulo": 16,
        "grandeSubtitulo": 20,
        "grandeTitulo": 35, //Tela Login, Cadastro, Esqueci minha senha
    },
    sizes: {
       // 
    },
    //FlexBox
    // md => Flex-Start (para texto + "avatar/imagem" das paginas Login, Cadastrar, Esqueci minha senha, cabeçalho principal )
})

*/