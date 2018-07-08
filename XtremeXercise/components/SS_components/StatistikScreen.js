import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class StatistikScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText1}> 
                |
                <Text style={styles.headerText2}>
                  h
                </Text>
                <Text style={styles.headerText3}>
                  Statistik
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.graph}>
            <Text style={styles.headerText4}>
              Maximalleistung pro Training
            </Text>
          </View>
         
          <View style={styles.piechart}>
            <Text style={styles.headerText4}>
              Muskelgruppenverteilung
            </Text>
          </View>

        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372D29',
    },  
    top: {
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
    },
    header: {
      flexDirection:'column',
      width: 240,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerText2: {
      color: '#372D29',
      fontSize: 10,
    },
    headerText3: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    headerText4: {
      color: '#FFFFFF',
      fontSize: 18,
      marginTop: 5,
      opacity: .8,
    },
    graph: {
      marginLeft: 20,
    },
    piechart: {
      marginLeft: 20,
    },
  });