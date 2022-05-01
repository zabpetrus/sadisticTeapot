import { View, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as React from 'react';

export default function Menu({navigation}){

  return (
      <SafeAreaView style={styles.container}>
        
        <ScrollView>

        <View style={styles.row}>

          <Text style={styles.title}>Menu</Text> 

           <Pressable style={styles.button1} onPress={() => navigation.navigate('CadastrarProduto')} >
              <Text style={styles.center}>Cadastrar Produto</Text>                  
           </Pressable> 

            <Pressable style={styles.button1} onPress={() => navigation.navigate('ObjetosTroca')} >
             <Text style={styles.center}>Meus objetos de troca</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('Procurar')} >
              <Text style={styles.center}>Procurar objetos</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('SolicitacoesRecebidas')} >
              <Text style={styles.center}>Solicita&ccedil;&otilde;es recebidas</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('SolicitacoesFeitas')} >
              <Text style={styles.center}>Solicita&ccedil;&otilde;es Feitas</Text>                   
            </Pressable> 

            </View>  
        </ScrollView>
            
      </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3',    
    height: '100%',
  }, 
  title:{
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  row:{
    marginTop: '25%',
    marginLeft: 30,
    marginRight: 30
  },
   button1:{
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
    fontFamily: 'Verdana',
    marginBottom: 10
  },
  center:{
    textAlign: 'center'
  }

});