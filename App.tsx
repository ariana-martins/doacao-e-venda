

//===================================================================
//TAB SCREEN FUNCIONANDO NESSA PARTE DEBAIXO

//import 'react-native-gesture-handler'; // Torna as interações de toque e o rastreamento de gestos suaves...
/*
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //navegação inferior da tab
import { createStackNavigator } from 'react-navigation-stack'; //ir e voltar para outra página, na parte superior
import { TouchableOpacity } from 'react-native-gesture-handler'; //utilizado para incluir o ícone como botão
import Icon from 'react-native-vector-icons/Ionicons';
import PaginaInicial from './src/pages/PaginaInicial';
import Pesquisar from './src/pages/Pesquisar';
import AdicionarNovoProduto from './src/pages/AdicionarNovoProduto';



function PaginaInicialScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Pesquisar/>
        <PaginaInicial/>
      </View>    
    </View>
    );
}

function PesquisarScreen() {
  return (
    <View style={styles.container}>
      <Text>Pesquisar</Text>
      <Pesquisar/>
    </View>
  );
}
 
function AdicionarNovoProdutoScreen() {
  return (
    <View style={styles.container}>
      <AdicionarNovoProduto/>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Chat</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator(); //Cria a navegação da Tab

export default function Projeto1() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Pagina Inicial, aqui vai filtrar por categoria" 
          component={PaginaInicialScreen} 
          options={{
            headerStyle:{
              backgroundColor: '#009387'
            },
            headerTintColor: '#00000',
            headerTitleStyle: {
              fontWeight: 'normal'
            },
            title: 'Filtrar por categoria', 
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 25 }}>
                  <Icon 
                    name="funnel-outline" 
                    size={20} 
                    color="#000000" 
                  />
              </TouchableOpacity>
            ),
            tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Pagina Inicial",
          }}
        />
        <Tab.Screen 
          name="Pesquisar!" 
          component={PesquisarScreen} 
          options={{            
            tabBarIcon: ({ color }) => (
              <Icon name="search-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Pesquisar",
          }}
        />
        <Tab.Screen 
          name="Adicionar Novo Produto!" 
          component={AdicionarNovoProdutoScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="add-outline" size={30} color="#000000" />
            ),
            tabBarLabel: "Adicionar novo produto",
          }}
        />
        <Tab.Screen 
          name="Chat!" 
          component={ChatScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Chat",
          }}
        />
        <Tab.Screen
          name="Perfil!" 
          component={PerfilScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={20} color="#000000" />            
            ),
            tabBarLabel: "Perfil",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//estilo de todas as páginas (fora a Tab e TabScreen)
const styles = StyleSheet.create({
  container: {
//		flex: 1,
//		justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
//		alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
  },
});
*/

//=================================================
// AQUI PARA BAIXO, É A PARTE NOVA DO CÓDIGO
//===================================================

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

import AuthProvider from './src/contexts/auth';

import auth from '@react-native-firebase/auth';

import Login from './src/pages/Login';
import Cadastrar from './src/pages/Cadastrar';
import EsqueciMinhaSenha from './src/pages/EsqueciMinhaSenha';
import ScreenNavigator from './src/navigations/ScreenNavigator'; // Nova tela de navegação entre as páginas ("pages")


import PaginaInicialTeste from './src/pages/PaginaInicialTeste';
import SettingScreenTeste from './src/pages/SettingsScreenTeste';





const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();



const AuthNavigator = () => {

  //Navegações das Páginas do Login (Entrar, Cadastrar e Sair no App)

  return (
    <Stack.Navigator>
      {/* Os "name" e "component" sempre precisam estar com os nomes iguais para funcionar o "navigation.navigate" */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}


/*
const TabNavigator = () => {
  return (
    <ScreenNavigator />
  )
}
*/

const Navigation = () => {
  // const user = "" //autenticação do usuário com firebase (está vazio, pois preenche os dados na tela Cadastrar)

  // autenticação do usuário com firebase
  const [user, setuser] = useState('');
  const [initializing, setInitializing] = useState(true);


  // ======= Exemplo ============
  // Título do video no Youtube: #03 - Criando tela Login & Autenticação com Firebase - Projeto Tasks - React Native + Firebase 2022
  // Link do Youtube: https://youtu.be/QUsOzWIFHE8?si=TluslHX4GRE00Dz6
  // Canal do Youtube: Pervious Modz
  function onAuthStateChanged(user) {
    setuser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  // ======== Exemplo =============


  // Se o usuário estiver feito login, então acessa a página geral "ScreenNavigator",
  // Se não, o usuário deverá realizar a autenticação e/ou cadastro p/ se autenticar "AuthNavigator".
  return (
    <NavigationContainer>
      <AuthProvider>
        {user ? <ScreenNavigator /> : <AuthNavigator />}
      </AuthProvider>
    </NavigationContainer>
  )
// Início do <NavigationContainer />
// Só posso usar 1 vez ele em todo o código, pois vai chamar a navegação em todas as telas que eu configurar o navigation.navite e etc...

}


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
