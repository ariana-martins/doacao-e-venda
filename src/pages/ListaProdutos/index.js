import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';


// "data" busca os produtos dos dados do firebase, que estão puxando da "PaginaInicial"
export default function ListaProdutos({ data, abrirDetalhes }) {
    //Lista os produtos na PaginaInicial.

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.adicionarMargem}>
                <Pressable onPress={() => abrirDetalhes(data)}>
                    <View>
                        <Image style={styles.prodImg}
                            //source={item.image}
                            // quando buscar os produtos do firestores/storage, 
                            //utilizar imagem com "uri", pois busca imagem da internet (firestores/storage)
                            source={{ uri: data.imagem }}
                        />
                        <Text style={styles.txt}>{data.titulo}</Text>
                        <Text style={styles.vlr}>R$ {data.valor}</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    adicionarMargem: {
        margin: 10,
    },
    prodImg: {
        width: 96,
        height: 118,
        resizeMode: "cover",
    },
    txt: {
        width: 96,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
        fontWeight: 'bold',
    },
    vlr: {
        width: 96,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
    }

})
