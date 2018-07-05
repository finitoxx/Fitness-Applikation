import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TrainingsplanList from './TrainingsplanListComponent';
import TrainingsplanErstellen from './TrainingsplanErstellen';
import Modal from "react-native-modal";
import { FloatingAction } from 'react-native-floating-action';


const width = '50%';
const height = '50%';

export default class HomeScreen extends Component {

  state = {
    isModalVisible: false,
    data: this.props.navigation.getParam("data",{"nix":null}),
    db : this.props.navigation.getParam("db",null),
  };
  _addTrainingsplan(trainingsplan){
    let newTrainingsplan= {
      _id: new Date().toJSON(),
      name: trainingsplan.name,
      kategorie: trainingsplan.kategorie,
      übungseinheiten: [],
      favorit:trainingsplan.favorit,
      benachrichtigung: trainingsplan.benachrichtigung,
      benachrichtigungszeit: trainingsplan.benachrichtigungszeit
    }
    this.state.db.put(newTrainingsplan)
    this.state.data.push({"doc":newTrainingsplan})
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  
      
  static navigationOptions = {
    headerLeft: null,
  }

    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>

          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            >
              <TrainingsplanErstellen 
              toggle = {this._toggleModal}
              addTrainingsplan = {this._addTrainingsplan.bind(this)}/>
          </Modal>

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
            <TrainingsplanList 
            db = {this.state.db}
            navigation = {this.props.navigation}
            dataSet = {this.state.data}/>
          </View>

          <View style={styles.statistikBtn}>
            <Button
              title ="Statistik"
              onPress = { ()=> navigate('Statistik')}
              color = '#EF6A39'/>
          </View>

          <FloatingAction
              color="#EF2E1C"
              actions={actions}
              overrideWithAction ={true}
              onPressItem={this._toggleModal}/>

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
      flex:1,
    },  
    header: {
      flex: 1,
      flexDirection:'column',
      paddingTop: 20,
      paddingLeft: 20,
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
    list: {
      backgroundColor: '#564640',
      flex: 10,
    },
    modal: {
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    statistikBtn: {
      flex: 1,
    },
  });
  