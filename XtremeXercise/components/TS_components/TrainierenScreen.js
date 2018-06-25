import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
export default class TrainierenScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <Button
            title ="Will Squats machen"
            onPress = { ()=> navigate('ÜbungAusführen')}/>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372D29',
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
  });