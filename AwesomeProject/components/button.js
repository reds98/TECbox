import React from 'react';
import {Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button:{
    color:'#000000',
    fontWeight:'bold',
    fontSize:24,
    backgroundColor:'#6e88a1',
    marginTop:16,
    borderRadius:5,
    paddingHorizontal:16,
    paddingVertical:8,
    elevation:2,
  }
});

const textInput = props => (
  <Text onPress={props.onPress} style={styles.button}>{props.children}</Text>
);

export default textInput;
