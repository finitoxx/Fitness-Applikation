import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TrainingsplanList from './TrainingsplanListComponent';
export default class TrainingsplanScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <Button
            title ="Editieren"
            onPress = { ()=> navigate('EditTrainingsplan')}/>
            <Button
            title ="Trainieren"
            onPress = { ()=> navigate('Trainieren')}/>
            <TrainingsplanList></TrainingsplanList>
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