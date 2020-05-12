import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  item:{
    color:'#222831',
    fontSize:16,
    borderBottomWidth:1,
    borderColor:'#dbe2ef',
    paddingLeft:16,
    paddingVertical:16,
    width:'50%'
  },
  title:{
    fontWeight:'bold',
    borderBottomWidth:2,
    borderColor:'#dbe2ef',
  },
  row:{
    flex:1,
    flexDirection:'row',
  }
});

const listItem = props => {
  let itemStyles = [styles.item];
  if (props.title) itemStyles.push(styles.title);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View  style={styles.row}>
        <Text style={itemStyles}>{props.name}</Text>
        <Text  style={itemStyles}>{props.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default listItem;
