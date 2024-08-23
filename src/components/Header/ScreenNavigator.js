import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopBarNavigator from '../HeaderPerfil/TopBarNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../../pages/Login';

import PaginaInicial from '../../pages/PaginaInicial';
import Pesquisar from '../../pages/Pesquisar';
import AdicionarNovoProduto from '../../pages/AdicionarNovoProduto';
import ItemListaChat from '../../pages/ItemListaChat';
import Detalhes from '../../pages/Detalhes';
import ChatMensagens from '../../pages/ChatMensagens';
import ItemListaChatNovaTarefa from '../../pages/ItemListaChatNovaTarefa';
import ItemListaChatDetalhes from '../../pages/ItemListaChatDetalhes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Navegações entre as páginas, e Sair do App voltando p/ o Login

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: 'blue',
    }}>

      <Tab.Screen
        name='Página Inicial - Pesquisar/ Filtrar'
        component={PaginaInicial}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home-outline" size={20} color={focused ? "blue" : "black"} />
          ),
          tabBarLabel: "Pagina Inicial",
          headerShown: false
        }}

      />
      <Tab.Screen
        name='Pesquisar - Tab'
        component={Pesquisar}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search-outline" size={20} color={focused ? "blue" : "black"} />
          ),
          tabBarLabel: "Pesquisar",
        }}
      />
      <Tab.Screen
        name='Adicionar Novo Produto - Tab'
        component={AdicionarNovoProduto}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="add-outline" size={30} color={focused ? "blue" : "black"} />
          ),
          tabBarLabel: "Adicionar", //"Adicionar novo Produto"
        }}
      />
      <Tab.Screen
        name='Chat - Tab'
        component={ItemListaChat}
        options={{
          //headerShown: true,
          //  title: 'Chats',
          //headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon name="chatbubble-outline" size={20} color={focused ? "blue" : "black"} />
          ),
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name='Perfil - Tab'
        component={TopBarNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="person-outline" size={20} color={focused ? "blue" : "black"} />
          ),
          tabBarLabel: "Perfil",
        }}
      />

    </Tab.Navigator>
  );
}

export default function ScreenNavigator() {
  return (

    <Stack.Navigator >
      <Stack.Screen name="Inicio!" component={Tabs} options={{ headerShown: false }} />

      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerShown: false,
          //  title: 'Voltar',
        }}

      />

      <Stack.Screen
        name="ItemListaChat"
        component={ItemListaChat}
        options={{
          headerShown: false,
          //  title: 'Voltar',
        }}
      /*
      options={({ route }) => ({
        title: route.params.userDono,
        headerTitleAlign: 'center',
      })}
*/

      />

      <Stack.Screen
        name="ItemListaChatNovaTarefa"
        component={ItemListaChatNovaTarefa}
        options={{
          headerShown: true,
          //  title: 'Voltar',
        }}
      />
       <Stack.Screen
        name="ItemListaChatDetalhes"
        component={ItemListaChatDetalhes}
        options={{
          headerShown: true,
          //  title: 'Voltar',
        }}
      />


      <Stack.Screen
        name="ChatMensagens"
        component={ChatMensagens}
        options={{
          headerShown: false,
          //  title: 'Voltar',
        }}
      /*
      options={({ route }) => ({
        title: route.params.userDono,
        headerTitleAlign: 'center',
      })}
*/

      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />

      {/* Para fazer a pesquisa da Página inicial para a Página "Pesquisar" */}
      <Stack.Screen
        name="Pesquisar"
        component={Pesquisar}
        options={{
          headerShown: false,
          //  title: 'Voltar',
        }}

      />

    </Stack.Navigator>

  );
}