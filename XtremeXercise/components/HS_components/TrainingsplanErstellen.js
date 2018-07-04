import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const width = '80%';
const height = '50%';

export default class TrainingsplanErstellen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Name',
            kategorie: 'Ausdauer',       
            timePicker: false,
            dateObj: "",
            time: "",   
            benachrichtigung: false   
        };
      }
    wochentagParser = (tag) =>{
        switch(tag){
            case 0:
                return "Montag"
                break;
            case 1:
                return "Dienstag"
                break;
            case 2:
                return "Mittwoch"
                break;
            case 3:
                return "Donnerstag"
                break;
            case 4:
                return "Freitag"
                break;
            case 5:
                return "Samstag"
                break;
            case 6:
                return "Sonntag"
                break;
        }
    }
    _toggleTimePicker = () =>
        this.setState({ timePicker: !this.state.timePicker });
    _handleDatePicker = (date) => {
            var dateFormat = require('dateformat');
            let timeString = this.wochentagParser(date.getDay()) + " " + dateFormat(date,"HH:MM:ss");
            this.setState({ time: timeString});
            this._toggleTimePicker();
    }
    _toggleBenachrichtigung = () =>{
        if(!this.state.benachrichtigung){
            this.setState({benachrichtigung: true});
            this._toggleTimePicker();
        }else{
            this.setState({benachrichtigung: false});
            this.setState({time: ""});
        }
    }
    _addTrainingsplan = () =>{
        let trainingsplan = {
            name: this.state.text,
            kategorie: this.state.kategorie,
            benachrichtigungszeit: this.state.dateObj,
            benachrichtigung: this.state.benachrichtigung,
            favorit: false
        };
        this.props.addTrainingsplan(trainingsplan)
        this.props.toggle()
    }
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>

                    <View style={styles.titel}>
                        <Text style={styles.titelText}>Trainingsplan erstellen</Text>
                    </View>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            selectionColor= '#EF6A39'
                            underlineColorAndroid ='#564640'
                            fontSize= {16}
                            
                        />
                    </View>

                    <View style={styles.picker}>
                        <Picker
                            mode='dropdown'
                            selectedValue={this.state.language}
                            style={{ height: 50 , width: 170}}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Ausdauer" value="Ausdauer" />
                            <Picker.Item label="Muskelaufbau" value="Muskelaufbau" />
                            <Picker.Item label="Fettabbau" value="Fettabbau" />
                        </Picker>
                    </View>

                    <View style={styles.benachrichtigung}>
                        <View style={{flexDirection: 'row', height: 50}}>
                            <View style={styles.benachrichtigungText}>
                                <Text style={{color: '#00000070', fontSize: 16}}>Benachrichtigung</Text>
                            </View>
                            <TouchableOpacity onPress={this._toggleBenachrichtigung}> 
                                <View style={styles.benachrichtigungBild}>
                                    <Image style={styles.imgBell} source={require('./../../img/bell_outline.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:5}}>
                            <Text style={styles.dateText}>
                            {this.state.time}
                            </Text>
                        </View>
                        <DateTimePicker
                        mode = "datetime"
                        isVisible={this.state.timePicker}
                        onConfirm={this._handleDatePicker}
                        onCancel={this._toggleTimePicker}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <View style={{flex: 2 ,alignItems: 'flex-end',}}>
                        <TouchableOpacity onPress= {this.props.toggle}> 
                            <View style={styles.btnCont1}>
                               <Text  style={styles.btnText}>ABBRECHEN</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                        <TouchableOpacity onPress= {this._addTrainingsplan}>
                            <View style={styles.btnCont2}>
                                <Text style={styles.btnText}>OK</Text>
                            </View>
                         </TouchableOpacity>
                        </View>    
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
    },  
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        padding: 10,
        width,
        height,
        backgroundColor: '#FFFFFF',
      },
      titel: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingBottom: 10,
      },
      titelText: {
          flex: 1,
          color: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
      },
      input: {
        flex: 1,
        paddingLeft: 10,
      },
      textInput: {
        borderColor: '#372D29',
        color: '#000000',
        fontSize: 14,
        width: 150,
      },
      dateText: {
        textDecorationLine: 'underline',
        color: '#000000'
      },
      btnContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'flex-end',
      },
      btnCont1: {
        height: 25,
        alignItems: 'center',
      
      },
      btnCont2: {
        height: 25,
        alignItems: 'center',
      
      },
      btnText:{
      },
      picker:{
        flex: 1,
        paddingLeft: 5,
      },
      date: {
        flexDirection:'row',
        flex: 1,
      },
      benachrichtigung: {
        flex: 2,
        paddingLeft: 12,
      },
      benachrichtigungText: {
        marginRight: 30,
        justifyContent: 'center',
        flex: 4,
      },
      benachrichtigungBild: {
        flex: 1,
        paddingRight: 10,
        justifyContent: 'center',
      },
      imgBell: {
          tintColor: '#EF6A39',
      }
});
  
