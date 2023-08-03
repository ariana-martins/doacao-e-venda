import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

//Função Home
//Tudo o que um componente de função retorna é processado como um elemento React.
// Exemplo, o Home componente renderizará um <Text> elemento.
const Cadastrar = () => {
    return (   
       
    // a partir daqui, quando clica em cima do botão muda um pouco de cor, fica mais fraco
       <TouchableOpacity onPress={()=>cadastro()}>     
            <Text style={estilos.textoCadastro}>Cadastra-se teste</Text>     
        </TouchableOpacity>
    );
};

//conteúdo de CSS
const estilos = StyleSheet.create({
    textoCadastro:{
        color: '#000000', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize:20, //tamanho do texto
        textDecorationLine: 'underline', //texto sublinhado
    },
});


//exporta componente.
export default Cadastrar;