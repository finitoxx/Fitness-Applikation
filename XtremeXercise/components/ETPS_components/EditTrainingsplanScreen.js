import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from "react-native-modal";
import UebungseinheitList from "./ÜbungseinheitenListComponent";
import TrainingsplanBearbeiten from './TrainingsplanBearbeiten';
import { FloatingAction } from 'react-native-floating-action';
export default class EditTrainingsplanScreen extends Component {

    state = {
      isModalVisible: false,
      trainingsplan:this.props.navigation.getParam("trainingsplan","noDefault"),
    };

    _editTrainingsplan(){
      alert("Änderungen zu Trainingsplan ??? wurden übernommen");
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    render(){
      const { navigate}=this.props.navigation;
      
      return(
        <View style={styles.container}>

          <Modal 
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            >
              <TrainingsplanBearbeiten 
              trainingsplan = {this.state.trainingsplan}
              toggle = {this._toggleModal}
              editTrainingsplan = {this._editTrainingsplan.bind(this)}/>
          </Modal>

          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText1}> 
                |
                <Text style={styles.headerText2}>
                  h
                </Text>
                <Text style={styles.headerText3}>
                  {this.state.trainingsplan.doc.name}
                </Text>
              </Text>
              <Text style={styles.headerText4}>
                {this.state.trainingsplan.doc.kategorie}
              </Text>
            </View>
            
            <TouchableOpacity onPress={this._toggleModal}> 
              <View>
                  <Image style={styles.imgEdit} source={require('./../../img/edit.png')}/>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.list}>
            <UebungseinheitList
            navigation = {this.props.navigation}
            trainingsplan = {this.state.trainingsplan}/>
          </View>

          <FloatingAction
            color="#EF2E1C"
            actions={actions}
            overrideWithAction ={true}
            onPressItem={()=> navigate('Übungen',{trainingsplan:this.state.trainingsplan})}
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
      flex: 2,
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
    },
    header: {
      flexDirection:'column',
      paddingRight: 20,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 20,
      fontWeight: 'bold',
    },
    list: {
      marginLeft: 30,
      backgroundColor: '#564640',
      flex: 12,
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
    imgEdit: {
      tintColor: '#EF6A39'
    }
  });