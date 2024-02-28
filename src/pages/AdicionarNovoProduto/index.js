import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import ImageCropPicker from 'react-native-image-crop-picker';

//import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { useNavigation } from '@react-navigation/native';






export default function AdicionarNovoProduto() {
    const navigation = useNavigation();

    const [isSelected, setSelection] = React.useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [vender, setVender] = useState('');
    const [doacao, setDoacao] = useState('0,00'); //ou acrescentar "valor null" para não inserir nenhum valor
    const [images, setImages] = useState('https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT%20-%20P&B.png');


    //função pressionar botão pesquisar
    const onSelectAddProduto = () => {
        console.log(isSelected);
        //isSelect = false (Doacao), true (Para Vender)
    };


    //configurando imagem para ser armazenada no firebase/storage, e depois, 
    //para que a imagem seja puxada do mesmo local para carregar de volta no App.

    const filename = images.substring(images.lastIndexOf('/') + 1);
    const uri = images.replace('file://', '');
   

    //diretório onde está salvando a imagem

    //criando uma tarefa de teste para ver se a imagem está sendo armazenada no Storage do Firebase
    const task = storage().ref(filename).putFile(uri);


    const user_id = firebase.auth().currentUser.uid;

    const ref = firestore().collection('produtos');
    //referencia deste conteudo do firebase
    // Vídeo: React Native Firebase Todo App | React Native
    // Link do video: https://www.youtube.com/watch?v=ZixONsxTy0g&list=PLeOkQb0b3nPzXq_jKX70NRvXlbZ9p7ji5
    // Canal do Youtube: JAS ACADAMY


    //-----------------------------------------
 /*
    // ==>> Referência: https://medium.com/@expertapplicationdeveloper/how-to-use-firebase-storage-in-react-native-56de50bd4c7f    
//7. You can also download files from Firebase Storage using the getDownloadURL() method:


// Create a reference to the file in Firebase Storage
//const fileRef = storage().ref('path/to/storage/images.jpg');
const fileRef = storage().ref(filename);



// Get the download URL for the file
fileRef.getDownloadURL()
    .then((url) => {
        // Use the download URL to display or download the file
        console.log('Download URL:', url);
    })
    .catch((error) => {
        // Handle any errors
        console.error('Download error:', error);
    });
    //

// ==>> Referência: https://medium.com/@expertapplicationdeveloper/how-to-use-firebase-storage-in-react-native-56de50bd4c7f    
*/
//-----------------------------------------



    {/* =>Botão Inserir Produto<= */ }
    const onSubmitPress = async () => {

        console.log(titulo, "Titulo aqui")
        if (titulo.length == 0) {
            Alert.alert("Nome do Produto:", "Por favor descreva um título para o produto")
            return
        }
        console.log(descricao, "Descricao aqui")
        if (descricao.length == 0) {
            Alert.alert("Descrição:", "Por favor descreva uma descrição para o produto.")
            return
        }
        /*
        console.log(doacao, "Doacao aqui")
        if (doacao.length == 0) {
            Alert.alert("Doacao:", "Valor nulo")
            return
        } 
        console.log(valor, "Valor aqui")
        if (valor.length == 0) {
            Alert.alert("Valor:", "Para vender um produto, digite um valor.")
            return
        }
        */
        Alert.alert("Produto", "Produto cadastrado com sucesso!",
            [{ onPress: () => navigation.goBack() }]
        );
        //Falta arrumar para: Limpar toda a Página quando clicar em  "Ok" desse alerta (Produto cadastrado com sucesso) e ir para a tela "Pagina Inicial"
        //[OK]Configurar botão: onPress: () => navigation.goBack() //para voltar na PaginaInicial após clicar em OK deste Alert.

        await ref.add({
            images,
            titulo,
            descricao,
            valor,
            doacao,
            status: 'teste',
            user_id,
            created_at: firestore.FieldValue.serverTimestamp()

        })
        console.log(titulo)
        setTitulo('') //para que não seja armazenada novamente e evitar a redundancia
        console.log(descricao)
        setDescricao('')
        console.log(doacao)
        setDoacao('')
        console.log(valor)
        setValor('')

    }


    //Função enviar para tela inicial após "Cadastro com sucesso" ou quando clicar no botão "Cancelar"
    const VoltarAoInicio = () => {
        Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "SIM",
                onPress: () => navigation.goBack() //Navigation.goBack() volta para "PaginaInicial" pois as Tabs já estão configuradas como InitialHome para iniciar na "Pagina Inicial"
                //Dicas nos links: https://www.tabnews.com.br/marcosveloso/template-de-rotas-react-native-com-native-stack-bottom-tabs-e-drawer-navigator
                //Dicas nos link complementar com o código gitHub: https://github.com/MarcosVel/routes-template/commit/33e621df08b702225460437fd0b3fb58678b98d9
                // ==>> Falta arrumar para: Limpar toda a Página quando clicar em  "Cancelar em Sim" e ir para a tela "Pagina Inicial" 
            }
        ]);
        return true;
    };




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
                        }
                    }
                ]
            )
        }
    }


    //carregando uma foto, escolhendo através da biblioteca de imagens que tem no celular.
    //const choosePhotoFromLibrary = () => {'https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT%20-%20P&B.png'
    const onCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("Tire uma imagem", image);
            setImages(image.path); //visualiza a imagem no App, após tirar foto oPor favor descreva uma descrição para o produtou selecionou da galeria de imagens
        });
    }

    const onGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("Selecione uma imagem", image);
            setImages(image.path); //visualiza a imagem no App, após tirar foto ou selecionou da galeria de imagens
        });
    }

    const onGalleryVarias = () => {
        ImageCropPicker.openPicker({
            multiple: true
        }).then(images => { //cuidar aqui, que o nome é "images" e não "image" quando ativar essa configuração
            console.log(images);
            //setImages(image.path); //ativar essa linha quando ativar multiplas imagens, para visualizar a imagem no App antes de "Cadastrar produto" para ir p/ o banco de dados do firebase/storage
        });
    }



    return (

        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

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
                    source={{ uri: images }}

                />
                {/* "onPress={() }" entre parenteses o onPress chama funcao anonima, que vai chamar o ImageCropPicker */}
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={onSelectImage}
                // Verificar algum procedimento para o usuário selecionar de 1 até 4 imagens aqui, 
                // sem necessitar utilizar o "multiplas imagens" do Image Crop Picker
                >
                    <Text style={styles.buttonText}>Escolher imagem</Text>
                </TouchableOpacity>
            </View>




            <Text style={styles.texto}>Título do produto:</Text>
            <View style={styles.botaoAdicionarMargem}>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        disable={titulo.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                        placeholder="Escreva aqui o nome do produto..."
                        value={titulo}
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
                        disable={descricao.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                        placeholder="Escreva aqui os detalhes do produto..."
                        value={descricao}
                        keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                        onChangeText={setDescricao}
                    />
                </View>
            </View>

            <Text style={styles.texto}>Selecione uma opção:</Text>

            

            <View>
                {/* ==>>> FAZER TESTE NA OUTRA TELA, TRANSFORMAR EM FUNÇÃO, COM IF <<====== */}
                <View style={styles.checkboxOpcoes}>


                    <Checkbox
                        status={isSelected ? 'unchecked' : 'checked'}
                        onPress={() => {
                            setSelection(!isSelected);
                            Alert.alert('DOACAO', 'Valor nulo!')
                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA DOAR</Text>

                    
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                            Alert.alert('PARA VENDER', 'Acrescente um valor para o produto!')

                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA VENDER
                        
                        {isSelected
                            //? " acrescente um valor" : " "
                        }
                        {/* value={doacao} */}
                    </Text>
                </View>
            </View>

            <View style={styles.botaoAdicionarMargem}>
                <View style={styles.inputArea}>
                    <Text>R$</Text>
                    <TextInput
                        style={styles.input}
                        disable={valor.length === 0} //validação desativada, se textInputName não for preenchida/igual a zero(0), não vai ser pressionável o botão "Enviar"
                        placeholder="0,00"
                        value={valor}
                        keyboardType="numeric" // Define esse teclado numérico quando deseja manipular dados de um TextInput com entrada somente números.
                        onChangeText={setValor}
                    />
                </View>
            </View>
            <View style={styles.botaoAdicionarMargem}>
                {/* =>Botão Inserir Produto<= */}
                {/*<TouchableOpacity style={styles.btn} onPress={() => onSelectAddProduto()}>*/}
                <TouchableOpacity style={styles.btn} onPress={() => onSubmitPress()}>
                    <Text style={styles.textoBotao}>Cadastrar produto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botaoAdicionarMargem}>
                <TouchableOpacity style={styles.btn} onPress={() => VoltarAoInicio()}>
                    <Text style={styles.textoBotao}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    /*
       bordaAddFotos: {
           alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
           justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
           height: 200,
           borderRadius: 5,
           borderWidth: 3,
           borderColor: "#000000",
           borderStyle: 'dashed',
           marginVertical: 10,
           margin: 20,
       },
   */
    container: {
        flex: 1,
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5, //essa numeração é para deixar a borda da imagem menos circular
        //borderRadius: 50, //essa numeração é para deixar a borda da imagem completamente circular
        resizeMode: 'contain',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#191970',
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    texto: {
        paddingHorizontal: 15,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
    },
    botaoAdicionarMargem: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        width: '100%',
        marginVertical: 10,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '98%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    },
    input: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%', 
    },
    inputAreaDetalhes: {
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
    inputDetalhes: {
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
    checkboxOpcoes: {
        flexDirection: "row",
        marginBottom: 5,
    },
    /*
    checkbox: {
        alignSelf: "center",
    },
    */
    label: {
        margin: 8,
    },
    btn: {
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    },
    textoBotao: {
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize: 20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },

});

