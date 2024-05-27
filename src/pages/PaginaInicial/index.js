import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import firestore, { firebase } from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';


//import Pesquisar from '../Pesquisar';

import testeProdutos from '../../data/testeProdutos';
import PesquisaFiltro from '../../components/componentesGerais/PesquisaFiltro';



export default function PaginaInicial(){
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


  const ref = firebase.firestore().collection('produtos');
    useEffect(()=>{
        ref.onSnapshot(querySnapshot =>{
            const data = []
            querySnapshot.forEach(doc =>{
                data.push({
                     ...doc.data(),
                        key:doc.id
                })
            })
                setData(data)
        })
      //  return () => ref()
    }, [])


    //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
    // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
    const user_id = firebase.auth().currentUser.uid;


  /*
  const card = [
    {
    id: '1',
    image: require('../../../src/assets/img1.png'),
    title: 'Sapatênis',
    valor: 'R$200,00',
    },
    {
    id: '2',
    image: require('../../../src/assets/img2.png'),
    title: 'Blusa branca',
    valor: 'R$0,00',
    },
    {
    id: '3',
    image: require('../../../src/assets/img3.png'),
    title: 'Tênis branco',
    valor: 'R$0,00',
    },
    {
    id: '4',
    image: require('../../../src/assets/img4.png'),
    title: 'Bermuda',
    valor: 'R$0,00',
    },
    {
    id: '5',
    image: require('../../../src/assets/img5.png'),
    title: 'Chinelo adulto',
    valor: 'R$35,00',
    },
  ];
  */

  ////===========>>>> PRIORIDADE <<<<<<<<<<<<<<<<<<<============================
  /*resolver essa questão de lançar no telefone e poder ver no computador [12/04/2024]*/


  return(
    <SafeAreaView style={styles.container}>
     
      {/* Falta configurar para quando clicar em Filtrar e Pesquisar, 
      ele vai direto para cada "função" de filtrar e pesquisar produto */}
      <PesquisaFiltro/>
      
       {/*Aqui vai a lista de produtos*/}
       <FlatList 
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
       // data={testeProdutos}
        data={data} //data, da onde eu vou pegar os dados desta lista (nesse caso é o card/lista de "produtos")
        //keyExtractor={item=>item.id} //keyEstractor define uma chave para cada um dos elementos, aqui é um tipo que vou querer retornar um "item.id" 
       // keyExtractor={item=>item.id} 
      // keyExtractor={item=>item.user_id}
        numColumns={3}
        renderItem={({item}) => (
          <View>
            <Pressable onPress={() => navigation.navigate('Detalhes')}>
              <View>
             
              <Image style={styles.prodImg}
                  //source={item.image}
                  // quando buscar os produtos do firestores/storage, 
                  //utilizar imagem com "uri", pois busca imagem da internet (firestores/storage)
                  source={{ uri: item.imagem }}              
              />
               
               {/**
               <Image style={styles.prodImg}
                 // source={item.image}
                  // quando buscar os produtos do firestores/storage, 
                  //utilizar imagem com "uri", pois busca imagem da internet (firestores/storage)
                  source={{ uri: item.imagem }} //nome "imagem" já identifica a imagem nova do produto no firestore             
              />
               */}
               <Text style={styles.txt}>{item.titulo}</Text> 
              {/* <Text style={styles.txt}>{item.title}</Text> */}
              <Text style={styles.vlr}>R$ {item.valor}</Text>
            </View>

          </Pressable>
          </View>
          
        )}
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
