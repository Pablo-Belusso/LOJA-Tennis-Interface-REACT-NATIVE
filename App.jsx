import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import Rotas from './src/router'; // Importa a função Rotas do arquivo "router.js"

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={true}
      />
      <Rotas />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});


