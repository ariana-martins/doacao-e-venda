import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PerfilTopTab from '../../pages/PerfilTopTab';
import InteressesTopTab from '../../pages/InteressesTopTab';
import MeusProdutosTopTab from '../../pages/MeusProdutosTopTab';


//Navegações entre as páginas "do Perfil", navegações das Telas TopTab

function Perfil() {
    return (
        <PerfilTopTab/>
    );
}

function Interesses() {
    return (
        <InteressesTopTab/>
    );
}

function MeusProdutos() {
    return (
        <MeusProdutosTopTab/>
    );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName='Perfil'
            screenOptions={{
                activeTintColor: "#e91e63",
                labelStyle: { fontSize: 12},
                style: { backgroundColor: '#FFFFFF'}
            }}
        >
            <Tab.Screen
                name='MeusProdutos'
                component={MeusProdutos}
                options={{ tabBarLabel: 'Meus Produtos'}}
            />
            <Tab.Screen
                name='Interesses'
                component={Interesses}
                options={{ tabBarLabel: 'Interesses'}}
            />
            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{ tabBarLabel: 'Perfil'}}
            />       
        </Tab.Navigator>
    );
}


export default function TopBarNavigator() {
    return(
        <MyTabs/>
    );
}