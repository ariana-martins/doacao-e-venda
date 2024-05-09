/*
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import FormButton from "../components/FormItens/FormButton";
//import { AuthContext } from "../navigations/AuthProvider";


export default function HomeScreen() {
    const { user, logout } = useContext(AuthContext);

    
    return (
        <View style={styles.container}>
            <Text style={styles.textBemVindoUser}>Bem vindo user: {user.uid}</Text>
            <FormButton buttonTitle='Logout' onPress={() => logout()} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    textBemVindoUser: {
        fontSize: 20,
        color: '#333333',
    },
});

*/