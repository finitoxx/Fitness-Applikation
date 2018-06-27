import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import TrainingsplanList from './TrainingsplanListComponent';
import TrainingsplanErstellen from './TrainingsplanErstellen';
import Modal from "react-native-modal";

const width = '50%';
const height = '50%';

export default class HomeScreen extends Component {

  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  componentWillUnmount = () =>
    this.setState({ isModalVisible: false });
      
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>

          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            >
              <TrainingsplanErstellen toggle = {this._toggleModal}/>
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
          <TrainingsplanList navigation = {this.props.navigation}/>
          </View>
          
          <View style={styles.buttons}>
            <Button
              title ="Mein Trainingsplan"
              onPress = { ()=> navigate('Trainingsplan')}/>
            <Button
              title ="Trainingsplan hinzufügen"
              onPress = {this._toggleModal}/>
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
      backgroundColor: '#666666',
      flex: 9,
    },
    buttons: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    modal: {
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  