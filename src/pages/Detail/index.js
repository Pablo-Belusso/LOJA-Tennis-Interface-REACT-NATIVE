import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';


export default function Detalhe({ navigation }) {
    
    navigation.setOptions({
        headerTitle: 'Nike DownShifter 10'
    })
    
    return (
        <ScrollView style={estilo.caixa}>
            <Image
            source={require('../../assets/detail.png')}
            style={estilo.image}
            resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[estilo.titulo, {fontSize: 24}]}> R$ 250,00 </Text>
                </View>

                <View opacity={0.5}>
                    <Text style={[estilo.titulo, {fontSize: 34}]}> Nike DownShifter 10</Text>
                </View>

                <View style={estilo.dotContainer}>
                    <Dot/>
                </View>

            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    caixa: {
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
   
    image:{
        width:'100%'
    }, 
    titulo:{
        fontFamily: 'Anton-Regular',
        paddingHorizontal:'2%'
    }
  });