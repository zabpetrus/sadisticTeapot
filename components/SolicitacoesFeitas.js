import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function SolicitacoesFeitas(){

  return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Minhas solicita&ccedil;&otilde;es feitas</Text>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container:{
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center'
  }


});