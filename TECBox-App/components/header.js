import React from 'react';
import {Image, Text, View, ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container:{
    paddingTop:24,
    paddingBottom:8,
    paddingLeft:16,
    backgroundColor:'#6e88a1',
    width:'100%',
    elevation:2,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  title:{
    color:'#222831',
    fontSize:28,
    fontWeight:'bold',
  },
  action:{
    marginRight:10,
    marginTop:10,
    width:36,
    height:36,
    backgroundColor:'#194056',
    borderRadius:100,
    justifyContent:'center',
  }
});


const header = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.children}</Text>
    <View style={styles.action}>
      <Icon onPress={props.action} name='exit-to-app' color='#88aabb' />
    </View>
  </View>
);
export default header;
