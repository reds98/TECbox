import React, { Component } from 'react';
import {Image, Text, TextInput, View,StyleSheet } from 'react-native';
import Button from '../components/button.js';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eeeeee',
    alignItems:'center'
  },
  input:{
    fontSize:20,
    textAlign:"center",
    borderColor:'#393e46',
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:32,
    paddingVertical:8,
    width:'80%'
  }
});


/**
   * @author Juan Pablo Alvarado
   * clase que corresponde a la vista del logeo
   */
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverIp: '',
      user: '',
      password: ''
    };
  }

  /**
   * @author Juan Pablo Alvarado
   * Se ejecuta para validar un usuario usando un POST al servidor con los datos: usuario y contraseña
   */
  onVerify = () => {
    fetch(`http://${this.state.serverIp}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password,
      })
    })
    .then((responseJson) => responseJson.json())
    .then((response) => {
      if (response.validation){
        this.props.onValidate(this.state.serverIp);
      }
      else{
        alert("Acceso denegado")
      }
    })
    .catch(error=>{alert(error)});
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../logo.png')} style={{width: 300, height: 200, margin:50}} />
        <TextInput
          style={styles.input}
          placeholder="Dirección del servidor"
          onChangeText={(serverIp) => this.setState({serverIp:serverIp})}
          value={this.state.serverIp}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(user) => this.setState({user:user})}
          value={this.state.user}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Clave de acceso"
          onChangeText={(password) => this.setState({password:password})}
          value={this.state.password}
        />
        <Button
          onPress = {this.onVerify}
        >
        Verificar
        </Button>
      </View>
    );
  }
};
