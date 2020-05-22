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
    fontSize:24,
    borderColor:'#393e46',
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:32,
    paddingVertical:8,
  }
});


/**
   * @author Juan Pablo Alvarado
   * clase que corresponde a la vista del logeo
   */
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  /**
   * @author Juan Pablo Alvarado
   * Se ejecuta para validar un usuario
   */
  verify = () => {
     if(this.state.text==="123"){
       this.props.onValidate();
     }
     else{
       alert("Denegado");
     }
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../logo.png')} style={{width: 300, height: 200, margin:50}} />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Clave de acceso"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress = {this.verify}
        >
        Verificar
        </Button>
      </View>
    );
  }
};
