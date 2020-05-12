import React, { Component } from 'react';
import {Text, View, ScrollView,StyleSheet,TouchableHighlight } from 'react-native';
import {ButtonGroup} from 'react-native-elements';


const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    flex:1,
    backgroundColor:'rgba(0,0,0,0.4)',
    zIndex : 1,
    position: 'absolute'
  },
  card:{
    marginTop:'50%',
    marginLeft:'10%',
    width:'80%',
    backgroundColor:'#eeeeee',
    borderRadius:10,
    elevation:10,
    zIndex : 2,
    position: 'absolute'
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:24,
    marginVertical:25,
  }
});

/**
   * @author Juan Pablo Alvarado
   * clase que corresponde a la vista del detalle del paquete
   */
export default class DetailView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: this.props.statusIndex
    }
  }

  /**
   * @author Juan Pablo Alvarado
   * Se ejecuta para actualizar un estado usando un índice del botón
   */
  updateIndex = (selectedIndex) => {
    let status = '';
    switch (selectedIndex) {
      case 0: status = "entregado"
        break;
      case 1: status = "pendiente"
          break;
      case 2: status = "fallido"
        break;
      case 3: status = "devuelto"
        break;
      default:
        status = "pendiente"
    };
    this.props.onChange(status);

    this.setState({selectedIndex})
  }


  render(){
    const buttons = ['Entregado', 'Pediente', 'Fallido', 'Devuelto'];
    const { selectedIndex } = this.state;
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onBack}>
        <TouchableHighlight style={styles.card}>
        <View>
        <Text style={styles.title}>Paquete: {this.props.title}</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        </View>

        </TouchableHighlight>
      </TouchableHighlight>
    );
  }
}
