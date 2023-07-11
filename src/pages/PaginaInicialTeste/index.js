import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';

//Pagina Inicial que funciona com ScrollView, mas não aparece as imagens em 3 colunas.

export default function PaginaInicialTeste(){
  
    return(        
       <SafeAreaView style={{height: 615}}>
         <ScrollView> 
         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Card style={{padding: 20, backgroundColor: '#46C227'}}>
                <Card.Cover
                style={styles.imageTamanho}
                source={require('../../../src/assets/img1.png')} />
                <Title style={styles.title}>Sapatênis</Title>
                <Text style={styles.title}>R$200,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img2.png')} />
                <Title style={styles.title}>Blusa branca</Title>
                <Text style={styles.title}>R$0,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img3.png')} />
                <Title style={styles.title}>Tênis branco</Title>
                <Text style={styles.title}>R$0,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img4.png')} />
                <Title style={styles.title}>Bermuda</Title>
                <Text style={styles.title}>R$0,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img5.png')} />
                <Title style={styles.title}>Chinelo adulto</Title>
                <Text style={styles.title}>R$35,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img6.png')} />
                <Title style={styles.title}>Casaco infantil</Title>
                <Text style={styles.title}>R$100,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img7.png')} />
                <Title style={styles.title}>Sapato</Title>
                <Text style={styles.title}>R$0,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img8.png')} />
                <Title style={styles.title}>Casaco preto</Title>
                <Text style={styles.title}>R$214,00</Text>
                <Card.Cover 
                style={styles.imageTamanho}
                source={require('../../../src/assets/img9.png')} />
                <Title style={styles.title}>Vestido roxo</Title>
                <Text style={styles.title}>R$0,00</Text>
            </Card>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  imageTamanho:{
    width: 96,
    height: 118,
  },
  title:{
    width: 94,
    fontFamily: "Inter", 
    fontStyle: "normal",
    fontSize: 15,
    lineHeight: 20,
    color: "#000000",
  },   
});