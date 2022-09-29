import {React, useState} from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet, TextInput} from 'react-native';

export default function App() {
  
  const [cep, setCep] = useState('');
  const [Lougradouro, setLougradouro] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Localidade, setLocalidade] = useState('');
  const [Uf, setUF] = useState('');

  async function chamarCep(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let req = await fetch(url);
    let res = await req.json();
    
    setBairro(res.bairro)
    setLocalidade(res.localidade)
    setComplemento(res.complemento)
    setLougradouro(res.lougradouro)
    setUF(res.uf)
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
        source={require('./assets/th.jpg')}/>
      </View>
      <View>
        <Text style={styles.title}>Pegando campos de um endereço somente usando CEP</Text>
      </View>
        <TextInput style={styles.input} placeholder='Cep: 00000-00' 
        onChangeText={text=>{
          if(text.length == 8)
          chamarCep(text);
        }

        }
        keyboardType='number-pad'/>
        <TextInput style={styles.input} value={Lougradouro} placeholder='Lougradouro: Avenida Brasil'/>
        <TextInput style={styles.input} value={Complemento}  placeholder='Complemento: Lado-Impar'/>
        <TextInput style={styles.input} value={Bairro} placeholder='Bairro: Centro'/>
        <TextInput style={styles.input} value={Localidade} placeholder='Localidade: Sao Paulo'/>
        <TextInput style={styles.input} value={Uf} placeholder='UF: SP'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black', 
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 25
  },
  title: {
    color: 'white',
    fontSize: 23, 
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 4,
    marginTop: 15,
  }

})