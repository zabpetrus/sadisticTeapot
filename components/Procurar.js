import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image, ScrollView, Modal, Pressable, Platform } from 'react-native';
import { useState, useEffect } from 'react';

export default function Procurar(){

    const [data, updateData] = useState( require("../assets/source.json") );
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imagens, setImagens] = useState('');
    const [descricao, setDescricao] = useState('');
    const [solicitante, setSolicitante] = useState('');
    const [termo, setTermo] = useState('');

    const seeMore = ( item ) => {

      setId(item.id);
      setTitulo(item.titulo);
      setImagens(item.imagem);
      setDescricao(item.descricao);
      setSolicitante(item.solicitante);
      setModalVisible(true);       
    }

    const procurar = () =>{

      if(termo != ''){
        if(Platform.OS == 'android' || Platform.OS == 'ios')
        {
          Alert.alert("Item procurado encontrado!");
        }
        else{
          alert("Item procurado encontrado!")
        }
      }

    }
 
    
    return(
    <SafeAreaView style={styles.container}>
        
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.modalcontainer}>
          <Text style={styles.title}>Detalhamento do Objeto</Text>
          <View style={styles.modalView}>
            <Text style={styles.subtitle}>{id} -{titulo}</Text>
            <Text>{descricao}</Text>
            <Image source={{ uri: imagens } } style={styles.logomodal} />

            <Pressable
              style={styles.button2}
              onPress={() => Alert.alert( solicitante + " foi chamado com sucesso!")} >
              <Text style={styles.center}>Confirmar e chamar {solicitante}</Text>
            </Pressable>

             <Pressable
              style={styles.button1}
              onPress={() => setModalVisible(!modalVisible)} >
              <Text style={styles.center}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <View style={styles.box}>
            <Text style={styles.title}>Procurar</Text>
            <Text style={{marginBottom : 10}}>Escreva um termo que ajudaremos achar o que você procura:</Text>
            <TextInput style={styles.input} onChangeText={setTermo} placeholder='Procurar'></TextInput>
            <TouchableOpacity style={styles.button0} onPress={procurar}><Text>Procurar</Text></TouchableOpacity>
        </View>


        <ScrollView>
            {
              data.map( (item) => (

               <View style={styles.row}>
                  <View style={styles.col}>  
                    <Image source={{ uri: item.imagem } } style={styles.logo} />
                    <TouchableOpacity style={styles.button1}  onPress={() => seeMore(item)} >
                        <Text style={styles.center}>Ver detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} ><Text style={styles.center}>Trocar</Text></TouchableOpacity>
                  </View>
                              
                </View>    
              ))
            }

        </ScrollView>


    </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
    container:{
      margin: 'auto',
      backgroundColor: '#ffffff',    
      height: '100%',
    }, 
    modalcontainer:{
      marginTop: 'auto',
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginBottom: 'auto',      
       
    },
    modalView:{
      backgroundColor: 'white',
      padding: 20
    },
    title:{
      fontFamily: 'Tahoma',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
    },
    subtitle:{
      fontWeight: 'bold',
      fontSize: 16
    },
    row:{
      display: 'flex',
      flexDirection: 'row'     
    },
    col:{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#C4C4C4' ,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 'auto',
      marginRight: 'auto'
         
   },   
    button0:{
      backgroundColor: '#8C5637',
      textAlign: "center",
      padding: 10,
      marginTop: 10
    },
    button1:{
      padding: 10,
      textAlign: 'center',
      backgroundColor: '#E5E5E5',
      color: 'white',
      fontFamily: 'Verdana',
     marginBottom: 10
    },
    button2:{
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#8C5637',
        color: 'white',
        fontFamily: 'Verdana',
        
      },
    box:{
      backgroundColor: '#E5E5E5',
      padding: 20,
      marginBottom: 20
    },
    logo: {
      width: 300,
      height: 300,
      marginBottom: 10
    },
     logomodal: {
      width: 300,
      height: 300,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    input:{
        backgroundColor: 'white',
        padding: 10
    },
    center:{
      textAlign: 'center'
    }
  
  });