import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import Pesquisar from '../Pesquisar';

import Produtos from '../../data/produtos';
import PesquisaFiltro from '../../components/PesquisaFiltro';



export default function PaginaInicial(){
  const navigation = useNavigation();

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
    {
    id: '6',
    image: require('../../../src/assets/img6.png'),
    title: 'Casaco infantil',
    valor: 'R$100,00',
    },
    {
    id: '7',
    image: require('../../../src/assets/img7.png'),
    title: 'Sapato',
    valor: 'R$0,00',
    },
    {
    id: '8',
    image: require('../../../src/assets/img8.png'),
    title: 'Casaco preto',
    valor: 'R$214,00',
    },
    {
    id: '9',
    image: require('../../../src/assets/img9.png'),
    title: 'Vestido roxo',
    valor: 'R$0,00',
    },
    {
      id: '10',
      image: require('../../../src/assets/img1.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '11',
      image: require('../../../src/assets/img2.png'),
      title: 'teste2',
      valor: 'R$0,00',
      },
      {
      id: '12',
      image: require('../../../src/assets/img3.png'),
      title: 'testeeeeeeee',
      valor: 'R$0,00',
      },
      {
      id: '13',
      image: require('../../../src/assets/img4.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '14',
      image: require('../../../src/assets/img5.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '15',
      image: require('../../../src/assets/img6.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '16',
      image: require('../../../src/assets/img7.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '17',
      image: require('../../../src/assets/img8.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      id: '18',
      image: require('../../../src/assets/img9.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
  
  ];
  */

  return(
    <SafeAreaView style={styles.container}>
     
      {/* Falta configurar para quando clicar em Filtrar e Pesquisar, 
      ele vai direto para cada "função" de filtrar e pesquisar produto */}
      <PesquisaFiltro/>
      
       {/*Aqui vai a lista de produtos*/}
       <FlatList 
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
        data={Produtos} //data, da onde eu vou pegar os dados desta lista (nesse caso é o card/lista de "produtos")
        //keyExtractor={item=>item.id} //keyEstractor define uma chave para cada um dos elementos, aqui é um tipo que vou querer retornar um "item.id" 
        keyExtractor={item=>item.id} 
        numColumns={3}
        renderItem={({item}) => (
          <View>
            <Pressable onPress={() => navigation.navigate('Detalhes')}>
              <View>
              <Image style={styles.prodImg}
                  source={item.image}
                  // quando buscar os produtos do firestores/storage, 
                  //utilizar imagem com "uri", pois busca imagem da internet (firestores/storage)
                  //source={{ uri: item.image }}              
              />
              <Text style={styles.txt}>{item.title}</Text>
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
