import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const [sexo, setSexo] = useState("");
  let [total, setTotal] = useState(0);
  let [idade, setIdade] = useState("");
  let [caf, setCaf] = useState("");
  let [peso, setPeso] = useState("");
  let [altura, setAltura] = useState("");



  const sumValues = (idade, caf, peso, altura, sexo) => {
    setIdade(idade = parseFloat(idade))
    setCaf(caf = parseFloat(caf))
    setPeso(peso = parseFloat(peso))
    setAltura(altura = parseFloat(altura))


    if (sexo == "F") {
      let results = (354 - 6.91 * idade + caf * 9.36 * peso + 726 * altura)
      return results.toFixed(2).replace('.', ',');

    } else if (sexo == "M") {
      let results = (662 - 9.53 * idade + caf * 15.91 * peso + 539.6 * altura)
      return results.toFixed(2).replace('.', ',');

    } else {
      alert("Insira em maiúscula:[M] para masculino ou [F] para feminino! ")

    }

  };

  return (
    <SafeAreaView style={styles.body}>


      <View style={styles.header}>
        <Text style={styles.headerText}> EER </Text>
      </View>

      <View style={styles.container}>

        <Text>  DiGITE: (F ou M) PARA SELECIONAR O SEXO </Text>
        <TextInput
          style={styles.input}
          onChangeText={(sexo) => setSexo(sexo)}
          Text={sexo}
          keyboardType={"email-address"}
          textAlign={"center"}
          placeholder="Digite o sexo"
        />
        <Text>  IDADE:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(idade) => setIdade(idade)}
          value={`${idade}`}
          keyboardType={"numeric"}
          textAlign={"center"}
          placeholder="idade"
        />
        <Text>  CAF:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(caf) => setCaf(caf.replace(',', '.'))}
          value={`${caf}`}
          keyboardType={"numeric"}
          textAlign={"center"}
          placeholder="caf"
        />
        <Text>  PESO:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(peso) => setPeso(peso.replace(',', '.'))}
          value={`${peso}`}
          keyboardType={"numeric"}
          textAlign={"center"}
          placeholder="peso"
        />
        <Text>  ALTURA:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(altura) => setAltura(altura.replace(',', '.'))}
          value={`${altura}`}
          keyboardType={"numeric"}
          textAlign={"center"}
          placeholder="altura"
        />

        <View style={{ padding: 10 }}>
          <Text>RESULTADO: {total} Kcal </Text>
          <Button
            title={'CALCULAR'}
            onPress={() => {
              if (idade && caf && peso && altura != 0) {
                setTotal(sumValues(idade, caf, peso, altura, sexo))
              } else {
                alert("É necessário preencher todos os campos para realizar essa operação!")

              }

            }}
          />

          <View style={styles.limp}>
            <Button title={"LIMPAR"} 
            onPress={()=>{
              setIdade(idade = parseFloat(idade=0))
              setCaf(caf = parseFloat(caf=0))
              setPeso(peso = parseFloat(peso=0))
              setAltura(altura = parseFloat(altura=0))
              setTotal(total=0)

            }
            }
            
            
            />

           
          </View>
        </View>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
  input: {
    margin: 5,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,

  },

  header: {
    backgroundColor: "#41cf41",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,


  },
  headerText: {
    alignSelf: "center",
    padding: 15,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#F5FCFF",
    fontStyle: "italic"

  },
  body: {
    backgroundColor: '#F5FCFF'
  },
  limp:{
    marginTop:20,
  

  }


});