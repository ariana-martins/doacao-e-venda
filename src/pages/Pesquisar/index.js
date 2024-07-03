import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, SectionList, Alert, FlatList } from 'react-native';

import { Card } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import BotaoVoltar from '../../components/componentesGerais/BotaoVoltar';

import SearchForm from '../../components/SearchForm';
import testeFiltros from '../../data/testeFiltros';

import ListItem from '../../components/ListItem';
import testeProdutos from '../../data/testeProdutos';

//Falta configurar botão "Voltar", utilizar o "<Button title='Voltar' onPress={() => navigation.goBack()}"/>
//Utilizar esse botão/função ao invés do "ScreenNavigations", pois vai retornar a página anterior o "goBack"
//================


export default function Pesquisar() {

    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(testeProdutos);


    //.toLowerCase() => Transforma o nome em minusculo, para poder pesquisar por palavra chave qualquer tamanho de letra...
    //tanto o nome aparecendo na lista, tanto o nome onde vai pesquisar, "vai transformar letras em minusculas".

    useEffect(() => {
        if (searchText === '') {
            setList(testeProdutos);
        } else {
            setList(
                testeProdutos.filter(item => (item.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)
                 /*
                 //Mostra o mesmo resultado, porém vai o if e return do teste.   
                    {
                    if (item.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)
                    {
                        return true;
                    } else {
                        return false;
                    }
                }
                //Exemplo completo no vídeo: "Como FILTRAR e ORDENAR um FlatList no React Native"
                // Link do canal do Youtube: https://www.youtube.com/watch?v=Rv2eJK1iOTo
                // Canal do Youtube: Bonieky Lacerda.
                */
                )
            );
        }
    }, [searchText]);



    //[28.03.2024] Exemplo de filtrar produtos, falta testar se vai dar certo depois...
    // função para criar lista de produtos para pesquisar e filtrar...
    {/*
        const getProduct = async () => {
            setLoading(true);
            setList([]);              //inicia o carregamento da lista vazia. Tem que criar o '=useState([])' vazia tbm depois...

            let res = await Api.getProduct(); // vai pegar o resultado da lista de produtos da "Api" (não utilizo o Api) / do firebase (utilizo o firebase).
            console.log(res);                 // para ver no console.log os resultados desta função.
            if(res.error == '') {              // verificar, vai pegar o resultado, se der algum erro.
                
                setList(res.data)              // vai mostrar a lista de "resultados" dos produtos (que ficam dentro do "card" data)
            } else {                           // se não tiver erro nenhum
                alert("Erro: "+res.error )    //vai mostrar o alert
            }  
            
            setLoading(false);
        }


        //vai rodar "a telinha" (do console.log)
        useEffect(()=> {
            getProduct();    //aqui vai pegar a lista dos produtos que estão cadastrados
        }, []);

*/}

    {/* ============== Exemplo de lista com seção, de "SectionList" ================
    const handleItemPress = (item) => {
        console.log(item);
        Alert.alert('Você selecionou o item ${item}');
    };

    const Produto = ({ title }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => handleItemPress(title)}>
                <Text style={title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
   ========================================================================
    */}


    return (

        <View style={styles.container}>

            {/* //Formulário de pesquisa "SearchForm" é renderizado dentro da visualização da área segura "SafeAreaView"*/}
            <SafeAreaView>

                <BotaoVoltar />

                <View style={styles.botaoFiltrar}>
                    <View style={styles.filtrarArea}>
                        <TouchableOpacity>
                            <Icon name="funnel-outline" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={styles.txtFiltrar}>Filtrar por categoria</Text>
                    </View>
                </View>
                <View style={styles.botaoPesquisar}>
                    <View style={styles.inputArea}>
                        <Icon name="search" size={20} color="#000000" />
                        <TextInput
                            style={styles.input}
                            placeholder="Pesquisar / Pesquise aqui..."
                            placeholderTextColor="#000000"
                            value={searchText}
                            onChangeText={(t) => setSearchText(t)}
                            keyboardType="default" // Define esse teclado básico quando deseja manipular dados de um TextInput.
                        />
                    </View>
                </View>

                <View>
                    <Text style={{ marginBottom: 10, paddingHorizontal: 20, }}>
                        Aqui vai os produtos pesquisados e filtrados...
                    </Text>

                    <FlatList
                        data={list}
                        //  style={styles.list}
                        renderItem={({ item }) => <ListItem data={item} />}
                        keyExtractor={(item) => item.id}
                    />
                   
                </View>
                {/*
    // =========== Exemplo de Pesquisar, ==========================
    //==========="value" funcionando certinho com console.log conforme preenchido ================
              <SearchForm/> 
    //=====================================================================================
 */}


                {/* ============== Exemplo de lista com seção, de "SectionList" ================
                <SectionList
                    sections={testeFiltros}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Produto title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
        ========================================================================
    */}

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //para ficar tudo no meio da tela
        backgroundColor: '#FFFFFF',
    },

    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    },






    inputAreaVoltar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        backgroundColor: '#C4C4C4',
        elevation: 2,
        width: 40,
        height: 37,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 15,
    },
    botaoFiltrar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '100%',
        marginVertical: 5,
    },
    filtrarArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
    },
    txtFiltrar: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'black',
    },
    botaoPesquisar: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        justifyContent: 'center', //se utilizar "center" //justifica todos os textos e imagens ao centro da tela (exemplo: centralizado na lateral esquerda da tela)
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center', //centralizando todos os textos e imagens ao centro da tela (no meio da tela em geral)
        width: '98%',
        backgroundColor: '#C4C4C4',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input: {
        fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },
});