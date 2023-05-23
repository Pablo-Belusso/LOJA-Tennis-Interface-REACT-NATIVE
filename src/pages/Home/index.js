
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Shoes from '../../component/shoes';
import { useNavigation } from '@react-navigation/native'; // Serve para ativar a naveção do App

export default function Home() {

    const navegação = useNavigation();
    
    return ( 
        <View style={estilo.caixa} > 
            <View style={estilo.header}>
                <Image
                source={require('../../assets/banner.png')}
                style={estilo.image}
                />

                <View style={estilo.textoCaixa}> 
                    <Text style={[estilo.texto, { color:'black'}]}>TÊNIS</Text> 
                    <Text style={[estilo.texto, { color: '#CECECF'}]}>°</Text>
                    <Text style={[estilo.texto, { color: '#CECECF'}]}>MASCULINO</Text>

                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <Icon
                            name="bars"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={estilo.linha}/>


            <ScrollView>
                <Text style={estilo.texto}>LANÇAMENTOS</Text>

                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    
                    <Shoes img={require('../../assets/2.png')} cost="R$ 250,00" onClick={()=> navegação.navigate('Detail')}>
                        Nike DownShifter 10
                    </Shoes>  

                    <Shoes img={require('../../assets/1.png')} cost="R$ 199,00" onClick={()=> alert('Não temos tela para esse produto')}>
                        Nike Air Max Dia
                    </Shoes>

                </View>

                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <Shoes img={require('../../assets/3.png')} cost="R$ 159,00" onClick={()=> alert('Não temos tela para esse produto')}>
                        Adidas Classic Red
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost="R$ 300,00" onClick={()=> alert('Não temos tela para esse produto')}>
                        Adidas Exército
                    </Shoes>
                </View>

                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <Shoes img={require('../../assets/5.png')} cost="R$ 185,00" onClick={()=> alert('Não temos tela para esse produto')}>
                        Adidas Sports
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost="R$ 230,00" onClick={()=> alert('Não temos tela para esse produto')}>
                        Adidas Sport Casual
                    </Shoes>
                </View>

            </ScrollView>
            
        </View>
    );
}


const estilo = StyleSheet.create({
    caixa: {
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
    header:{
        marginBottom: 8
    },
    image:{
        width:'100%'
    }, 
    textoCaixa:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    texto:{
        fontFamily: 'Anton-Regular',
        fontSize: 26,
        marginHorizontal:'1%',
        
    },
    linha:{
        borderBottomColor:'#d8d8d8',
        borderBottomWidth: 2
    }

  });