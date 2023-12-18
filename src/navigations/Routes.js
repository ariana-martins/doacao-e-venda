import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';


export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);


    // Handle user state changes / Lida com alterações de estado do usuário
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
    }

    useEffect(() => { // onAuthStateChanged retorna o usuário atual que fez login
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    if (loading) {
        return <Loading />;
    }


    return (
        <NavigationContainer>
            {user ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

// {user ? <ScreenNavigator /> : <AuthNavigator />}


