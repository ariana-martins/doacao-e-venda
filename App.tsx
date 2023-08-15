/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/*import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Ariana teste">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="outro teste">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/
//===================== Projeto acima é o original do React Native ================================
//==================================================================================================


/*import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './src/pages/Login/index';


//Login está correto aqui <<<<=====
export default function Projeto1(){
  return (
    <View style={estilos.conteiner}>
      <Login/>
    </View>
  );
};


//conteúdo de CSS
const estilos = StyleSheet.create({
  conteiner:{
    flex: 1, //preenche toda a tela
    backgroundColor: '#46C227', //cor da tela
 //   alignItems: 'center', //centralizando todos os textos e imagens dentro do estilo conteiner
 //   justifyContent: 'center', //justifica todos os textos ao centro da tela
  },
});
//Login está correto até aqui <<<<=====
*/


/*
import React from 'react';
import { View, Text} from 'react-native';
import PaginaInicial from './src/pages/PaginaInicial';

export default function Projeto1(){
  return (
    <View>
      <View>
       <PaginaInicial/>
      </View>
    </View>
  );
};
*/

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
//		justifyContent: 'center',
//		alignItems: 'center',
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopBarNavigator from './src/navigations/TopBarNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

import PaginaInicial from './src/pages/PaginaInicial';
import Pesquisar from './src/pages/Pesquisar';
import AdicionarNovoProduto from './src/pages/AdicionarNovoProduto';
import Chat from './src/pages/Chat';
import Detalhes from './src/pages/Detalhes';
import ChatMensagens from './src/pages/ChatMensagens';

import { StyleSheet, View } from 'react-native';

import Login from './src/pages/Login';
import Cadastrar from './src/pages/Cadastrar';
import EsqueciMinhaSenha from './src/pages/EsqueciMinhaSenha';
import ScreenNavigator from './src/navigations/ScreenNavigator'; // Nova tela de navegação entre as páginas ("pages")


import PaginaInicialTeste from './src/pages/PaginaInicialTeste';
import SettingScreenTeste from './src/pages/SettingsScreenTeste';

import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{ headerShown: false }} />
      <Stack.Screen name="SettingScreenTeste" component={SettingScreenTeste} options={{ headerShown: false }}/>

      {/* Os "name" e "component" sempre precisam estar com os nomes iguais para funcionar o "navigation.navigate" */}
    </Stack.Navigator>
  )
}


const TabNavigator = () => {
  return (
    /*
          <Tab.Navigator>
              <Tab.Screen name="paginaInicialTeste" component={PaginaInicialTeste} options={{headerShown:false}}/>
              <Tab.Screen name="Settings" component={SettingScreenTeste} options={{headerShown:false}}/>
            </Tab.Navigator>
    
            */

    <ScreenNavigator />


  )

}



const Navigation = () => {
  // const user = "" //autenticação do usuário com firebase (está vazio, pois preenche os dados na tela Cadastrar)

  // autenticação do usuário com firebase
  const [user, setUser] = useState('')

  /*
  useEffect(()=>{
    auth().onAuthStateChanged((userExist)=>{
      if(userExist){
        setUser(userExist)
      }else{
        setUser("")
      }
    })
  },[])
*/
  /*
    return (
      <NavigationContainer>
        {user?<TabNavigator />:<AuthNavigator />}
      </NavigationContainer>
    )
    */
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}


export default function App() {

  return (
    <View style={styles.container}>
      {/* <Login />  */}
      {/* <Cadastrar /> */}
      {/* <EsqueciMinhaSenha /> */}
      {/* <ScreenNavigator /> */}
      <Navigation />
      {/* <TabNavigator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //preenche toda a tela
    backgroundColor: "#FFFFFF",
  },
})




/*
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name='Página Inicial'
        component={PaginaInicial}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={20} color="#000000" />
          ),
          tabBarLabel: "Pagina Inicial",

        }}

      />
      <Tab.Screen
        name='Pesquisar - Tab'
        component={Pesquisar}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" size={20} color="#000000" />
          ),
          tabBarLabel: "Pesquisar",
        }}
      />
      <Tab.Screen
        name='Adicionar Novo Produto - Tab'
        component={AdicionarNovoProduto}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="add-outline" size={30} color="#000000" />
          ),
          tabBarLabel: "Adicionar novo produto",
        }}
      />
      <Tab.Screen
        name='Chat - Tab'
        component={Chat}
        options={{
          headerShown: true,
          title: 'Chats',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-outline" size={20} color="#000000" />
          ),
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name='Perfil - Tab'
        component={TopBarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={20} color="#000000" />
          ),
          tabBarLabel: "Perfil",
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Inicio!" component={Tabs} options={{ headerShown: false }} />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes',
            headerTitleStyle: {
              fontFamily: 'Roboto',
              fontSize: 25,
              color: '#000000',
            },
          }}
        />

        <Stack.Screen
          name="ChatMensagens"
          component={ChatMensagens}
          options={({ route }) => ({
            title: route.params.userDono,
            headerTitleAlign: 'center',
          })}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/



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
