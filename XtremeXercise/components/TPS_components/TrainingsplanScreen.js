import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TrainingsplanScreen extends Component {

    render(){
      const { navigate}=this.props.navigation;
      const trainingsplan = this.props.navigation.getParam("trainingsplan", 'Irgend n Trainingsplan');
      return(
        <View style={styles.container}>
          <Button
            title ={trainingsplan.name}
            onPress = { ()=> navigate('EditTrainingsplan')}/>
            <Button
            title ="Trainieren"
            onPress = { ()=> navigate('Trainieren')}/>
           
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });