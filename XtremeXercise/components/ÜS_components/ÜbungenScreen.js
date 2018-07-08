import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
} from 'react-native';
import UebungHinzufügen from './ÜbungHinzufügen';
import Modal from "react-native-modal";

export default class ÜbungenScreen extends Component {

  state = {
    isModalVisible: false,
    selection: "Alphabetisch",
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _addÜbungseinheit = () =>{}

    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>

          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            >

             <UebungHinzufügen
              toggle = {this._toggleModal}
              addÜbungseinheit = {this._addÜbungseinheit.bind(this)}/>

          </Modal>

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
              backgroundColor='#FFFFFF'
              mode='dropdown'
              selectedValue={this.state.selection}
              style={{ height: 50 , width: 180}}
              onValueChange={(itemValue, itemIndex) => this.setState({selection: itemValue})}
              >
              <Picker.Item color='#7c655c' label="Alphabetisch" value="Alphabetisch" />
              <Picker.Item color='#7c655c' label="Kategorie" value="Kategorie" />
              <Picker.Item color='#7c655c' label="Muskelgruppen" value="Muskelgruppen" />
            </Picker>
          </View>

        </View>

          <Button
            title ="B2B"
            onPress = { ()=> navigate('EditTrainingsplan')}/>
          <Button
            title = "Übung hinzufügen"
            onPress = {this._toggleModal}/>
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
      paddingLeft: 20,
      flexDirection: 'row',
    },
    header: {
      flex: 1,
      paddingTop: 20,
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
      paddingTop: 10,
      alignItems: 'flex-end',
    },
  });