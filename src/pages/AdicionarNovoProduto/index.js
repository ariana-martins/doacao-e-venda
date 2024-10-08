import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator, TextInput } from "react-native";
import { Checkbox } from "react-native-paper";
import { Card } from "@rneui/themed";

import { styles } from "./styles";

import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { firebase } from "@react-native-firebase/auth";

import { useNavigation } from '@react-navigation/native';

import HeaderAddNovoProduto from "../../components/Header/HeaderAddNovoProduto";


export default function AdicionarNovoProduto() {
    const navigation = useNavigation(); // Após cadastro do produto, ir para Página Inicial

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [titulo, setTitulo] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [isSelected, setSelection] = useState(false);
    const [valor, setValor] = useState('0,00');

    //Para deletar e/ou editar apenas os produtos que um usuário adicionou, e não deletar todos os produtos de todos os usuários
    // Ou seja, vai fazer um filtro para filtrar somente os produtos do usuário "x".
    const user_id = firebase.auth().currentUser.uid;


    //====================================
    {/* =>Botão Inserir Produto<= */ }
    //Cria função fora do "upload de imagem", para ver a url da imagem... e postagem de envio da função completa "imagem e add outros detalhes para pagina inicial do app"
    const submitPress = async () => {
        
        //==>>> aqui vai aparecer o upload e o getDowload da imagem ==     
        const imageUrl = await uploadImage();
        console.log('Imagem Url:', imageUrl);
        //=========================================
        console.log('titulo do produto:', titulo);
        console.log('descricao:', descricao);
        console.log('valor', valor);

        //=================================
        // Ajustado para o usuário preencher *obrigatoriamente todos os dados completos.
            if (imageUrl === null) {
            Alert.alert("Imagem do produto", "Por favor selecione uma imagem para o produto")
            return null
            }
            console.log(titulo, "Titulo aqui")
            if (titulo === null) {
            Alert.alert("Nome do Produto:", "Por favor descreva um título para o produto")
            return null
            }
            console.log(descricao, "Descricao aqui")
            if (descricao === null) {
            Alert.alert("Descrição:", "Por favor descreva uma descrição para o produto.")
            return null
            }
            //console.log(doacao, "Doacao aqui")
            //if (doacao === null) {
            //Alert.alert("Doacao:", "Valor nulo")
            //return
            //} 
            console.log(valor, "Valor aqui")
            if (valor === null) {
            Alert.alert("Valor:", "Para vender um produto, digite um valor.")
            return null
            }
    
        //=================================
        

        //importar o firestore, e após isso, especificar a coleção, como tbm add os dados com o ID do usuário que queremos armazenar em nosso banco de dados
        firestore()
            .collection('produtos')
            .add({
                user_id: user_id,
                titulo: titulo,
                imagem: imageUrl,
                descricao: descricao,
                valor: valor,
                status: 'teste',
                // created_at: firestore.FieldValue.serverTimestamp()
                postProduto: firestore.Timestamp.fromDate(new Date()),
                registrarInteresse: null,
            })
            .then(() => { //se for bem sucedido, produto acrescentado.
                console.log('Produto adicionado!');
                setTitulo(null); //depois de add o produto com sucesso, irei atualizar o "post" como null.
                setDescricao(null);
                setValor(null); //depois de add o produto com sucesso, irei atualizar o "post" como null, ou seja volta o valor de 0,00.
                Alert.alert("Produto", "Produto cadastrado com sucesso!",
                    [{ onPress: () => navigation.goBack() }] //para voltar na PaginaInicial após clicar em OK deste Alert.
                );
            })
            .catch((error) => { //caso ao contrário, aparece um erro...
                console.log('Algo deu errado com a postagem adicionada ao firestore', error);
            });
    }


    //====================================

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
                onPress: () => {
                    setTitulo(null); //se Cancelar "SIM", irei atualizar o "post" como null.
                    setDescricao(null);
                    setValor(null);
                    setImage(null);
                    setSelection(!isSelected);
                    navigation.goBack(); 
                }//Navigation.goBack() volta para "PaginaInicial" pois as Tabs já estão configuradas como InitialHome para iniciar na "Pagina Inicial"
                //Dicas nos links: https://www.tabnews.com.br/marcosveloso/template-de-rotas-react-native-com-native-stack-bottom-tabs-e-drawer-navigator
                //Dicas nos link complementar com o código gitHub: https://github.com/MarcosVel/routes-template/commit/33e621df08b702225460437fd0b3fb58678b98d9
         
            }
        ]);
        return true;
    };

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

    /* //Para multiplas imagens.
    const onGalleryVarias = () => {
        ImageCropPicker.openPicker({
            multiple: true
        }).then(images => { //cuidar aqui, que o nome é "images" e/ou "imagem" e não "image" quando ativar essa configuração, ver como fica através do Firestore...
            console.log(images);
            //setImages(image.path); //ativar essa linha quando ativar multiplas imagens, para visualizar a imagem no App antes de "Cadastrar produto" para ir p/ o banco de dados do firebase/storage
        });
    }
*/

    //função assíncrona "async", após clicar no botão de Postagem "Post"
    // vai fazer o upload dessa imagem para o armazenamento em nuvem, envia a foto para o Storage do firebase
    //função de upload da imagem
    const uploadImage = async () => {

        //================================= 
        //Para remover o erro "ReactImageView: Image source "null" doesn't exist"
        
        if( image == null ) {
            return null;
          }
        
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
            //Estou deixando comentado o "setImage(null)" para permanecer a imagem na tela após salvar a imagem de perfil.
            //setImage(null); //aqui faz que, após a imagem ter "Feito concluído o getDownload para o arquivo, a imagem fica nula"
            //Alert.alert('Upload de imagem', 'Feito upload de imagem');
            console.log('Download URL:', url);
            return url; //retorna a url do .getDownloadURL();


        } catch (error) { //capturar nosso erro
            console.log("Qualquer erro", error);
            return null; //se retornar algum erro, colocamos null
        };

        //   setImage(null);
    }


    //====================================
    //funcao Selecionar Doar e Vender Produto. [OK - dia 25.03.24]
    // Exemplo de funcao no exemplo do Youtube: Renderização Condicional em React Native - Curso de React Native - Aula 10
    // Link: https://www.youtube.com/watch?v=veB-CF6ugSY
    // Canal do Youtube: CFBCursos

    let DoarVender = !isSelected; // !isSelect = true (Doacao), !isSelect = false (Para Vender)
    {/* Falta configurar para o valor ficar nulo (R$ 0,00) quando retornar selecionado PARA DOAR, 
        após preencher e/ou se enganar de selecionar o produto PARA VENDER e preencher qualquer valor.
        --
        Para fazer a seleção de doar e vender produto, eu tenho que usar a opção de "boolean" pois só vai me dar uma opção ou a outra opção.
        Exemplo:
        Só posso selecionar se vai ser "True" ou "False".

        Se "True" is select valor == 0
        Se "False is select valor == "" //vazio, preenche valor, para vender produto
     */}
    //console.log(typeof DoarVender); //[06/08/2024] utilizando o "typeof" consigo ver que a opção já é boolean 
    //console.log(DoarVender);


    //====================================




    return (
        <View style={styles.container}>

           <HeaderAddNovoProduto /> 
            {/*Verificando se a imagem é nulo */}
            {/* {image != null ? <AddImage source={{uri: image}} /> : null} */}

            <View style={styles.bordaAddFotos}>

                {image !== null ? (
                    <Card.Image
                        style={styles.img}
                        source={{ uri: image }}
                    />
                ) : null}

            </View>

            {/** Imagem, substitui o "null" após do ":" fica como imagem inicial, e após fazer o upload da imagem nova, volta a imagem do logo.
            (
                <Image
                    style={styles.img}
                    source={require('../../assets/logo/logo_novo.jpg')}
                />
            )
             */}


            {/* "onPress={() }" entre parenteses o onPress chama funcao anonima, que vai chamar o ImageCropPicker */}
            <View style={styles.bordaButtonEscolherImagem}>
                <TouchableOpacity
                    style={styles.buttonEscolherImagem}
                    activeOpacity={0.8}
                    onPress={() => onSelectImage()}
                // Verificar algum procedimento para o usuário selecionar de 1 até 4 imagens aqui, 
                // sem necessitar utilizar o "multiplas imagens" do Image Crop Picker
                >
                    <Text style={styles.buttonTextEscolherImagem}>Escolher imagem</Text>
                </TouchableOpacity>
            </View>

            {/*Animação carregando imagem depois de ter feito "Cadastrar Produto" */}
            {uploading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#000000' }}>{transferred} % Carregando imagem!</Text>
                    <ActivityIndicator size='large' color='#6646ee' />
                </View>
            ) : null
            }

            <Text style={styles.texto}>Título do produto:</Text>
            <View style={styles.inputAreaTitulo}>
                <TextInput
                    style={styles.inputDescricaoTituloDetalhes}
                    placeholder="Escreva aqui o nome do produto..."
                    value={titulo}
                    keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                    onChangeText={setTitulo}
                />
            </View>

            <Text style={styles.texto}>Descrição do produto:</Text>
            <View style={styles.inputAreaDetalhes}>
                <TextInput
                    multiline={true}
                    autoCorrect={false}
                    style={styles.inputDescricaoTituloDetalhes}
                    placeholder="Escreva aqui os detalhes do produto..."
                    value={descricao}
                    keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                    onChangeText={setDescricao}
                />
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
                            // Aqui nesse local vc precisa setar o valor 0,00 dentro do input
                        }}
                        color="#000000"
                    />
                    <Text style={styles.textoCheckBoxOpcoes}>PARA DOAR</Text>
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                            Alert.alert('PARA VENDER', 'Acrescente um valor para o produto!')
                            {/*aqui vc precisa colocar input=0,00, só não sei como referenciar aquele objeto no react native*/ }
                        }}
                        color="#000000"
                    />
                    <Text style={styles.textoCheckBoxOpcoes}>PARA VENDER </Text>
                </View>
            </View>


            <View style={styles.inputAreaCheckBoxOpcoes}>
                <Text>R$</Text>

                {/*basicamente vc pecisa fazer isso abaixo quando o DoarVender mudar de valor (tipo num onChange)*/}
                {/*Se valor é igual isSelected = true, o valor vai ficar nulo 0,00  (para doar) */}
                {/*Se valor é igual !isSelected = false, o valor vai ser preenchido (para vender) */}
                {/*// Falta fazer o if, se marcar Doacao, valor igual a nulo, se marcar Para Vender, é obrigatório preencher um valor. */}

                {DoarVender ?
                    <TextInput
                        style={styles.inputValor}
                        placeholder="0,00"
                        value={valor}
                        keyboardType="numeric" // Define esse teclado numérico quando deseja manipular dados de um TextInput com entrada somente números.
                        //  onChangeText={setValor}
                        setValor={'0,00'} // PARA DOAR ==>>> O valor igual a zero 
                    // para doação ficar igual valor nulo, o onChangeText={setDoacao} não deve existir, 
                    // pois irá apenas ficar o value{doacao} que irá aparecer o valor 0,00 na tela sem o usuário poder preencher o valor.
                    />
                    :
                    <TextInput
                        style={styles.inputValor}
                        placeholder="0,00"
                        value={valor}
                        keyboardType="numeric" // Define esse teclado numérico quando deseja manipular dados de um TextInput com entrada somente números.
                        onChangeText={setValor} // OnChangeText para preencher o valor de "PARA VENDER"
                    // Falta fazer o if, se marcar Doacao, valor igual a nulo/ZERO, se marcar Para Vender, é obrigatório preencher um valor.
                    />
                }
            </View>

            <View style={styles.bordabuttonCadastrarCancelar}>
                <View style={styles.botaoAdicionarMargem}>
                    <TouchableOpacity
                        style={styles.buttonCadastrarCancelar}
                        activeOpacity={0.8}
                        onPress={() => submitPress()}>
                        <Text style={styles.buttonTextCadastrarCancelar}>Cadastrar Produto</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <View style={styles.bordabuttonCadastrarCancelar}>
                <View style={styles.botaoAdicionarMargem}>
                    <TouchableOpacity
                        style={styles.buttonCadastrarCancelar}
                        activeOpacity={0.8}
                        onPress={() => VoltarAoInicio()}>
                        <Text style={styles.buttonTextCadastrarCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View >
    );

}


