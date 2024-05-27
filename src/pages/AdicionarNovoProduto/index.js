import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, TextInput } from "react-native";

import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { firebase } from "@react-native-firebase/auth";


export default function AdicionarNovoProduto() {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [titulo, setTitulo] = useState(null);


    //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
    // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
    const user_id = firebase.auth().currentUser.uid;


    //====================================
    //Cria função fora do "upload de imagem", para ver a url da imagem... e postagem de envio da função completa "imagem e add outros detalhes para pagina inicial do app"
    const submitPress = async () => {

        //==>>> aqui vai aparecer o upload e o getDowload da imagem ==
        const imageUrl = await uploadImage(); 
        console.log('Imagem Url:', imageUrl); 
        //=========================================
        console.log('titulo do produto:', titulo);

        //importar o firestore, e após isso, especificar a coleção, como tbm add os dados com o ID do usuário que queremos armazenar em nosso banco de dados
        firestore()
        .collection('produtos')
        .add({
            user_id: user_id,
            titulo: titulo,
            imagem: imageUrl, 
            descricao: null,
            valor: null,
            status: 'teste',
           // created_at: firestore.FieldValue.serverTimestamp()
           postProduto: firestore.Timestamp.fromDate(new Date()),
        })
        .then(() =>{ //se for bem sucedido, produto acrescentado.
            console.log('Produto adicionado!');
            setTitulo(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
        })
        .catch((error) => { //caso ao contrário, aparece um erro...
            console.log('algo deu errado com a postagem adicionada ao firestore', 
            error);
        });
    }
    //====================================


    //Selecionando imagem da camera ou da galeria do celular
    const onSelectImage = async () => {

        if (onSelectImage) {

            Alert.alert(
                'Para as imagens',
                'Escolha uma Opção:',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Galeria', onPress: onGallery },
                    // { text: '+ que 1 imagem', onPress: onGalleryVarias }, //Selecionar multiplas imagens
                    {
                        text: 'Cancelar', onPress: () => {
                            Alert.alert('Você não selecionou nenhuma imagem');
                            console.log('Não selecionou imagem');
                        }
                    }
                ]
            )
        }
    }

    const onCamera = async () => {
        ImageCropPicker.openCamera({
            width: 300, //para a imagem ficar quadrada
            height: 300, //para a imagem ficar quadrada
            cropping: true,
        }).then(image => {
            console.log("Tire uma imagem", image);
             setImage(image.path); //visualiza a imagem no App, após tirar foto ou selecionou da galeria de imagens
           // const imageUri = Platform.OS === 'android' ? image.sourceURL : image.path;
           // setImage(imageUri);
        }).catch(error => {
            console.log("Aviso: Cancelou imagem da camera", error);
        });
    };

    const onGallery = async () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            console.log("Selecione uma imagem", image);
            setImage(image.path); //visualiza a imagem no App, após tirar foto ou selecionou da galeria de imagens
           // const imageUri = Platform.OS === 'android' ? image.sourceURL : image.path;
           // setImage(imageUri);
        }).catch(error => {
            console.log("Aviso: Cancelou imagem da galeria", error);
        });
    };

    //função assíncrona "asnyc", após clicar no botão de Postagem "Post"
    // vai fazer o upload dessa imagem para o armazenamento em nuvem, envia a foto para o Storage do firebase
    //função de upload da imagem
    const uploadImage = async () => {
        
        //================================= 
        //Para remover o erro "ReactImageView: Image source "null" doesn't exist"
        /*
        if( image == null ) {
            return null;
          }
          */
        //===============================
        
        const uploadUri = image;
        //variavel para armazenar apenas o nome do arquivo
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);


        //antes do bloco try e de catch atualizarei o estado de "Upload" para "true" e depois do "await" para "false", e depois do catch retorna a imagem como "null"
        setUploading(true);
        setTransferred(0); //valor padrão

        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);

        //log que dados sendo transferidos para o firebase...
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);

            //definir o estado de transferido, para que estes sejam bytes que está sendo transferido, e "100" é o total de bytes
            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
            )
          });


        //fazer o upload da Foto
        try {
            //a média(midia da foto "storage") e a referencia da foto ("ref", midia será alterada para nosso nome, e depois do "." usaremos nosso arquivo)
            //await storage().ref('black-t-shirt-sm.png');
           // await storage().ref(filename).putFile(uploadUri);
            await task;

            const url = await storageRef.getDownloadURL();

            setUploading(false);
            setImage(null); //aqui faz que, após a imagem ter "Feito concluído o getDownload para o arquivo, a imagem fica nula"
            Alert.alert('Upload de imagem', 'Feito upload de imagem');
            console.log('Download URL:', url);
            return url; //retorna a url do .getDownloadURL();
            
            
        } catch (error) { //capturar nosso erro
            console.log("Qualquer erro", error);
            return null; //se retornar algum erro, colocamos null
        };

     //   setImage(null);
    }







    return (
        <View style={styles.container}>

            {/*Verificando se a imagem é nulo */}
            {/* {image != null ? <AddImage source={{uri: image}} /> : null} */}
        
            {image !== null ? (
                <Image
                    style={styles.img}
                    source={{ uri: image }}
                />
            )
            :null} 
                
            {/**
            (
                <Image
                    style={styles.img}
                    source={require('../../assets/logo/logo_novo.jpg')}
                />
            )}
             */}
               
            
            
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => onSelectImage()}>
                <Text style={styles.buttonText}>Escolher imagem</Text>
            </TouchableOpacity>
                {/*Animação carregando imagem depois de ter feito "Cadastrar Produto" */}
                {uploading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#000000' }}>{transferred} % Carregando imagem!</Text>
                    <ActivityIndicator size='large' color='#6646ee'/>
                </View> 
                ) : ( 
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
             
                )
            }

            <View style={{ margin: 10 }}>
                
            <Text style={{ color: '#000000' }}>Título do produto:</Text>
            <View>
                <View>
                    <TextInput
                       // style={styles.input}
                       // disable={titulo.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                        placeholder="Escreva aqui o nome do produto..."
                        value={titulo}
                        keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                        onChangeText={setTitulo}
                    />
                </View>
            </View>
            </View>

            
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => submitPress()}>
                <Text style={styles.buttonText}>Cadastrar Produto</Text>
            </TouchableOpacity>
            

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        margin: 10,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
})