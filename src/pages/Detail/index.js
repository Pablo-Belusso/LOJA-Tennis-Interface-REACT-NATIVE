import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detalhe({ navigation }) {
    
    navigation.setOptions({
        headerTitle: 'Nike DownShifter 10'
    })
    
    return (
        <ScrollView style={estilo.caixa}>
            <Image
            source={require('../../assets/detail_2.png')}
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
                    <Dot color="#2379f4"/>
                    <Dot color="#fb6e53"/>
                    <Dot color="#ddd"/>
                    <Dot color="#000"/>
                </View>

                <View style={{flexDirection:'row', width:'100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor='#17181a' color='#FFF'>38</SizeButton>
                        <SizeButton>40</SizeButton>
                        <SizeButton>42</SizeButton>
                        <SizeButton>44</SizeButton>
                    </ScrollView>
                </View>


                <View style={estilo.conteudoTexto}>

                    <Text style={estilo.conteudoTitulo}>
                    Nike DownShifter 10
                    </Text>

                    <Text style={estilo.conteudoTexto}>
                    O Tênis Nike Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável.
                    </Text>

                    <Text style={estilo.listaTexto}>
                        - Categoria: amortecimento
                    </Text>

                    <Text style={estilo.listaTexto}>
                        - Material: Mesh
                    </Text>

                </View>

                <Button/>

                <View style={estilo.linha} />

                <Footer/>

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
        width:'100%',
  
    }, 
    titulo:{
        fontFamily: 'Anton-Regular',
        paddingHorizontal:'2%'
    },
    dotContainer:{
        flexDirection: 'row',
        marginVertical: '4%'
    },
    conteudoTexto:{
        fontSize: 18,
        lineHeight: 25, // espaço entre linhas
        marginVertical: '2%',   
        paddingHorizontal:'2%'    
    },
    conteudoTitulo:{
        fontSize: 22,
        marginVertical: '2%',
        fontWeight: 'bold'
    },
    listaTexto:{
        fontSize: 16,
        lineHeight: 25, // espaço entre linhas
    },
    linha:{
        borderWidth: 1,
        borderBottomColor: 'black',
        marginVertical: '2%'
    }
  });