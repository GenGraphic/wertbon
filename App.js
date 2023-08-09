import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {FictionFloatingLabelInput} from "fiction-expo-floating-label";

export default function App() {
  const [name, setName] = useState('');
  const [firma, setFirma] = useState('');
  const [pin, setPIN] = useState('');
  const [status, setStatus] = useState('');

  //send data to the DB
  const sendData = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('firma', firma);
    formData.append('PIN', pin);

    fetch('', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data.success === true) {
        setStatus(data.message);
        setFirma('');
        setName('');
        setPIN('');
      } else {
        alert('Something went wrong with sending your Data. Please try again later')
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <LinearGradient colors={['#212529', '#343A40', '#495057']} style={styles.body}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar style="light" />

          <View style={styles.logoCont}>
            <Image source={require('./assets/logo.png')} style={styles.logo}/>
            <View>
              <Text style={styles.title}>WERTBON</Text>
              <Text style={styles.slogan}>Your <Text style={{color:'#00ADB5'}}>Slogan</Text> can go here</Text>
            </View>
          </View>

          <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <FictionFloatingLabelInput
                label="Name"
                value={name} // just a state variable
                labelFocusedTop={-0} // Y position of label when focused
                labelUnFocusedTop={10} // Y position of label when un-focused
                onChangeText={(t)=>setName(t)} // setting state variable
                labelColorUnFocused={"rgba(255, 255, 255, 0.7)"} // label color when un-focused
                labelColorFocused={"rgba(255, 255, 255, 0.7)"} // label color when focused
                containerStyle={{backgroundColor: 'transparent', borderRadius: 10, borderWidth:2, borderColor: '#FFF'}} // container style
                focusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when focused
                unFocusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when un-focused
                textInputStyle={{color: '#FFF'}}
            />
            <FictionFloatingLabelInput
                label="Firma"
                value={firma} // just a state variable
                labelFocusedTop={-0} // Y position of label when focused
                labelUnFocusedTop={10} // Y position of label when un-focused
                onChangeText={(t)=>setFirma(t)} // setting state variable
                labelColorUnFocused={"rgba(255, 255, 255, 0.7)"} // label color when un-focused
                labelColorFocused={"rgba(255, 255, 255, 0.7)"} // label color when focused
                containerStyle={{backgroundColor: 'transparent', borderRadius: 10, borderWidth:2, borderColor: '#FFF'}} // container style
                focusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when focused
                unFocusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when un-focused
                textInputStyle={{color: '#FFF'}}
            />
            <FictionFloatingLabelInput
                label="PIN"
                value={pin} // just a state variable
                labelFocusedTop={-0} // Y position of label when focused
                labelUnFocusedTop={10} // Y position of label when un-focused
                onChangeText={(t)=>setPIN(t)} // setting state variable
                labelColorUnFocused={"rgba(255, 255, 255, 0.7)"} // label color when un-focused
                labelColorFocused={"rgba(255, 255, 255, 0.7)"} // label color when focused
                containerStyle={{backgroundColor: 'transparent', borderRadius: 10, borderWidth:2, borderColor: '#FFF', shadow: 'none'}} // container style
                focusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when focused
                unFocusedContainerStyle={{borderColor: '#FFF', borderWidth: 2}} // container style when un-focused
                textInputStyle={{color: '#FFF'}}
            />

            <Text>{status}</Text>

            <TouchableOpacity style={styles.sendBtn} onPress={sendData}>
              <Image source={require('./assets/send.png')} style={styles.icon}/>
              <Text style={styles.textBtn}>SENDEN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </SafeAreaView>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  logoCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold'
  },
  slogan: {
    color: '#FFF',
    fontSize: 18
  },
  icon: {
    width: 25,
    height: 25
  },
  textBtn: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sendBtn: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#00ADB5',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFF'
  },
  form: {
    flex: 1,
    justifyContent: 'center'
  }
});
