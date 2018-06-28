import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import UebungseinheitList from "./ÜbungseinheitenListComponent";
import { FloatingAction } from 'react-native-floating-action';
export default class EditTrainingsplanScreen extends Component {
    render(){
      const { navigate}=this.props.navigation;
      const item = this.props.navigation.getParam("trainingsplan","noDefault");
      
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
                  {item.name}
                </Text>
              </Text>
              <Text style={styles.headerText4}>
                {item.kategorie}
              </Text>
            </View>
          </View>
          <View style={styles.list}>
          <UebungseinheitList
          navigation = {this.props.navigation}/>
          </View>
          <FloatingAction
            color="#EF2E1C"
            actions={actions}
            overrideWithAction ={true}
            onPressItem={()=> navigate('Übungen')}
      />
        </View>
      );
    }
  }
  const actions = [{
    text: 'Hinzufügen',
    icon: require('./../../img/bell_filled.png'),
    name: 'bt_add',
    position: 2
  }]
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372D29',
      flex: 1,
    },  
    top: {
      flex: 1,
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
    list: {
      marginLeft: 30,
      backgroundColor: '#666666',
      flex: 9,
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
      fontSize: 15,
      marginLeft: 10,
      marginTop: 5,
      opacity: .6,
    },
  });