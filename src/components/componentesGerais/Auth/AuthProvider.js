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

//Link de referência: https://amanhimself.dev/blog/chat-app-with-react-native-part-2/

//=====================================


// Falta configurar essa tela junto com as telas "Login" de login, 
//e "Cadastrar" de register, como também a tela "Perfil - sair" de logout
// Onde configura o AuthContext

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