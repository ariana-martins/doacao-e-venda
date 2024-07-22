import React from 'react';
import { SafeAreaView, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

//botão "Voltar", utiliza o "<Button title='Voltar'onPress={() => navigation.goBack()}"/>
//Ao invés do botão/função do "ScreenNavigations", pois vai retornar a página anterior o "goBack"

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

