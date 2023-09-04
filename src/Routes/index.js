import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import Login from '../pages/Login';
import SettingScreenTeste from '../pages/SettingsScreenTeste';
import ScreenNavigator from '../navigations/ScreenNavigator';


// Exemplo deu certo Acessar página de Login e foi para as páginas de ScreenNavigator,
// Título do video no Youtube: #03 - Criando tela Login & Autenticação com Firebase - Projeto Tasks - React Native + Firebase 2022
// Link do Youtube: https://youtu.be/QUsOzWIFHE8?si=TluslHX4GRE00Dz6
// Canal do Youtube: Pervious Modz

// Agora falta configurar a autenticação do usuário com as telas de Navegações de "Cadastrar", "Esqueci Minha Senha", junto com as de Login e ScreenNavigator.


export default function Routes() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  
   return (
    !user ? <Login /> : <ScreenNavigator/>
   )


  /*
  if (!user) {
    return (
    <Login />
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
  */
}