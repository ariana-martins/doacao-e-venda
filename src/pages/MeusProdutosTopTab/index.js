import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import { Card } from '@rneui/base';
import { Card, Button, Icon} from 'react-native-elements';

import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';


//para mais exemplos de card "https://reactnativeelements.com/docs/components/card"


/*
//EXEMPLO DO CÓDIGO QUE TEM ORDER PROPS...
https://github.com/rodrigorgtic/helpdesk/blob/main/src/components/Controllers/Order/index.tsx

...
export type OrderProps = OrderStyleProps & {
  id: string;
  patrimony: string;
  equipment: string;
  description: string;
}

type Props = {
  data: OrderProps;
};

...

*/


//export default function MeusProdutos() {
//  const [titulo, setTitulo] = useState('');
// const [descricao, setDescricao] = useState('');

/*
        const [status, setStatus] = useState('open');
        const [isLoading, setIsLoading] = useState(false);
        const [orders, setOrders] = useState<OrderProps[]>([]);
      
        useEffect(() => {
          setIsLoading(true);


          const subscribe = firestore()
          .collection('produtos')
          .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }) as OrderProps[];
            setOrders(data);
            setIsLoading(false);

        });

          return () => subscribe(); 
        }, []);
  */
//============================================================================

//Exemplo do código abaixo do banco de dados do vídeo do Youtube "React-Native, Renderizar no App Itens do banco | Criando App do Zero"
//Canal do Youtube: Guilherme Fernando - Developer
//puxa os dados do banco de dados/firebase/firestore em tempo real... 


export default function MeusProdutos() {

//const [data, setData] = useState(false);
const [data, setData] = useState('');



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
        return () => ref()
    }, [])


    return (
        <View style={{ padding: 18, backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Meus produtos para doar e vender!</Text>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <View style={{ marginTop: 14 }}>
                            <Card containerStyle={{ marginTop: 15 }}>
                                {/*aqui vai o card de imagens, mas não está puxando do banco de dados*/}
                                <Card.Image 
                                    style={styles.img}
                                    //source={{ uri : 'gs://meus-pertences.appspot.com' }} 
                                    source={{ uri : 'gs://meus-pertences.appspot.com' }} 
                                />
                                <Card.Title>{item.titulo}</Card.Title>
                                <Card.Divider />
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.valor}</Text> 
                                <Text style={{ fontSize: 16, marginTop: 5 }}>{item.descricao}</Text>
                            </Card>
                        </View>
                    )}
                />

        </View>
    );





/*
    return (
        
        
                <Card.Image
                    style={{ padding: 0 }}
                    source={require('../../../src/assets/img1.png')}
                />
                <Text style={{ marginBottom: 10 }}>
                    Um dos destinos mais procurados onde boa parte da arquitetura do país data dos séculos XVI a XIX.
                </Text>
            </Card>
        </View>
    );

*/

 

}

const styles = StyleSheet.create({
    img: {   
        padding: 0,
        resizeMode: 'contain',
    },
});


/*
//Exemplo de tela simples

export default function MeusProdutos() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#000000",
                    fontWeight: "800"
                }}
            >
                Meus produtos está aqui
            </Text>
        </View>
    );
}
*/