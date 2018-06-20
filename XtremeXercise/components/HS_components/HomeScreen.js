import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText1}> 
              |
              <Text style={styles.headerText2}>
                Meine Trainingspläne
              </Text>
            </Text>
          </View>

          <View style={styles.list}>

          </View>
          
          <View style={styles.buttons}>
            <Button
              title ="Mein Trainingsplan"
              onPress = { ()=> navigate('Trainingsplan')}/>
            <Button
              title ="Statistik"
              onPress = { ()=> navigate('Statistik')}/>
          </View>

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
    header: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    headerElem1: {
      marginLeft: -80,
    },
    headerElem2: {
      marginLeft: 40,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 20,
    },
    headerText2: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    list: {
      flex: 2,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    buttons: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
  });
  