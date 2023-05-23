import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../shoes';
import { useNavigation } from '@react-navigation/native'; // Serve para ativar a naveção do App

export default function Footer() {

    navegação = useNavigation();
    
 return (
   <View>
        <Text style={estilo.titulo}> VOCÊ TAMBÉM PODE GOSTAR  </Text>

        <View style={{flexDirection:'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/1.png')} cost="R$ 199,00" onClick={()=> navegação.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>

                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/3.png')} cost="R$ 159,00" onClick={()=> alert('Clicou no Tennis Rapá')}>
                        Adidas Classic Red
                    </Shoes>
                </View>

                <View style={{marginHorizontal: 10}}> 
                    <Shoes img={require('../../assets/4.png')} cost="R$ 300,00" onClick={()=> alert('Clicou no Tennis Rapá')}>
                        Adidas Exército
                    </Shoes>
                </View> 

            </ScrollView>
        </View>
   </View>
  );
}

const estilo = StyleSheet.create({

    titulo:{
        fontSize: 24,
        fontFamily: 'Anton-Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }

});