import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
} from 'react-native';
export default class ÜbungenScreen extends Component {

  state = {
    selection: "Alphabetisch",
  };

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
                Übungen
              </Text>
            </Text>
          </View>

         <View style={styles.picker}>
         <Picker
            mode='dropdown'
            selectedValue={this.state.selection}
            style={{ height: 50 , width: 200}}
            onValueChange={(itemValue, itemIndex) => this.setState({selection: itemValue})}>
            <Picker.Item label="Alphabetisch" value="Alphabetisch" />
            <Picker.Item label="Kategorie" value="Kategorie" />
            <Picker.Item label="Muskelgruppen" value="Muskelgruppen" />
          </Picker>
         </View>

        </View>

          <Button
            title ="B2B"
            onPress = { ()=> navigate('EditTrainingsplan')}/>
        </View>
      );
    }
  }
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
      flex: 1,
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
    picker: {
      flex: 2,
      alignItems: 'flex-end',
    },
  });