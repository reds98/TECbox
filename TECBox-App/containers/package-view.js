import React, { Component } from 'react';
import {Text, View, ScrollView,StyleSheet,SafeAreaView } from 'react-native';
import Header from '../components/header.js';
import ListItem from '../components/list-item.js';
import DetailView from './detail-view.js';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eeeeee'
  }
});

/**
   * @author Juan Pablo Alvarado
   * clase que corresponde a la vista de todos los paquetes
   */
export default class PackageView extends Component {
  constructor(props) {
    super(props);
    this.state = {items:null,selectedItem: null,statusIndex:0,itemIndex:0};
  }

  /**
   * @author Juan Pablo Alvarado
   * Ejecuta un request para cargar los paquetes
   */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("Carga exitosa");
      this.setState({items:[
        {"nombre":"F1","estado":"pendiente"},
        {"nombre":"F2","estado":"entregado"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F4","estado":"devuelto"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F3","estado":"fallido"},
        ]});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  /**
   * @author Juan Pablo Alvarado
   * Recibe un item y lo guarda como seleccionado en el estado
   */
  selectItem = item => {
    let statusIndex = -1;
    switch (item["estado"]) {
      case "entregado": statusIndex = 0
        break;
      case "pendiente": statusIndex = 1
          break;
      case "fallido": statusIndex = 2
        break;
      case "devuelto": statusIndex = 3
        break;
      default:
        statusIndex = 3
    };
    let itemIndex = this.state.items.findIndex(searchItem => searchItem === item);
    this.setState({selectedItem: item,statusIndex:statusIndex,itemIndex:itemIndex});
  }

  /**
   * @author Juan Pablo Alvarado
   * Se ejecuta cuando se deja de selccionar el item
   */
  onBack = () => {
    this.setState({selectedItem: null});
  }

  /**
   * @author Juan Pablo Alvarado
   * Se ejecuta para actualizar el estado de un item
   */
  onChange = (newStatus) => {
    let items =[...this.state.items];
    items[this.state.itemIndex]['estado'] =  newStatus;
    console.log(items);
    this.setState({items:items});
  }

  render(){
    if (!this.state.items){
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Cargando paquetes...</Text>
        </View>
      );
    }

    let list = this.state.items.map((item,i)=>(
    <ListItem key={i} onPress={()=>{this.selectItem(item)}} name={item["nombre"]} status={item["estado"]}/>));
    list.unshift(<ListItem key="title" name="Nombre" status="Estado" title/>);


    let details = null;

    if (this.state.selectedItem) {
      details = (
        <DetailView onChange = {this.onChange} onBack={this.onBack} title={this.state.selectedItem["nombre"]} statusIndex={this.state.statusIndex}></DetailView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header action={this.props.onClose}>Lista de paquetes</Header>
        {details}
        <ScrollView style={{width:'100%'}}>{list}</ScrollView>
      </SafeAreaView>
    );
  }
}
