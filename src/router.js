import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home' // importa os componentes
import Detalhe from './pages/Detail'  // importa os componentes

const Pilha = createNativeStackNavigator();

function Rotas() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="Casa"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Detail"
                    component={Detalhe}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 1}}>
                                <Icon
                                    name="shopping-cart"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )

                    }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Rotas;