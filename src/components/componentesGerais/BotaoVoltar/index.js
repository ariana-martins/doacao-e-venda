import React from 'react';
import { SafeAreaView, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function BotaoVoltar() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Pressable onPress={() => navigation.goBack()}>
                <View style={styles.inputAreaVoltar}>
                    <Icon name="chevron-back-outline" size={20} color="#000000" />
                </View>
            </Pressable>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },
    inputAreaVoltar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        backgroundColor: '#C4C4C4',
        elevation: 2,
        width: 40,
        height: 37,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 15,
    },
});