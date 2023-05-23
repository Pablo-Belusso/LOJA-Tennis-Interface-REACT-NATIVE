import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function Dot(props) {
 return (
   <TouchableOpacity style={[estilo.caixa, {backgroundColor: props.color}]}>
        
   </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
    caixa:{
        width: Dimensions.get('window').width * 0.050, // essa conta é pra ele ficar responsivo
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal:'3%',
        elevation: 5
    }
});