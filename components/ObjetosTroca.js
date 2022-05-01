import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Alert, Image } from 'react-native';
import { useState } from 'react';


export default function ObjetosTroca(){

    const [data, updateData] = useState( require("../assets/source.json") );
    const [index, setIndex] = useState(null);


    const tentativa = ( val  ) =>{       
        try{
          //{uri: myImg.uri}
          var a1 = {uri: val};
          return a1;
        }catch(Exception){
          var temp = require("../assets/logo.png");
          return temp;
        }
    }    



    const confirma = () => {
      if(Platform.OS === 'ios' || Platform.OS === 'android'){
        return ( Alert.alert(
              "Are your sure?",
              "Are you sure you want to remove this beautiful box?",
              [              
                {
                  text: "Yes",
                  onPress: () => {
                      var i = index.id;
                      delete data[i];                                 
                  },                  
                },            
                {
                  text: "No",
                },
              ]
            )
        );        
      }
      else{
        if(this.confirm("Tem certeza?")){
         // alert(index.id)
         var i = index.id;
         delete data[i];            
        }
      }
    }


    return (

       <SafeAreaView style={styles.container} >
          <Text style={styles.title}>Meus objetos de Troca</Text>
          
          <View>
            {
              data.map( (item) => (
                <View style={styles.box}>
                <View style={styles.row}>
                  <View style={styles.col}>                                      
                      
                    <Image source={ tentativa(item.imagem ) } style={styles.logo} />
                    <TouchableOpacity style={styles.button1} onPressIn={() => setIndex(item)} onPressOut={confirma}><Text>Excluir</Text></TouchableOpacity>
                  </View>

                  <View style={styles.col}>
                  <Text style={styles.content} >{item.titulo}</Text>
                  <Text style={styles.content}>{item.descricao}</Text>
                  </View>                
                </View>          
                </View>
              ))
            }

            </View>
       </SafeAreaView>

    );
  
}

const styles = StyleSheet.create({
    container:{
      margin: 'auto',
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
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden'
    },
    col:{
      display: 'flex',
      flexDirection: 'column',
   },
    content:{
      width: '80%',
      paddingLeft: 10       
    },
     button1:{
      padding: 10,
      textAlign: 'center',
      backgroundColor: '#A68444',
      color: 'white',
      fontFamily: 'Verdana',
      marginBottom: 10
    },
    box:{
        backgroundColor: '#E5E5E5',
        padding: 10,
        textAlign: 'center',
        marginBottom: 10
    },
    logo: {
      width: '100%',
      height: 60,
      marginBottom: 5
    }
  
  });