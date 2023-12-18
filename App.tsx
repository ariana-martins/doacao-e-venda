import React from 'react';
import Providers from './src/navigations';


export default function App() {
  return <Providers />;
}

//==========================
// DAQUI PRA CIMA, FUNCIONA O LOGIN E LOGOUT PARA DIVERSOS USUÁRIOS SEM O "RELOAD" DO APLICATIVO
// Link de Referência: https://github.com/amandeepmittal/react-native-examples/tree/19aab47910428628770b17998d1818805b6c0edf/rnEmailAuthFirebase
// Login e Logou corrigido dia 18/12/2023
// =========================






//=================================================
// AQUI PARA BAIXO, ERA A PARTE NOVA DO CÓDIGO
//===================================================
/*
import 'react-native-gesture-handler'; //gesture-handler deve estar sempre na primeira linha do código para fazer as movimentações das telas (gestos e toques no react native).
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//import AuthProvider from './src/contexts/auth';

import auth from '@react-native-firebase/auth';

import Login from './src/pages/Login';
import Cadastrar from './src/pages/Cadastrar';
import EsqueciMinhaSenha from './src/pages/EsqueciMinhaSenha';
import ScreenNavigator from './src/navigations/ScreenNavigator'; // Nova tela de navegação entre as páginas ("pages")


import PaginaInicialTeste from './src/pages/PaginaInicialTeste';
import SettingScreenTeste from './src/pages/SettingsScreenTeste';

*/

/*

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();



const AuthNavigator = () => {

  //Navegações das Páginas do Login (Entrar, Cadastrar e Sair no App)

  return (
    <Stack.Navigator>
      // Os "name" e "component" sempre precisam estar com os nomes iguais para funcionar o "navigation.navigate" 
      {/*<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
      {/*<Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} /> 
      {/*<Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{ headerShown: false }} /> 

    {/*</Stack.Navigator>
 /* )
}



*/


/*
const TabNavigator = () => {
  return (
    <ScreenNavigator />
  )
}
*/
/*
const Navigation = () => {
  // const user = "" //autenticação do usuário com firebase (está vazio, pois preenche os dados na tela Cadastrar)

  // autenticação do usuário com firebase
  const [user, setuser] = useState('');
  const [initializing, setInitializing] = useState(true); //"configuração de carregando página, fazendo o "reload" antes de acessar o login
  //Crio então um novo estado, usando useState chamado "loading/inicializing":
  //E depois de carregar, defino o valor false, sempre que ele iniciar começo com valor true, carregou altero o estado de loading/inicializing para false.

  // ======= Exemplo ============
  // Título do video no Youtube: #03 - Criando tela Login & Autenticação com Firebase - Projeto Tasks - React Native + Firebase 2022
  // Link do Youtube: https://youtu.be/QUsOzWIFHE8?si=TluslHX4GRE00Dz6
  // Canal do Youtube: Pervious Modz
  function onAuthStateChanged(user) {
    setuser(user);
    if (initializing) setInitializing(false); //"configuração de carregando página, fazendo o "reload" antes de acessar o login
  }

  useEffect(() => { // onAuthStateChanged retorna o usuário atual que fez login
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Página fazendo "reload"
  //"configuração de carregando página, fazendo o "reload" antes de acessar o login
  if (initializing) {
  //return null;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#blue" />
      </View>
    );
  }
    
  */


  // ======== Exemplo =============

/*
  // Se o usuário estiver feito login, então acessa a página geral "ScreenNavigator",
  // Se não, o usuário deverá realizar a autenticação e/ou cadastro p/ se autenticar "AuthNavigator".
  return (
    <NavigationContainer>
        {user ? <ScreenNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
// Início do <NavigationContainer />
// Só posso usar 1 vez ele em todo o código, pois vai chamar a navegação em todas as telas que eu configurar o navigation.navite e etc...

}
*/
/*
export default function App() {

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //preenche toda a tela
  },
})

*/

//==================================================================

// Exemplo de início do <NavigationContainer />
// Só posso usar 1 vez ele em todo o código, pois vai chamar a navegação em todas as telas que eu configurar o navigation.navite e etc...


//=========================================================================================

// ======= [REVER LINKS ABAIXO ???] ==============

//[=> UTILIZAR ESSE EXEMPLO PARA CONFIGURAR A AUTENTICAÇÃO DO LOGIN SIMPLES, para depois implementar o código de Autenticação do Firebase] 
// Explicação sobre Context API, que configura as rotas antes do Login, e para melhorar as "route"/"navigations" durante todo o Projeto do APP
// =========================================================================================
// Título "Entender Context API com React Native de uma vez por todas! "
// Link do vídeo: https://www.youtube.com/watch?v=olSeMN70Vo4
// Canal do Youtube: Sujeito Programador


//[=> UTILIZAR ESSE EXEMPLO PARA CONFIGURAR A LISTA DE USUÁRIOS DO CHAT, RENDERIZANDO DE ACORDO COM DATA ID ]
//[=> UTILIZAR ESSE EXEMPLO PARA CONFIGURAR EDITAR UM ITEM/PRODUTO COM BOTÃO/ICONE "EDITAR" E "EXCLUIR", RENDERIZANDO DE ACORDO COM DATA ID ]
// Explicação sobre os atributos dentro da Flatlist como por exemplo "Data" e "KeyExtractor" e renderizar os itens...
// =========================================================================================
// Título "Construa um Cadastro COMPLETO em React Native - Com Hooks e Context API"
// Link do Vídeo: https://www.youtube.com/watch?v=V-uYjDnuXkU
// Canal do Youtube: Cod3r Cursos


//Para melhorar e organizar as rotas e navigations após incluir o Login, rever essas dicas abaixo:
// =========================================================================================
// Título "Melhorando a navegação do seu app com Stack, Tab e Drawer Navigator"
// Link do Vídeo: https://www.youtube.com/watch?v=gH9Vvq6WbnA
// Canal do Youtube: Rocketseat
