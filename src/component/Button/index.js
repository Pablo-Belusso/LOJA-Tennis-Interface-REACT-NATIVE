import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={estilo.caixa}>
        <TouchableOpacity style={estilo.botaoCaixa}>
            <Text style={estilo.titulo}>COMPRAR</Text>
        </TouchableOpacity>
   </View>
  );
}

const estilo = StyleSheet.create({
    caixa: {
        justifyContent: 'center', // Alinha na Vertical
        alignItems: 'center', // Alinha na Horizontal
    },
    botaoCaixa:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center', // Alinha na Vertical
        alignItems: 'center', // Alinha na Horizontal
    },
    titulo:{
        color: '#FFF',
        fontSize: 17
    }
});