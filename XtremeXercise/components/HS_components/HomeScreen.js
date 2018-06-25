import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import ListComponent from './ListComponent';

const width = '80%';
const height = '%';

export default class HomeScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText1}> 
              |
              <Text style={styles.headerText2}>
                h
              </Text>                            
              <Text style={styles.headerText3}>
                Meine Trainingspläne
              </Text>
            </Text>
          </View>

          <View style={styles.list}>
            <ListComponent/>
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
    },  
    header: {
      flex: 5,
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      marginLeft: 10,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 20,
    },
    headerText2: {
      color: '#372D29',
      fontSize: 20,
    },
    headerText3: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    list: {
      flex: 40,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    buttons: {
      flex: 10,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
  });
  