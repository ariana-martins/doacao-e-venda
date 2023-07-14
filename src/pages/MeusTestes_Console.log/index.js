
// [PAGINA NÃO ATIVA NO APP, Página apenas afins de testes e console.log]

//=======================================================================

// Para "UPLOAD DE IMAGEM - IMAGE CROP PICKER", console.log para ver se está selecionando a imagem no local certo...
// Referência para o teste: (https://www.youtube.com/watch?v=brE91Obyn78)
// Vídeo: React-Native:- How to use Image Crop Picker in React Native || Open Camera/Gallery || Gulsher Khan
// Canal do Youtube: Intellect Developer

// https://www.npmjs.com/package/react-native-image-crop-picker

/*

export default function UploadImagem() {

    const onSelectImage = async () => {
        if (onSelectImage) {
            Alert.alert(
                'Para as imagens',
                'Escolha uma Opção:',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Galeria', onPress: onGallery },
                    { text: 'Cancelar', onPress: () => { } }
                ]
            )
        }
    }
    const onCamera = () => {
        console.log("Im camera")
    }

    const onGallery = () => {
        console.log("Im Gallery")
    }


    return (

        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnStyles}
                activeOpacity={0.8}
                onPress={onSelectImage}
            >
                <Text style={styles.txtStyles}>Upload Image</Text>
            </TouchableOpacity>
        </View>

    );
};


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        btnStyles: {
            backgroundColor: 'blue',
            height: 48,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        txtStyles: {
            color: 'white',
            fontWeight: 'bold',
            paddingHorizontal: 16,
        },
    });

   */

//=======================================================================
/*
// [ADICIONAR UMA OU + IMAGENS, FAZENDO O UPLOAD]

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


//Referências Upload Image Crop Picker
// Vídeo 1: React-Native:- How to use Image Crop Picker in React Native || Open Camera/Gallery || Gulsher Khan (https://www.youtube.com/watch?v=brE91Obyn78&t=922s)
// Vídeo 2: React-Native:- How to upload image as form data with api to server in React Native || Gulsher Khan
// Canal do Youtube: "Intellect Developer"


export default function InteressesTopTab() {


    const onSelectImage = async () => {
        if (onSelectImage) {
            Alert.alert(
                'Para as imagens',
                'Escolha uma Opção:',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Galeria', onPress: onGallery },
                   // { text: '+ que 1 imagem', onPress: onGalleryVarias }, //Selecionar multiplas imagens
                    { text: 'Cancelar', onPress: () => { } }
                ]
            )
        }
    }

    const onCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    const onGalleryVarias = () => {
        ImagePicker.openPicker({
            multiple: true
          }).then(images => { //cuidar aqui, que o nome é "images" e não "image" quando ativar essa configuração
            console.log(images);
          });
    }


    return (

        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnStyles}
                activeOpacity={0.8}
                onPress={onSelectImage}
            >
                <Text style={styles.txtStyles}>Upload Image</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyles: {
        backgroundColor: 'blue',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtStyles: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 16,
    },
});

*/

//=======================================================================

/*
//[PREENCHER TODOS OS DADOS (titulo, descrição, nome, email etc...) CORRETAMENTE, dentro do TextInput.

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Button } from 'react-native';


//Referência para preencher todos os dados (titulo, descrição, nome, email etc...) corretamente.
//"Como Verificar se Uma Caixa de Texto foi Preenchida ao Usar TextInput no React Native:"
// Link do exemplo: https://developerplus.com.br/como-verificar-se-uma-caixa-de-texto-foi-preenchida-ao-usar-textinput-no-react-native/


export default function InteressesTopTab() {

        const [textInputName, setTextInputName] = useState('');
        const [textInputEmail, setTextInputEmail] = useState('');

        const checkTextInput = () => {
            if (!textInputName.trim()) {
                alert('Digite o Nome');
                return;
            }

            if (!textInputEmail.trim()) {
                alert('Digite o E-mail');
                return;
            }

            alert('Successo');
        };

        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Digite o Nome"
                        onChangeText={(value) => setTextInputName(value)}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Digite o E-mail"
                        onChangeText={(value) => setTextInputEmail(value)}
                    />
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Enviar"
                            onPress={checkTextInput}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 20,
    },
});

*/

//=======================================================================