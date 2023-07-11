import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Button } from 'react-native-elements';

import ImageCropPicker from 'react-native-image-crop-picker';
//import ImagePicker from 'react-native-image-crop-picker';

import storage from '@react-native-firebase/storage';


//import {  launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

//launchCamera -> Para Inicializar a camera do usuário,
//launchImageLibrary -> Para inicializar a galeria, para o usuario escolher uma imagem da galeria de imagens dele,
//showImagePicker -> É a opção que dá esse direto de escolha para o usuário, escolher imagem da galeria ou tirar uma foto.

//openCamera ->
//openCropper ->
//openPicker -> //abrir o seletor de imagens


export default function PerfilTopTab() {

    //    const [images, setImages] = useState('https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT%20-%20P&B.png');


    //Ref of our image
    //const reference = storage().ref('url or name_of_file');
    const reference = storage().ref('Logo FACCAT (1).png');

    /*
        const choosePhotoFromLibrary = () => {
    
            ImageCropPicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(images => {
                console.log(images);
            });
        }
    
    */

    //function for choose the image with image-crop-picker
    const choose_photo = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path)
            sheet.current.close()
        });
    }


    //React Hook com useState para pegar a imagem selecionada e exibi-la em nosso aplicativo.
    const [image, setImage] = React.useState(null);


    //===========================================
    // Referência: https://dev.to/papemalick2015/react-native-firebase-storage-11kf
    // Agora vamos salvar a imagem no Firebase Storage
    // Para isso criamos outra função que iremos vincular com nossa referência, essa é a url da imagem.
    // Eu movo a referência constante dentro da função
    // save_photo

    const savephoto = async () => {
        const aploaduri = image;
        let filename =
            aploaduri.substring(aploaduri.lastIndexOf('/') + 1);
        const reference = storage().ref(filename)
        const task = reference.putFile(aploaduri)
        //set  transferred state
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} 
        transferred out of 
            ${taskSnapshot.totalBytes}`);
        });

        try {
            await task;
            const url = await reference.getDownloadURL() //Baixando um arquivo com uma URL, e para obter uma URL de uma referência usando .getDownloadURL().
            Alert.alert('Your image is saved! smile')
            return url
        }
        catch (e) {
            console.log(e)
            return null
        }

    }



// Agora vamos criar o Button para escolher a imagem e exibi-la ("choose_photo")

    return (
        <View style={styles.container}>
            <View style={styles.container_images}>
                <TouchableOpacity onPress={() => choose_photo()}>
                    {image && <Image source={{ uri: image }}
                        style={styles.image_picker} />}
                    {!image && <Image source={require('../../assets/logo.png')}
                        style={styles.image_picker} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={savephoto}>
                    <Text>Salvar imagem</Text>
                </TouchableOpacity>
            </View>
        </View>
    )



    //=================================================

    /* //Um exemplo para Selecionar a foto ou escolher da galeria
            
   const options = {

        title: 'Mudar foto de perfil',
        takePhotoButtonTitle: 'Tirar nova foto',
        chooseFromLibraryButtonTitle: 'Escolha nova foto da galeria',
      
      }
    
    */ //até aqui
    // =============================================





    //  return (
    //       <View style={styles.container}>
    //          <Image style={styles.avatar} source={{ uri: images }} />
    //        {/* "onPress={() }" entre parenteses o onPress chama funcao anonima, que vai chamar o ImageCropPicker */}
    //        <TouchableOpacity style={styles.button} onPress={choosePhotoFromLibrary}>
    //             <Text style={styles.buttonText}>Escolher imagem</Text>
    //         </TouchableOpacity>
    //      </View>
    //   )






}


const styles = StyleSheet.create({
    /*
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
    },
    */
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#7159c1',
        justifyContent: 'center', //justifica o texto dentro do botação "Escolher imagem"
        alignItems: 'center' //justifica o texto dentro do botão "Escolher imagem"
    },
    /*
    buttonText: {
        color: '#fff',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50, //essa numeração é para deixar a borda da imagem completamente circular
    },
   
    */
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    image_picker: {
        width: 180,
        height: 180,
        borderRadius: 90
    },
    container_images: {
        alignItems: 'center',
        //   marginTop: hp('1%')
    }


})


/*
export default function PerfilTopTab() {

    const [imageUser, setImageUser] = React.useState('https://i.pinimg.com/originals/7c/e6/f9/7ce6f9bdc75bc7dd98f51a1ae2b4ce19.jpg')
    
    // função vai deixar o usuário selecionar uma foto da câmera ou galeria

    const handleImageUser = () => {
        Alert.alert(
            "Selecione", 
            "Informe de onde você quer pegar a foto", 
            [ 
                {
                    text: "Galeria",
                    onPress: () => pickImageFromGalery(),
                    style: "default"
                },
                {
                    text: "Camera",
                    onPress: () => pickImageFromCamera(),
                    style: "default"
                },
                {
                    cancelable: true,
                    onDismiss: () => console.log('tratar depois...')
                }
            ]
        )
    }

    const pickImageFromGalery = async () => {
        
        console.log("chamou a galeria");
        const options: ImageLibraryOptions = {
            mediaType: 'photo'
        }

        const result = await launchImageLibrary(options);

        console.log("depois de chamar a galeria");
        console.log(result);
    }


    const pickImageFromCamera = async () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            saveToPhoto: false,
            cameraType: 'front',
            quality: 1,
        }

        const result = await launchCamera(options);
        
        if (result?.assets) {
            setImageUser(result.assets[0].uri)
            return 
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>React Native Image Crop Picker</Text> 

            <ImageBackground style={{ width: 100, height: 100}}
                source={require('../../assets/logo.png')}
                //blurRadius={5}
            />
           
            <View style={styles.profileImage}>
                <TouchableOpacity style={styles.contentImg}
                    onPress={() => handleImageUser ()}
                >
                        
                    <Image style={styles.imgUser}
                        source={{
                            uri: imageUser
                        }}
                        resizeMode={"cover"}
                    />
                </TouchableOpacity>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    texto: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "800",
    },
    profileImage: {

    },
    contentImg: {
        width: 150,
        borderRadius: 500,
        height: 150,
        backgroundColor: "#C4C4C4",
        //border: 5, 
        //solid: #222,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imgUser:{
        width: 145,
        height: 145,
        borderRadius: 500,
    },

});

*/