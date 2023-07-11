import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';


//import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import firestore from '@react-native-firebase/firestore'; 

//[ok dia 21.06.23] falta testar um código de inserir algo no firestore a partir do aplicativo em execucao
// exemplo do video: https://github.com/rodrigorgtic/helpdesk/blob/main/src/components/Forms/OrderForm/index.tsx


export default function AdicionarNovoProduto(){

    const [isSelected, setSelection] = React.useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [isLoading, setIsLoading] = useState(false); //carregando os documentos sem aparecer aquela "configuração de carregando arquivo..."
    const [images, setImages] = useState('https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT%20-%20P&B.png');


    //configurando imagem para ser armazenada no firebase/storage, e depois, 
    //para que a imagem seja puxada do mesmo local para carregar de volta no App.
    const filename = images.substring(images.lastIndexOf('/') + 1);
    const uri = images.replace('file://','');

    //criando uma tarefa de teste para ver se a imagem está sendo armazenada no Storage do Firebase
    const task = storage().ref(filename).putFile(uri);

    //esse "e" quer dizer "else", que é a mesma coisa que "então"
   // task.then((e) => {
   // })
    
    function addNovoProduto() {
        task.then((e) => {
        setIsLoading(true);
    
        firestore()
            .collection('produtos')
            .add({
                images: 'gs://meus-pertences.appspot.com/', //url para deixar armazenada dentro do storage do Firebase
                titulo,
                descricao,
                valor,
                status: 'teste',
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => Alert.alert("Produto", "Produto cadastrado com sucesso!")) //then, para criar mensagem de alerta como desse exemplo
            .catch((error) => console.log(error)) // para criar um log onde pode estar o erro/falha
            .finally(() => setIsLoading(false));
        }) //finaliza task.then
    }

    //carregando uma foto, escolhendo através da biblioteca de imagens que tem no celular.
    const choosePhotoFromLibrary = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400, 
            cropping: true
          }).then(images => {
            console.log(images);
            setImages(images.path);
          });
    }


    return(
       
       <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>

{/*
           <View>
                <View style={styles.bordaAddFotos}>
                    <Button
                        icon="camera"
                        mode="contained"
                        color="#FFFFFF"
                        onPress={() => {}}>
                        Adicionar fotos
                    </Button>
                </View>
           </View>

*/}
      
        <View style={styles.container}>
            <Image style={styles.img}
                source={{uri: images}} 
            />
            {/* "onPress={() }" entre parenteses o onPress chama funcao anonima, que vai chamar o ImageCropPicker */}
            <TouchableOpacity style={styles.button} onPress={choosePhotoFromLibrary}>         
                <Text style={styles.buttonText}>Escolher imagem</Text>
            </TouchableOpacity>
        </View>



           <Text style={styles.texto}>Título do produto:</Text>
           <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva aqui o nome do produto..."
                        keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                        onChangeText={setTitulo}
                    />
                </View>
            </View> 
            <Text style={styles.texto}>Descrição do produto:</Text>
           <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputAreaDetalhes}>
                    <TextInput
                        multiline={true}
                        autoCorrect={false}
                        style={styles.inputDetalhes}
                        placeholder="Escreva aqui os detalhes do produto..."
                        keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                        onChangeText={setDescricao}
                    />
                </View>
            </View> 
            
            <Text style={styles.texto}>Selecione uma opção:</Text>
            <View>
                <View style={styles.checkboxOpcoes}>
                    <Checkbox
                        status={isSelected ? 'unchecked' : 'checked'} 
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA DOAR</Text> 
                    
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA VENDER
                    {isSelected ? " acrescente um valor" : " "}</Text>
                </View>
            </View>

            <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputArea}>
                    <Text>R$</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0,00"
                        keyboardType="numeric" // Define esse teclado numérico quando deseja manipular dados de um TextInput com entrada somente números.
                        onChangeText={setValor}
                    />
                </View>
            </View>
            <View style={styles.botaoAdicionarMargem}> 
                <TouchableOpacity style={styles.btn} isLoading={isLoading} onPress={()=>addNovoProduto()}>
                    <Text style={styles.textoBotao}>Cadastrar produto</Text>  
                </TouchableOpacity>
            </View>
            <View style={styles.botaoAdicionarMargem}> 
                <TouchableOpacity style={styles.btn} onPress={()=>VoltarDeOndeParou()}>
                    <Text style={styles.textoBotao}>Cancelar</Text>  
                </TouchableOpacity>
            </View>
       </View>         
    );
}

const styles = StyleSheet.create({
    bordaAddFotos: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
        borderStyle: 'dashed',
        marginVertical: 10,
        margin: 20,
    },
    texto: {
        paddingHorizontal: 15,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
    },
    botaoAdicionarMargem:{
        paddingHorizontal: 15, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    }, 
    inputAreaDetalhes:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '98%',
        backgroundColor: '#ffffff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    }, 
   input:{
       fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },
    inputDetalhes:{
         fontFamily: 'Roboto',
         fontSize: 15,
         marginLeft: 1,
         marginRight: 1,
         marginTop: 1,
         backgroundColor: '#FFFFFF',
         padding: 10,
         textAlignVertical: 'top',
         color: '#000000',
     },
     checkboxOpcoes:{
        flexDirection: "row",
        marginBottom: 5,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },

    textoBotao:{
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize:20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    btn:{
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //justifica o texto dentro do botação "Escolher imagem"
        alignItems: 'center' //justifica o texto dentro do botão "Escolher imagem"
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5, //essa numeração é para deixar a borda da imagem menos circular
        //borderRadius: 50, //essa numeração é para deixar a borda da imagem completamente circular
    },

});

