import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes() {
 return (
   <TouchableOpacity style={estilos.caixa}>
        <Image
            source={require('../../assets/1.png')}
            style={estilos.calçadoImagem}
        />

        <Text style={estilos.calçadoTexto}>
            Nike Box 10
        </Text>

        <View opacity={0.4}>
        <Text style={estilos.calçadoTexto}>R$ 199,00</Text>
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