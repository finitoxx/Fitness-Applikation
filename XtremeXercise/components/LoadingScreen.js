import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
export default class LoadingScreen extends Component {
    
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <Text style={[styles.accentColor1, styles.huge]}>
            X
            <Text style={[styles.textColor, styles.big]}>
              treme
            </Text>
          </Text>
          <Text style={[styles.accentColor1, styles.huge]}>
            X
            <Text style={[styles.textColor, styles.big]}>
              ercising
            </Text>
          </Text>
          
          <Button
            title ="Navigate to Home"
            onPress = { ()=> navigate('Home')}
            color = '#EF2E1C'/>
            <Text style={styles.normal}>Be the best version of yourself</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#372D29',
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
    boldStyle: {
      fontWeight: 'bold',
    },
    accentColor1: {
      color: '#EF2E1C',
    },
    accentColor2: {
      color: '#EF6A39',
    },
    primaryColor1: {
      color: '#372D29',
    },
    primaryColor2: {
      color: '#564640',
    },
    textColor: {
      color: '#FFFFFF',
    },
    huge: {
      fontSize: 40,
    },
    big: {
      fontSize: 30,
    },
    normal: {
      fontSize: 15,
    },
  });

  
  
  