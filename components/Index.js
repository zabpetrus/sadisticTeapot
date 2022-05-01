import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Cadastrar from './Cadastrar';
import Login from './Login';
import Menu from './Menu';
import CadastrarProduto from './CadastrarProduto';
import ObjetosTroca from './ObjetosTroca';
import Procurar from './Procurar';
import SolicitacoesFeitas from './SolicitacoesFeitas';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
   <View style={styles.container}>
      <View style={styles.box}>
        <View tyle={styles.center} >
         <Image style={styles.logo} source={require('../assets/logo.png')} />
       </View>
       <Pressable style={styles.button1} onPress={() => navigation.navigate('Cadastrar')}><Text  style={styles.center}>Cadastrar</Text></Pressable>   
       <Pressable style={styles.button2} onPress={() => navigation.navigate('Login')}><Text style={styles.center}>Entrar</Text></Pressable>  
      </View>       
    </View>
  );
}

export default function Index({navigation}){

  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />   
        <Stack.Screen name="Cadastrar" component={Cadastrar} />  
        <Stack.Screen name="Login" component={Login} />   
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="CadastrarProduto" component={CadastrarProduto}  />    
        <Stack.Screen name="ObjetosTroca" component={ObjetosTroca} />
        <Stack.Screen name="Procurar" component={Procurar} />
        <Stack.Screen name="SolicitacoesFeitas" component={SolicitacoesFeitas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F2E5D5",
    height: '100%' 
  },
  box:{
   padding: 30,
   marginTop: '25%',  
  },
  button1:{
      backgroundColor: '#8C5637',   
      textAlign: 'center',
      color: 'white' ,
      padding: 20,
      marginTop: 5
   },
  button2:{
      backgroundColor: '#BF8B5E',      
      textAlign: 'center',
      color: 'white',
      padding: 20,
      marginTop: 5
  },
  logo: {
    height: 128,
    width: 128,   
    marginLeft: '25%'
  },
  center:{
    textAlign: 'center'
  }
});