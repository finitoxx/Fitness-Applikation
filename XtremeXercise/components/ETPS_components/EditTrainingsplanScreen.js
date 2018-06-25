import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
export default class EditTrainingsplanScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <Button
            title ="Übung hinzufügen"
            onPress = { ()=> navigate('Übungen')}/>
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