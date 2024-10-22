
// [PAGINA NÃO ATIVA NO APP, Página apenas afins de testes e console.log]


//=======================================================================
// PARA TELA INICIAL DE NAVEGAÇÃO EXEMPLO, ERA DO INICIO DO APLICATIVO:

// Exemplo de início do <NavigationContainer />
// Só posso usar 1 vez ele em todo o código, pois vai chamar a navegação em todas as telas que eu configurar o navigation.navite e etc...

/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Inicio!" component={Tabs} options={{ headerShown: false }} />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes',
            headerTitleStyle: {
              fontFamily: 'Roboto',
              fontSize: 25,
              color: '#000000',
            },
          }}
        />

        <Stack.Screen
          name="ChatMensagens"
          component={ChatMensagens}
          options={({ route }) => ({
            title: route.params.userDono,
            headerTitleAlign: 'center',
          })}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/



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
            justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
            alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        },
        btnStyles: {
            backgroundColor: 'blue',
            height: 48,
            borderRadius: 8,
            alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
            justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
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
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    btnStyles: {
        backgroundColor: 'blue',
        height: 48,
        borderRadius: 8,
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
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

/*
//[PREENCHER TODOS OS DADOS (titulo, descrição, nome, email etc...) CORRETAMENTE, dentro do TextInput.]
// + ENVIANDO PARA FIREBASE/FIRESTORE E LIMPANDO A TELA APÓS PREENCHIMENTO DE TODOS OS CADASTROS COM TextInput

import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

//Referência para preencher todos os dados (titulo, descrição, nome, email etc...) corretamente 
// + Enviando para Firebase/Firestore e limpando a tela após todos os dados cadastrados.
//"React Native Firebase Todo App | React Native"
// Link do exemplo: https://www.youtube.com/watch?v=ZixONsxTy0g&list=PLeOkQb0b3nPzXq_jKX70NRvXlbZ9p7ji5&index=13
// Canal do Youtube: JAS ACADAMY


export default function InteressesTopTab() {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    

    //Chamar uma constante ref = "referência"
    const ref = firestore().collection('myInteresses');


    const onSubmitPress = async () => {
        console.log(textInputName, "teste texto")
        if (textInputName.length == 0) {
            Alert.alert("Nome:","Por favor descreva um interesse")
            return
        }
        console.log(textInputEmail, "email texto")
        if (textInputEmail.length == 0) {
            Alert.alert("Email:","Por favor descreva um email")
            return
        }
        Alert.alert("Produto", "Produto cadastrado com sucesso!");

        await ref.add({
            title: textInputName,
            email: textInputEmail,
            complete: false
        })
        console.log(textInputName)
        setTextInputName('') //para que não seja armazenada novamente e evitar a redundancia
        console.log(textInputEmail)
        setTextInputEmail('')

    }


    return (


        <View style={styles.container}>
            <TextInput style={styles.textInputStyle}
                disable={textInputName.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                placeholder="Digite o Nome"
                value={textInputName}
                onChangeText={setTextInputName}
            />
            <TextInput style={styles.textInputStyle}
                disable={textInputEmail.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                placeholder="Digite o Email"
                value={textInputEmail}
                onChangeText={setTextInputEmail}
            />

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={onSubmitPress}
                    style={styles.button}
                >
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 20,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
});

*/

/*
// =========== Exemplo de Estilo para a página do Login ==========================

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { windowHeight, windowWidth } from "../../utils/Dimensions";

export default function FormButton({ buttonTitle, ...rest }) {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: windowWidth / 2,
        height: windowHeight / 15,
        backgroundColor: '#6646ee',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 28,
        color: '#FFFFFF',
    },
})

*/
// ================================================================

/*
// =========== Exemplo de Estilo para a página do Login ==========================


import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

export default function FormInput({ labelValue, placeholderText, ...rest }) {
    return (
        <TextInput
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor='#666'
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
})

*/
// ============================================================================

//============= Exemplo de SignupScreen, pagina Inscreva-se =======================

/*
import React, { useState, useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { AuthContext } from "../navigations/AuthProvider";


export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { register } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.textSignup}>Criar uma conta</Text>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle='Signup'
                onpress={() => register(email, password)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignup: {
        fontSize: 24,
        marginBottom: 10,
    },
});
*/

//============================================================