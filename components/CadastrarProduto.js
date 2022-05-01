import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Platform, Image } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'

//expo install expo-camera

export default function CadastrarProduto({navigation}){

    const [image, setImage] = useState(null); //accesssystemfile

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });      

        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

   const success = () => {
     if(Platform.OS === 'ios' || Platform.OS ==='Android'){
        Alert.alert("Idem adicionado com sucesso!");
     }else{
       alert("Item adicionado com sucesso!");
     }

     navigation.navigate("ObjetosTroca");

   }

  return(
    <View>
      

      <View style={styles.container}>

        <Text style={styles.title}>Cadastrar Produto</Text>

        <Text>Nome do Item</Text>
        <TextInput style={styles.input} placeholder='Nome do Item' />

         <Text>Descri&ccedil;&atilde;o</Text>
         <TextInput  multiline={true} style={styles.textarea} />

        <View>{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}</View>

         <View style={styles.row}>
         
          <TouchableOpacity style={styles.buttonA} onPress={pickImage}>
          <Text>Escolher do Dispositivo</Text>
           <Image source={require('../assets/folder.png')} style={styles.miniatura} resizeMode='contain' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonB} onPress={() => navigation.navigate("Camera")}>
          <Text>Tirar uma foto</Text>
          <Image source={require('../assets/camera-icon.png')} style={styles.miniatura} resizeMode='contain' />
          </TouchableOpacity>           

         </View>


         <View style={styles.col}>
         
          <TouchableOpacity style={styles.buttonC} onPress={success}><Text>Salvar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonD} onPress={navigation.navigate("menu")}><Text>Cancelar</Text></TouchableOpacity>       
         
         </View>

         

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: '#f3f3f3'
  },
  input:{
    padding: 10,
    backgroundColor: 'white',   
  },
  textarea:{
    padding: 10,
    backgroundColor: 'white',  
    height: 100
  },
  title:{
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Verdana',
    fontSize: 24,
    fontWeight: 'bold'
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  col:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20
  },
  buttonA:{    
    width: '49%',
    height: 100,
    backgroundColor: '#BF8B5E'
  },
  buttonB:{    
    width: '49%',
    height: 100,
    backgroundColor: '#8C5637'
  },
  buttonC:{    
    width: '100%',
    padding: 20,
    backgroundColor: '#A68444',
    marginBottom: 10,
    textAlign: 'center'
  },
  buttonD:{    
    width: '100%',
    padding: 20,
    backgroundColor: '#8C5637',
    marginBottom: 10,
    textAlign: 'center'
  },
  miniatura:{
    width: 50,
    height: 50,
    margin: 'auto'
  }

});