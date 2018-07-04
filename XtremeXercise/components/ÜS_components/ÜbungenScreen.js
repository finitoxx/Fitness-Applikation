import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  SectionList,
} from 'react-native';
import UebungHinzufügen from './ÜbungHinzufügen';
import Modal from "react-native-modal";

export default class ÜbungenScreen extends Component {

  state = {
    isModalVisible: false,
    selection: "Alphabetisch",
    data:[{
      "name": "Squat",
      "muskelgruppe":["Po","Oberschenke"],
      "kategorie" : "Freihantel"
    }],
    list:[
      { title: 'A', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'A')},
      { title: 'B', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'B')},
      { title: 'C', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'C')},
      { title: 'D', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'D')},
      { title: 'E', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'E')},
      { title: 'F', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'F')},
      { title: 'G', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'G')},
      { title: 'H', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'H')},
      { title: 'I', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'I')},
      { title: 'J', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'J')},
      { title: 'K', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'K')},
      { title: 'L', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'L')},
      { title: 'M', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'M')},
      { title: 'N', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'N')},
      { title: 'O', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'O')},
      { title: 'P', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'P')},
      { title: 'Q', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'Q')},
      { title: 'R', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'R')},
      { title: 'S', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'S')},
      { title: 'T', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'T')},
      { title: 'U', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'U')},
      { title: 'V', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'V')},
      { title: 'W', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'W')},
      { title: 'X', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'X')},
      { title: 'Y', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'Y')},
      { title: 'Z', data: this.state.data.filter((übung) => übung.name.toUppercase().charAt(0) = 'Z')},
    ],
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
            mode='dropdown'
            selectedValue={this.state.selection}
            style={{ height: 50 , width: 200}}
            onValueChange={(itemValue, itemIndex) => this.setState({selection: itemValue})}>
            <Picker.Item label="Alphabetisch" value="Alphabetisch" />
            <Picker.Item label="Kategorie" value="Kategorie" />
            <Picker.Item label="Muskelgruppen" value="Muskelgruppen" />
          </Picker>
         </View>
        <View style ={styles.list}>
          <SectionList 
          sections={}
          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
          keyExtractor={ (item, index) => index }
          />
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
    list: {
      flex: 1,
    },
    SectionHeaderStyle:{
 
      backgroundColor : '#CDDC39',
      fontSize : 20,
      padding: 5,
      color: '#fff',
    },
  });