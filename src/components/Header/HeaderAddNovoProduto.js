import React from "react";
import { View, StyleSheet } from "react-native";
//nova importação do React Native Elements "@rneui/themed".
import { Header } from "@rneui/themed";
import BotaoVoltar from "../componentesGerais/BotaoVoltar";


export default function HeaderAddNovoProduto() {

 
    return (

          <Header
                containerStyle={{ backgroundColor: '#FFFFFF', }}
             //   width: '100%', borderBottomWidth: 1, borderBottomColor: '#CCCCCC',}}
                
              /*  leftComponent={
                     <View style={styles.headerLeft}>
                      <BotaoVoltar />
                    </View>
                }
            */
            />
    );

}

const styles = StyleSheet.create({
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
});