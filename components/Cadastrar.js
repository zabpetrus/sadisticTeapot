import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Platform, Alert } from 'react-native';

export default function Cadastrar({navigation}){

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const donut = () => {
    {Platform.OS === 'ios' || Platform.OS === 'android' ?  Alert.alert(
    'Sucesso',
    'Cadastro feito com sucesso! Agora você será redirecionado!',
    [
      {
        text: 'Continuar!',
        onPress: () => navigation.navigate('Menu'),
        style: 'cancel',
      },
    ],
    {
      cancelable: false,
      onDismiss: () =>
        //Alert.alert('This alert was dismissed by tapping outside of the alert dialog.'),
        navigation.navigate('Menu')
    }
  )
   : 
   alert('Cadastro feito com sucesso! Agora você será redirecionado')
   navigation.navigate('Menu')
   
   }
    
    
    };


  return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.row}>
              <View>
                  <View style={styles.box}>
                      <Text style={styles.title}>Cadastrar</Text> 

                      <View style={styles.formControl} >                      
                        <Text  style={styles.label}>Nome</Text>
                        <TextInput 
                          style={styles.input}
                          onChangeText={onChangeText}
                          value={text}
                          placeholder= "Nome"
                        />              
                      </View>

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
                    <Text  style={styles.label}>Telefone</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Telefone celular"
                        keyboardType="numeric"
                      />
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Senha</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Senha"
                          keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Confirma&ccedil;&atilde;o de senha</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Repetir senha"
                          keyboardType="numeric"
                        />
                    </View>
                  </View>                          

              </View>

              <View>
                 <View style={styles.box2} >           
                 
                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Endere&ccedil;o</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Rua Fulano de Tal, 36"
                      />              
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Bairro</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Jardim Alvorada"
                      />              
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Cidade</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Cidade"
                      />              
                    </View>

                    <Pressable style={styles.button1} onPress={donut} >
                      <Text>Cadastrar</Text>                   
                    </Pressable>                  
                 
                 </View>        

              </View>
         
          </View>  
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#BF8B5E", 
    padding: 20,
  },
  row:{
    backgroundColor: '#F2E5D5', 
    marginBottom: 20   
  },
 
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  box:{
    padding: 5
  },
  box2:{
   padding: 5,
  },
  input: {
     padding: 10,
    backgroundColor: 'white',   
  },
  label:{
    margin: 5
  },
  formControl:{
    padding: 10
  },
  button1:{ 
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
   fontFamily: 'Verdana',
   margin: 10,
   padding: 20
  }

});