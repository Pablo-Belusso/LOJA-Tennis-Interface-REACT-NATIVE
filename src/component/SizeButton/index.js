import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SizeButton(props) {
 return (
   <TouchableOpacity style={[estilo.caixa, { backgroundColor: props.bgColor || '#FFF' } ]}>
        <Text style={[estilo.texto, { color: props.color || '#c9c'} ]}> 
            {props.children}
        </Text>
   </TouchableOpacity>
  );
}

const estilo = StyleSheet.create ({
    caixa:{
        width: 150,
        height: 50,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        borderRadius: 4,
        justifyContent: 'center', // Alinha na Vertical
        alignItems: 'center', // Alinha na Horizontal
        marginHorizontal: 10

    },
    texto:{
        fontSize: 18,
        color: '#FFF',
        //textAlign: 'center',
        //textAlignVertical: 'center'
    }
});