import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

// Função para filtrar uma descrição de seja acima de 23 caracteres:
function filtroDescriçaoGrande (descriçao){ 
    if (descriçao.length < 23){ // "length" avalia o comprimento da descrição
        return descriçao;
    }
    return `${descriçao.substring(0, 20)}...`; //"substring" retorna só os 20 primeiros 
                                               // caracteres da descrição
}        


 return (

    // TouchableOpacity = É a embalagem onde irá ficar as imagens, descrições e preços. Todos sensíveis ao toque.
   <TouchableOpacity style={estilos.caixa} onPress={props.onClick}> 
        <Image
            source={props.img}
            style={estilos.calçadoImagem}
        />

        <Text style={estilos.calçadoTexto}>
            {filtroDescriçaoGrande(props.children)} 
        </Text>

        <View opacity={0.4}>
        <Text style={estilos.calçadoTexto}> {props.cost} </Text>
        </View>
   </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({

    caixa:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent: 'center'
    },
    calçadoImagem:{
        width: 175,
        height: 175
    },
    calçadoTexto:{
        fontSize: 16,
        fontWeight: 'bold'     
    }

})