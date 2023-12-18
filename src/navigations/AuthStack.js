/*
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
}
*/


import 'react-native-gesture-handler'; //gesture-handler deve estar sempre na primeira linha do código para fazer as movimentações das telas (gestos e toques no react native).
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import EsqueciMinhaSenha from '../pages/EsqueciMinhaSenha';




const Stack = createStackNavigator();


export default function AuthStack() {

//const AuthNavigator = () => {

  //Navegações das Páginas do Login (Entrar, Cadastrar e Sair no App)

  return (
    <Stack.Navigator>
      {/* // Os "name" e "component" sempre precisam estar com os nomes iguais para funcionar o "navigation.navigate" */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
      <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} /> 
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{ headerShown: false }} /> 

    </Stack.Navigator>
  )
}