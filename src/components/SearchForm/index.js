// =========== Exemplo de Pesquisar, ==========================
//==========="value" funcionando certinho com console.log conforme preenchido ================

/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function SearchForm() {

//{useState} para definir variável de estado.
const [from, setFrom] = useState('');
const [to, setTo] = useState('default');


//função pressionar botão pesquisar
   const onSearchPress = () => {
    console.log(from, to);
   };
   
   
    return (
        <View style={styles.containerCard}>
            <Text style={styles.txtPesquisar}> 
                Pesquisar / Pesquise aqui
            </Text>

            <TextInput 
                value={from} /*value sempre defini o valor padrão de estado */
/*                onChangeText={setFrom} /*onChangeText faz a chamada e defini um novo valor de estado.*/
/*                placeholder="From" 
                style={styles.input}
            />
            
            <TextInput 
                value={to} /*value sempre defini o valor padrão de estado */
 /*               onChangeText={setTo} /*onChangeText faz a chamada e defini um novo valor de estado.*/
 /*               placeholder="To" 
                style={styles.input}
            />

            <Button title="Pesquisar" onPress={onSearchPress}/>
            

        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: 'white',
        margin: 10,
        padding: 15,
        borderRadius: 10,

        //shadows - sombras no textInput
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    txtPesquisar: {
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 15,
    },
    input: { //Margem do textInput
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },


})


*/