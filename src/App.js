
import React from 'react';
import { StyleSheet,  View, ScrollView} from 'react-native';
import Vet from './Vet'
export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box}>

           <ScrollView style={styles.box2}> 
             <Vet/>
           </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#fff',
    width:"100%",
    height:"100%",
    alignSelf: "center"
  },
  box: {
    flex: 1,
    height: "95%",
    width: "95%",
    alignSelf: "center",
   


  },
  
  box2: {
    height: "100%",
    width: "100%",
    backgroundColor: '#fff',


  },
  


});
