
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Shoes from '../../component/shoes';

export default function Home() {
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
                    <Shoes/>
                    <Shoes/>
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