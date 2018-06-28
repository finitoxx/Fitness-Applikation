import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  CheckBox
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


const width = '60%';
const height = '30%';

export default class HomeScreen extends Component {

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
            benachrichtigung: this.state.benachrichtigung
        };
        this.props.addTrainingsplan(trainingsplan)
        this.props.toggle()
    }
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>
                    <Text style={styles.title}>Trainingsplan erstellen</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
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
                    <View style={styles.date}>
                        <View style={{flex:5}}>
                            <Text style={styles.dateText}>
                            {this.state.time}
                            </Text>
                        </View>
                        <View style={{flex:1}}>
                            <CheckBox
                            value={this.state.benachrichtigung}
                            onChange={this._toggleBenachrichtigung}
                            />
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
      title: {
          paddingTop: 10,
          color: '#000000'
      },
      textInput: {
        height: 40, 
        borderColor: '#372D29',
      },
      dateText: {
        height: 40, 
      },
      btnContainer: {
        flexDirection:'row',
        position: "absolute",
        bottom: 0, 
        right: 0
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
          fontSize: 12
      },
      picker:{
        flex: 1,
      },
      date: {
        flexDirection:'row',
        flex: 1
      }
});
  
