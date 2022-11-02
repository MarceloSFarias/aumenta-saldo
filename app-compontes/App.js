import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';

import Saldo from './components/Saldo';
import Lancamento from './components/lancamento';
import SaldoPovider from './context/ContaContext';

const App = () => {

  return (
    <SaldoPovider>
      <View style={styles.container}>

        <Saldo />

        <Lancamento Credito />

        <Lancamento />

      </View>
    </SaldoPovider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
});

export default App;