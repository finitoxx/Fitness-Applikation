import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

const width = '80%';
const height = '50%';

export default class ÜbungErstellen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "Übungsname",
            kategorie: "Maschine",
            muskelgruppen: "Oberschenkel",
        };
      }

    _addNeueÜbung = () =>{
        let uebung = {
            "name": this.state.name,
            "kategorie": this.state.kategorie,
            "muskelgruppen": this.state.muskelgruppen,
          }
        this.props.addÜbung(uebung)
    }

    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>
                    
                    <View style={styles.titel}>
                        <Text style={styles.titelText}>Übung erstellen</Text>
                    </View>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                            selectionColor= '#EF6A39'
                            underlineColorAndroid ='#564640'
                            fontSize= {16}    
                        />
                    </View>

                    <View style={styles.picker}>
                        <Picker
                            mode='dropdown'
                            selectedValue={this.state.kategorie}
                            style={{ height: 50 , width: 170}}
                            onValueChange={(itemValue, itemIndex) => this.setState({kategorie: itemValue})}>
                            <Picker.Item label="Cardio" value="Cardio" />
                            <Picker.Item label="Freie Übung" value="FreieÜbung" />
                            <Picker.Item label="Maschine" value="Maschine" />
                        </Picker>
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress= {this.props.toggle}> 
                            <View style={styles.btnAbbrechen}>
                                <Text  style={styles.btnText}>ABBRECHEN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress= {this._addNeueÜbung2}> 
                            <View style={styles.btnOk}>
                                <Text  style={styles.btnText}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        textInput: {
            flex: 1,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttons: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        btnAbbrechen: {
            width: 100,
            alignItems: 'center',
        },
        btnOk: {
            width: 70,
            alignItems: 'center',
        },
});