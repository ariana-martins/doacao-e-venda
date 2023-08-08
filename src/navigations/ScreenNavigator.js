import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopBarNavigator from './TopBarNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

import PaginaInicial from '../pages/PaginaInicial';
import Pesquisar from '../pages/Pesquisar';
import AdicionarNovoProduto from '../pages/AdicionarNovoProduto';
import Chat from '../pages/Chat';
import Detalhes from '../pages/Detalhes';
import ChatMensagens from '../pages/ChatMensagens';

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

export default function ScreenNavigator() {
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