import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import { Card } from '@rneui/base';
import { Card, Button, Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

//import firebase from '@react-native-firebase/firestore';
import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';




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

//Exemplo do código abaixo do banco de dados do vídeo do Youtube: "React-Native, Renderizar no App Itens do banco | Criando App do Zero"
// Link do vídeo do Youtube: https://www.youtube.com/watch?v=y5SiIiQkp0M
//Canal do Youtube: Guilherme Fernando - Developer
//puxa os dados do banco de dados/firebase/firestore em tempo real... Explica certinho para que serve cada linha do código "UseEffect"


export default function MeusProdutos() {
   // const navigation = useNavigation();

//const [data, setData] = useState(false);
    const [data, setData] = useState('');

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

    
    //==============================================================================================================
    //CRIAR UMA CONST "<RenderCard/>" e renderizar ela com ({item}) =>
    // e dentro do return e da <Flatlist/> + renderItem={({item})} ACRESCENTAR o "<RenderCard/>"
    
    // Exemplo a partir de 23:00min de vídeo a seguir:
    // Conforme exemplo do link: "https://www.youtube.com/watch?v=g_nSRcjzivw&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=11"
    // Título do Canal do Youtube: #7 Showing all User on Home Screen | WhatsApp Clone using React Native and Firebase in Hindi
    // Canal do Youtube: CODERS NEVER QUIT

    //========================================
    //CRIAR UMA CONST "<RenderCard/>" e renderizar ela com ({item}) =>
    // e dentro do return e da <Flatlist/> + renderItem={({item})} ACRESCENTAR o "<RenderCard/>"
    // e junto, cada card tem um botão abaixo, renderizando cada item

    // Exemplo a partir de 1:09:00min de vídeo a seguir:
    // Conforme exemplo do link: "https://www.youtube.com/watch?v=ntPQ-IPm3AM&list=PLB97yPrFwo5ihgCoWXlEDHrAPQNshsfzP&index=2"
    // Título do Canal do Youtube: Part 1/2 | OLX Clone using React Native & Firebase | React Native & Firebase for beginners in Hindi
    // Canal do Youtube: CODERS NEVER QUIT
    //==========================================

    //Também é necessário criar no firebase uma collection como User (uid/para usuário após autenticar, além dos produtos. Depois 
    //tem que juntar os produtos de cada usuário/user/uid)
    //==============================================================================================================


    //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
    // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
    const user_id = firebase.auth().currentUser.uid;


    return (
        <View style={{ padding: 18, backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Meus produtos para doar e vender!</Text>
       
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <View style={{ marginTop: 14 }}>
                            <Card containerStyle={{ marginTop: 15 }}
                               
                            //   key={item.id} //uma id para cada produto
                            >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{user_id}</Text> 
                                {/*aqui vai o card de imagens, mas não está puxando do banco de dados todas as imagens*/}
                                <Card.Image 
                                    style={styles.img}
                                    source={{ uri : item.images }} 
                                />
                                <Card.Divider />
                                <Card.Title>{item.titulo}</Card.Title>
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
                alignItems: "center", //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
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