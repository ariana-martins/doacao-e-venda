import React, { createContext, useState} from 'react';

import auth from '@react-native-firebase/auth';

//=====================================
/*
* This provider is created
* to access user in whole app
*/
/*
* Este provedor é criado
 * para acessar o usuário em todo o aplicativo
 * */

//=====================================

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login: async (email, password) => {
                try {
                    await auth().signInWithEmailAndPassword(email, password);
                } catch (error) {
                    console.log(error);
                }
            },
            register: async (email, password) => {
                try {
                    await auth().createUserWithEmailAndPassword(email, password);
                } catch (error) {
                    console.log(error);
                }
            },
            logout: async () => {
                try {
                    await auth().signOut();
                } catch (error) {
                    console.log(error);
                }
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};