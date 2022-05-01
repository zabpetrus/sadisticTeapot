import * as React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function Login({navigation}){

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

//Aqui entrara o codigo de validacao e acesso ao banco de dados
  const login = () =>{
      if(text == 'admin' && number == '123456'){
        Alert.alert("Login Ok! Agora você será redirecionado!");
         navigation.navigate('Menu');
      }
      else{
        Alert.alert("Acesso negado");
      }
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Login</Text> 
               <View style={styles.formControl} >
                      <Text  style={styles.label}>Email</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Email"
                      />              
              </View>

              <View style={styles.formControl} >
                      <Text style={styles.label}>Senha</Text>
                        <TextInput
                          style={styles.input}
                          secureTextEntry={true}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Senha"
                          keyboardType="numeric"
                        />
              </View>

               <Pressable style={styles.button1} onPress={login} >
                      <Text style={styles.center}>Entrar</Text>                  
               </Pressable>  
   
        
        </View>


        
      </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#BF8B5E'
  },
  title:{
    fontFamily: 'Tahoma',   
    fontSize: 30,
    textAlign: 'center'
  },
  box:{    
    backgroundColor: '#F2E5D5',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 30,
    marginRight: 30,
    padding: 20   
  },

  input: { 
    marginTop: 5,  
    padding: 10,
    backgroundColor: 'white',
   
  },
  label:{
   marginTop: 10
  },
   button1:{    
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
    fontFamily: 'Verdana',
    padding: 20,
    marginTop: 10
  },
  center:{
    textAlign: 'center',
  }

});