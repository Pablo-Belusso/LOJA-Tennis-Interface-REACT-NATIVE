import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot() {
 return (
   <View style={estilo.caixa}>
        
   </View>
  );
}

const estilo = StyleSheet.create({
    caixa:{
        width: Dimensions.get('window').width * 0.050, // essa conta é pra ele ficar responsivo
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        backgroundColor: 'red',
        marginHorizontal:'3%',
        elevation: 5
    }
});