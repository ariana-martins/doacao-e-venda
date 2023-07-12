import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


export default function InteressesTopTab() {


    const onSelectImage = async () => {
        if (onSelectImage) {
            Alert.alert(
                'Para as imagens',
                'Escolha uma Opção:',
                [
                    { text: 'Camera', onPress: onCamera },
                   // { text: 'Galeria', onPress: onGallery },
                    { text: '+ que 1 imagem', onPress: onGalleryVarias },
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
          }).then(images => {
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





        /* <View
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
                Interesses está aqui
            </Text>
        </View>
    */
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