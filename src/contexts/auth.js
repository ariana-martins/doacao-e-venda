import React, { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signInWithEmailAndPassword (email, senha) {
        if ( email !== '' && senha !== ''){
            setUser({
                email: email,
                status: "ATIVO"
            })
            
         //   navigation.navigate("ScreenNavigator");
        }
    }



    return(
        <AuthContext.Provider value={{ nome: "Teste - AuthContext", signInWithEmailAndPassword, user }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

// ===>>>>  Explicação sobre Context Api. <<<<<====================
// Título do video no Youtube: Entender Context API com React Native de uma vez por todas! 
// Link do Canal do Youtube: https://www.youtube.com/watch?v=olSeMN70Vo4
// Canal do Youtube: Sujeito Programador
// =================================================================