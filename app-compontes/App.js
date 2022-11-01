import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const App = () => {

  const [saldo, setSaldo] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Saido: {saldo} </Text>
       <Button
        title="ADICIONAR SALDO"
        onPress={() => { setSaldo(saldo + 50);}}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"#fff"
  },

  text:{
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold'
  }
  
});

export default App;