import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
export default class ÜbungAusführenScreen extends Component {

  state = {
    done: false,
    trainingsplan: this.props.navigation.getParam("trainingsplan","noDefault"),
    übungseinheit: this.props.navigation.getParam("übungseinheit","noDefault"),
    aktuellerSatz: 1,
    value: 7.25
  };

  _toggleImage = () =>
    this.setState({ done: !this.state.done });
  _plus = () => {
      this.setState({
        value: parseFloat(this.state.value) + 1.25
      })
  }
  _minus = () => {
    if(this.state.value >= 1.25){
      this.setState({
        value: parseFloat(this.state.value) - 1.25
      })
    }
  }
  onChanged (text) {
    this.setState({
        value: text.replace(/[^0-9.]/g, ''),
    });
}
    render(){
      const { navigate}=this.props.navigation;

      return(
        <View style={styles.container}>

          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {this.state.trainingsplan.doc.name} - Training
              </Text>
            </View>
          </View>
        
          <View style={styles.info}>
            <View style={{marginBottom: 10}}><Text style={styles.infoText1}>{this.state.übungseinheit.übung.name}</Text></View>
            <Text style={styles.infoText2}>{this.state.übungseinheit.übung.kategorie}</Text> 
            <Text style={styles.infoText2}>{this.state.übungseinheit.übung.muskelgruppe.join(", ")}</Text>
          </View>

          <View style={styles.setsReps}>
            <View style={styles.sr1}>
              <Text style={styles.setsRepsText}>Sätze</Text>
              <Text style={styles.setsRepsText}>Wdh.</Text>
            </View>
            <View style={styles.sr2}>
              <Text style={styles.setsRepsText}>{this.state.aktuellerSatz.toString()}/{this.state.übungseinheit.sätze.toString()}</Text>
              <Text style={styles.setsRepsText}>{this.state.übungseinheit.wiederholungen}</Text>
            </View>
          </View>

          <View style={styles.input}>
            <View style={styles.inputResult}>
            <TextInput 
              style={styles.inputText}
              keyboardType='numeric'
              onChangeText={(text)=> this.onChanged(text)}
              value={this.state.value.toString()}
              maxLength={10}
            />
            </View>
            <View style={{marginTop: 10, marginRight: 50, marginLeft: 3}}>
              <Text style={styles.inputText}>kg</Text>
            </View>
            <View style={styles.inputBtns}>
              <TouchableOpacity onPress= { this._plus}>
                <View style={styles.btnEdit}>
                  <Image style={styles.imgAddRem}
                    source={require('./../../img/add_outline.png')}/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.inputBtns}>
              <TouchableOpacity onPress= { this._minus}>
                <View style={styles.btnEdit}>
                  <Image style={styles.imgAddRem}
                    source={require('./../../img/remove_outline.png')}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.button}>
          <TouchableOpacity onPress= { ()=> navigate('Home')}>
              <View style={styles.buttomOk}>
                <Image style={styles.imgForward}
                  source={require('./../../img/forward.png')}/>
              </View>
            </TouchableOpacity>
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
    top: {
      flex: 1,
      marginBottom: 10,
    },
    header: {
      height: 50,
      backgroundColor: '#EF2E1C',
      justifyContent:'center',
      alignItems: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    info: {
      flex: 2,
      justifyContent:'center',
      paddingLeft: 40,
    },
    infoText1: {
      color: '#FFFFFF',   
      fontSize: 20,
    },
    infoText2: {
      color: '#FFFFFF',
      fontSize: 18,
      opacity: .6,
    },
    setsReps: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 40,
    },
    sr1: {
      marginRight: 25,
      paddingRight: 25,
    },
    sr2: {
    },
    setsRepsText: {
      color: '#FFFFFF',   
      fontSize: 22,
    },
    input: {
      flexDirection: "row",
      flex: 2,
      paddingLeft: 40,
    },
    inputResult: {
      width: 82,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    inputText: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    inputBtns: {
      marginTop: 10,
      marginRight: 10,
    },
    imgAddRem:{
      tintColor: '#EF2E1C',
    },
    button: {
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    buttomOk: { 
      alignItems: 'flex-end',
      margin: 50,
    },
    buttonText: {
      fontSize: 65,
      color: '#EF6A39',
    },
    imgOK: {
      tintColor: "#EF6A39",
      height: 72,
      width: 72,
    },
    imgForward: {
      tintColor: "#EF6A39",
      height: 64,
      width: 64,
    },
  });