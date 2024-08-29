import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import firestore, { firebase } from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import HeaderPaginaInicial from '../../components/Header/HeaderPaginaInicial';
//import Pesquisar from '../Pesquisar';

import testeProdutos from '../../data/testeProdutos';
import PesquisaFiltro from '../../components/componentesGerais/PesquisaFiltro';
import ListaProdutos from '../ListaProdutos';




export default function PaginaInicial() {
  const navigation = useNavigation();

  const [data, setData] = useState('');

  //=============================
  //Buscar os dados do firestore
  /*
  useEffect(() =>{
    const buscarProdutos = async() => {
      try {
        const list = []; //array vazio "const list = [];"
  
        firestore()
        .collection('produtos')
        .get()
        .then((querySnapshot) => {
          //console.log('Total de lista de produtos: ', querySnapshot.size) //qtd de "lista de produtos' que está dentro do firestore na coleção "produtos"
  
          //documento de cada dado instantaneo do firestore
          querySnapshot.forEach(doc =>{
            const {user_id, images, titulo, valor} = doc.data(); //substituir "images" por "imageUrl"
            list.push({ //array de lista, adicionarei dados a esse array usando este método "push"
              id: doc.id,
              user_id,
              images, //substituir "images" por "imageUrl"
              titulo: titulo,
              valor: valor,
              //descricao: 'Sapatênis marrom novo blablabla roupas calçados', 
  
            });
          })
      })
  
      console.log('Todos os Produtos', list); //ver se a lista de produtos está funcionando corretamente na paginaInicial
  
      } catch(error) {
        console.log('qualquer erro buscando produtos no firestore', error);
      }
    }
    buscarProdutos();
  
  }, []);
  */

  //=============================


  // Refazer o getDowload em "Adicionar novo produto" e aqui também incluir um "UseEffect + getDetail"
  // Conforme seguindo o manual do canal do Youtube: CODERS NEVER QUIT
  // Título do vídeo: Part 1/2 | OLX Clone using React Native & Firebase | React Native & Firebase for beginners in Hindi
  // Link canal do Youtube: https://www.youtube.com/watch?v=ntPQ-IPm3AM&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=7
  // Observação: Nesse exemplo inicia desde o login com o usuário, e mostra o "produto c/ imagem" em um Card c/ getDowload do Firebase + Storage.


  // ".orderBy('postProduto')" acrescentado os produtos por ultimo no final da pagina.
  const ref = firebase.firestore().collection('produtos').orderBy('postProduto');
  useEffect(() => {
    ref.onSnapshot(querySnapshot => {
      const data = []
      querySnapshot.forEach(doc => {
        data.push({
          ...doc.data(),
          key: doc.id
        })
      })
      setData(data)
    })
    //  return () => ref()
  }, [])


  //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
  // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
  const user_id = firebase.auth().currentUser.uid;



  ////===========>>>> PRIORIDADE <<<<<<<<<<<<<<<<<<<============================
  /*resolver essa questão de lançar no telefone e poder ver no computador [12/04/2024]*/



  //===================================
  //Função Abrir Tela Detalhes
  const abrirDetalhes = (data) => {
    //navigation.navigate('Detalhes', { name: 'titulo vai aqui', detalhes: 'descricao aqui', preco: '0,01' });
    navigation.navigate('Detalhes', {data});
   // console.log(data);
  };



  return (
    <SafeAreaView style={styles.container}>

      {/* Falta configurar para quando clicar em Filtrar e Pesquisar, 
      ele vai direto para cada "função" de filtrar e pesquisar produto */}
      {/*<PesquisaFiltro /> */}
      <HeaderPaginaInicial />
      
      {/*
      //Falta configurar botão "Voltar", utilizar o "<Button title='Voltar'onPress={() => navigation.goBack()}"/>
     //Utilizar esse botão/função ao invés do "ScreenNavigations", pois vai retornar a página anterior o "goBack"
    */}

      {/*Aqui vai a lista de produtos*/}
      <FlatList
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
        // data={testeProdutos}
        data={data} //data, da onde eu vou pegar os dados desta lista (nesse caso é o card/lista de "produtos")
        //keyExtractor={item=>item.id} //keyEstractor define uma chave para cada um dos elementos, aqui é um tipo que vou querer retornar um "item.id" 
        keyExtractor={(item) => String(item.key)}
        numColumns={3}
        renderItem={({ item }) => <ListaProdutos data={item} abrirDetalhes={abrirDetalhes} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
