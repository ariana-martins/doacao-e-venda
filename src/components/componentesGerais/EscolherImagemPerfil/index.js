import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';


import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import ImageCropPicker from 'react-native-image-crop-picker';


export default function EscolherImagemPerfil() {

    const user_id = firebase.auth().currentUser.uid;

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const enviarImgPerfil = async () => {
        //==>>> aqui vai aparecer o upload e o getDowload da imagem ==     
        const imageUrl = await uploadImage();
        console.log('Imagem Url:', imageUrl);

        //=================================
        // Ajustado para o usuário preencher *obrigatoriamente todos os dados completos.
        if (imageUrl === null) {
            Alert.alert("Imagem do produto", "Por favor selecione uma imagem para a foto de perfil")
            return null
        }


        firestore()
            .collection('perfil')
            .add({
                user_id: user_id,
                imagem: imageUrl,
                status: 'teste',
                postPerfil: firestore.Timestamp.fromDate(new Date()),
            })
            .then(() => { //se for bem sucedido, dados do perfil acrescentado.
                console.log('Perfil acrescentado!');
                //setTitulo(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
                Alert.alert("Perfil!", "Perfil acrescentado com sucesso.")
            })
            .catch((error) => { //caso ao contrário, aparece um erro...
                console.log('Algo deu errado com a postagem adicionada ao firestore', error);
            });

    }

    const onSelectImagePerfil = async () => {
        if (onSelectImagePerfil) {

            Alert.alert(
                'Para a imagem',
                'Escolha uma Opção:',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Galeria', onPress: onGallery },

                    {
                        text: 'Cancelar', onPress: () => {
                            Alert.alert('Você não selecionou nenhuma imagem');
                            console.log('Usuário não selecionou imagem');
                        }
                    }
                ]
            )
        }
    }


    const onCamera = async () => {
        ImageCropPicker.openCamera({
            width: 150, //para a imagem ficar quadrada
            height: 150, //para a imagem ficar quadrada
            cropping: true, //opção para ajustar recorte da imagem
        })
            .then(image => {
                console.log("Tire uma imagem", image);
                setImage(image.path);
            })
            .catch(error => {
                console.log("Aviso: Usuário cancelou imagem da camera.", error);
            });
    };

    const onGallery = async () => {
        ImageCropPicker.openPicker({
            width: 150, //para a imagem ficar quadrada
            height: 150, //para a imagem ficar quadrada
            cropping: true, //opção para ajustar recorte da imagem
        })
            .then(image => {
                console.log("Selecione uma imagem", image);
                setImage(image.path);
            })
            .catch(error => {
                console.log("Aviso: Usuário cancelou imagem da galeria", error);
            });
    };

    const uploadImage = async () => {
        //================================= 
        //Para remover o erro "ReactImageView: Image source "null" doesn't exist"
        if (image == null) {
            return null;
        }
        //===============================

        const uploadUri = image;
        //variavel para armazenar apenas o nome do arquivo
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
        //antes do bloco try e de catch atualizarei o estado de "Upload" para "true" e depois do "await" para "false", e depois do catch retorna a imagem como "null"
        setUploading(true);
        setTransferred(0);

        const storageRef = storage().ref(`perfilPhotos/${filename}`);
        const task = storageRef.putFile(uploadUri);

        //log que dados sendo transferidos para o firebase...
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setTransferred(Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100)
        });

        try {
            await task;
            const url = await storageRef.getDownloadURL();
            setUploading(false);
            //Estou deixando comentado o "setImage(null)" para permanecer a imagem na tela após salvar a imagem de perfil.
            //setImage(null); //aqui faz que, após a imagem ter "Feito concluído o getDownload para o arquivo, a imagem fica nula"
            //Alert.alert('Upload de imagem', 'Feito upload de imagem');
            console.log('Download URL:', url);
            return url; //retorna a url do .getDownloadURL();
        }
        catch (error) { //capturar nosso erro
            console.log("Qualquer erro", error);
            return null; //se retornar algum erro, colocamos null

        }

    }


    return (
        <View>

            <View style={styles.container_images}>
                <TouchableOpacity onPress={() => onSelectImagePerfil()}>
                    {image !== null ?
                        (<Image style={styles.image_picker}
                            source={{ uri: image }}
                        />
                        ) : <Image style={styles.image_picker}
                            source={require('../../../assets/logo/logo_novo.jpg')}
                        />}

                    {/*
                    {image && <Image source={{ uri: image }}
                        style={styles.image_picker} />}
                    {!image && <Image source={require('../../assets/logo/logo.png')}
                        style={styles.image_picker} />}
                    */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => enviarImgPerfil()}>
                    <Text style={styles.buttonTextSalvarImagem}>Salvar imagem</Text>
                </TouchableOpacity>

                {/*
                <TouchableOpacity style={styles.button}
                    onPress={savephoto}>
                    <Text>Salvar imagem</Text>
                </TouchableOpacity>
    */}


                {uploading ? (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000000' }}>{transferred} % Carregando imagem!</Text>
                        <ActivityIndicator size='large' color='#6646ee' />
                    </View>
                ) : null
                }

            </View>

        </View>
    )

}


const styles = StyleSheet.create({

    container_images: {
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    image_picker: {
        width: 100,
        height: 100,
        borderRadius: 50, //essa numeração é para deixar a borda da imagem completamente circular
        margin: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    button: {
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center' //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    buttonTextSalvarImagem: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },

})

