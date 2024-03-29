import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopBarNavigator from './TopBarNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../pages/Login';
import EsqueciMinhaSenha from '../pages/EsqueciMinhaSenha';
import Cadastrar from '../pages/Cadastrar';
import PaginaInicial from '../pages/PaginaInicial';
import Pesquisar from '../pages/Pesquisar';
import AdicionarNovoProduto from '../pages/AdicionarNovoProduto';
import Chat from '../pages/Chat';
import Detalhes from '../pages/Detalhes';
import ChatMensagens from '../pages/ChatMensagens';


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
          tabBarIcon: ({ focused , color }) => (
            <Icon name="home-outline" size={20} color={focused ? "blue" : "black" } />
          ),
          tabBarLabel: "Pagina Inicial",
          headerShown: true
        }}

      />
      <Tab.Screen
        name='Pesquisar - Tab'
        component={Pesquisar}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search-outline" size={20} color={focused ? "blue" : "black" } />
          ),
          tabBarLabel: "Pesquisar",
        }}
      />
      <Tab.Screen
        name='Adicionar Novo Produto - Tab'
        component={AdicionarNovoProduto}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="add-outline" size={30} color={focused ? "blue" : "black" } />
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
          tabBarIcon: ({ focused, color }) => (
            <Icon name="chatbubble-outline" size={20} color={focused ? "blue" : "black" } />
          ),
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name='Perfil - Tab'
        component={TopBarNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="person-outline" size={20} color={focused ? "blue" : "black" } />
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

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>

  );
}