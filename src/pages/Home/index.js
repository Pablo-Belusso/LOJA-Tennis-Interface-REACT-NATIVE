
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return (
        <View style={estilo.caixa} >
            <View style={estilo.header}>
                <Image
                source={require('../../assets/banner.png')}
                style={estilo.image}
                />

                <View>
                    <Text style={estilo.texto}>TÊNIS</Text>
                    <Text style={estilo.texto}>°</Text>
                    <Text style={estilo.texto}>MASCULINO</Text>

                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <Icon
                            name="bars"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>

                </View>
            </View>
            
        </View>
    );
}

// <Text style={{ marginTop: 200, fontSize: 40, fontFamily: 'Anton-Regular', color: 'red' }}> Teste</Text>

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
    }

  });