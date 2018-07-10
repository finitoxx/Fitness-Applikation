import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import UebungHinzufügen from './ÜbungHinzufügen';
import UebungErstellen from './ÜbungErstellen';
import { FloatingAction } from 'react-native-floating-action';
import Modal from "react-native-modal";
import * as allData from "./../../Daten.json"

export default class ÜbungenScreen extends Component {

  state = {
    isModalVisible: false,
    isModalVisible2: false,
    selection: "Kategorie",
    db:this.props.navigation.getParam("db", null),
    data:allData.Übung,
    trainingsplan:this.props.navigation.getParam("trainingsplan","noDefault"),
    übung:null,
    list: [],
  };

  _toggleModal = (item) =>
    this.setState({ übung: item, isModalVisible: !this.state.isModalVisible });
  
  _toggleModal2 = (item) =>
    this.setState({ übung: item, isModalVisible2: !this.state.isModalVisible2 });

  _addÜbungseinheit = (übungseinheit) =>{
    console.log(übungseinheit)
    let uebungseinheit = {
      "sätze": übungseinheit.sätze,
      "wiederholungen": übungseinheit.wiederholungen,
      "übung": übungseinheit.übung,
      "trainingsplanID": übungseinheit.trainingsplan.doc._id
    }
    this._toggleModal();
    this.state.trainingsplan.doc.übungseinheiten.push(uebungseinheit);
    console.log("--------------")
    console.log(uebungseinheit)
    this.state.db.get(this.state.trainingsplan.doc._id)
    .then((doc)=>{
      doc.übungseinheiten.push(übungseinheit)
      return this.state.db.put(doc)
    })
    
  }
  
  componentDidMount = () =>{
    this.setState({
      list: this._kategorieListe()
    })
  }
  _alphabetListe = () =>{
    return(
      [
        { title: 'A', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'A')},
        { title: 'B', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'B')},
        { title: 'C', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'C')},
        { title: 'D', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'D')},
        { title: 'E', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'E')},
        { title: 'F', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'F')},
        { title: 'G', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'G')},
        { title: 'H', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'H')},
        { title: 'I', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'I')},
        { title: 'J', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'J')},
        { title: 'K', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'K')},
        { title: 'L', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'L')},
        { title: 'M', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'M')},
        { title: 'N', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'N')},
        { title: 'O', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'O')},
        { title: 'P', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'P')},
        { title: 'Q', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'Q')},
        { title: 'R', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'R')},
        { title: 'S', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'S')},
        { title: 'T', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'T')},
        { title: 'U', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'U')},
        { title: 'V', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'V')},
        { title: 'W', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'W')},
        { title: 'X', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'X')},
        { title: 'Y', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'Y')},
        { title: 'Z', data: this.state.data.filter((übung) => übung.name.toUpperCase().charAt(0) == 'Z')},
      ]
    )
  }
  _kategorieListe = () =>{
    return(
      [
        {title: 'Aufwärmen', data: this.state.data.filter((übung) => übung.kategorie == 'Aufwärmen')},
        {title: 'Freihantel', data: this.state.data.filter((übung) => übung.kategorie == 'Freihantel')},
        {title: 'Maschine', data: this.state.data.filter((übung) => übung.kategorie == 'Maschine')},
      ]
    );
  }
  _muskelgruppeListe = () =>{
    return(
      [
        {title: 'Bauch', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Bauch'))},
        {title: 'Bizeps', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Bizeps'))},
        {title: 'Brust', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Brust'))},
        {title: 'Oberschenkel', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Oberschenkel'))},
        {title: 'Waden', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Waden'))},
        {title: 'Trizeps', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Trizeps'))},
        {title: 'Rücken', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Rücken'))},
        {title: 'Po', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Po'))},
        {title: 'Schultern', data: this.state.data.filter((übung) => übung.muskelgruppe.includes('Schultern'))},
      ]
    );
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000000",
        }}
      />
    );
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
            backgroundColor='#FFFFFF'
            mode='dropdown'
            selectedValue={this.state.selection}
            style={{ height: 50 , width: 180}}
            onValueChange={(itemValue, itemIndex) => {
              switch(itemValue){
                case "Alphabetisch":
                  this.setState({list: this._alphabetListe()})
                  break;
                case "Kategorie":
                  this.setState({list: this._kategorieListe()})
                  break;
                case "Muskelgruppen":
                  this.setState({list: this._muskelgruppeListe()})
                  break;
              }
              this.setState({selection: itemValue})}
              }>
            <Picker.Item color='#7c655c' label="Alphabetisch" value="Alphabetisch" />
            <Picker.Item color='#7c655c' label="Kategorie" value="Kategorie" />
            <Picker.Item color='#7c655c' label="Muskelgruppen" value="Muskelgruppen" />
          </Picker>
         </View>
        
        </View>
          <View style ={styles.list}>
            <SectionList 
            sections={this.state.list}
            renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
            renderItem={ ({item}) => (
              <View>
                <TouchableOpacity onPress= {this._toggleModal.bind(this, item)}>
                <View style = {styles.listElement}>
                  <Text style={styles.SectionElement}>{item.name}</Text>
                </View>
                </TouchableOpacity>
                
                <Modal
                isVisible={this.state.isModalVisible}
                onBackdropPress={() => this.setState({ isModalVisible: false })}
                >
    
                <UebungHinzufügen
                  toggle = {this._toggleModal}
                  addÜbungseinheit = {this._addÜbungseinheit.bind(this)}
                  trainingsplan = {this.state.trainingsplan}
                  uebung = {this.state.übung}/>
    
              </Modal>
              </View>
              
             ) }
            keyExtractor={ (item, index) => index }
            ItemSeparatorComponent={this.renderSeparator}
            />
          </View>

          <Modal
            isVisible={this.state.isModalVisible2}
            onBackdropPress={() => this.setState({ isModalVisible2: false })}>
            <UebungErstellen
              toggle = {this._toggleModal2}/>
          </Modal>

          <FloatingAction
            color="#EF2E1C"
            actions={actions}
            overrideWithAction ={true}
            onPressItem={this._toggleModal2}
          />

        </View>
      );
    }
  }
  const actions = [{
    text: 'Hinzufügen',
    icon: require('./../../img/plus.png'),
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
    list: {
      flex: 9,
      marginTop: 10,
      backgroundColor: '#564640'
    },
    SectionHeaderStyle:{
      backgroundColor : '#EF6A39',
      fontSize : 15,
      color: '#FFFFFF',
      paddingLeft: 5,
      padding: 2,
      fontWeight: 'bold',
    },
    SectionElement:{
      fontSize : 15,
      color: '#FFFFFF',
      paddingLeft: 10,
      marginLeft: 15,
    },
    ListElement:{
      padding: 5
    },
  });