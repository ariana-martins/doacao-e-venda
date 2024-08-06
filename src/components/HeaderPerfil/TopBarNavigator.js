import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PerfilTopTab from '../../pages/PerfilTopTab';
import InteressesTopTab from '../../pages/InteressesTopTab';
import MeusProdutosTopTab from '../../pages/MeusProdutosTopTab';
import { StyleSheet, View } from 'react-native';



//Navegações entre as páginas "do Perfil", navegações das Telas TopTab


function Perfil() {
    return (
        <PerfilTopTab />
    );
}

function Interesses() {
    return (
        <InteressesTopTab />
    );
}

function MeusProdutos() {
    return (
        <MeusProdutosTopTab />
    );
}



const Tab = createMaterialTopTabNavigator();


export default function TopBarNavigator() {



    return (
        
        <Tab.Navigator
            initialRouteName='Perfil'
            screenOptions={{
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'blue',
                tabBarItemStyle: {paddingTop: 30}
            }}
        >

            <Tab.Screen
                name='MeusProdutos'
                component={MeusProdutos}
                options={{ tabBarLabel: 'Meus Produtos', }}
            />
            <Tab.Screen
                name='Interesses'
                component={Interesses}
                options={{ tabBarLabel: 'Interesses' }}
            />
            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{ tabBarLabel: 'Perfil' }}
            />

        </Tab.Navigator>
       

    );
};


