import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
  CheckBox
} from 'react-native';

const width = '80%';
const height = '70%';

export default class ÜbungErstellen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "Übungsname",
            kategorie: "Maschine",
            muskelgruppen: "Oberschenkel",
            data: "data",
            bauch: false,
            bizeps: false,
            brust: false,
            oberschenkel: false,
            po: false,
            rücken: false,
            schultern: false,
            trizeps: false,
            waden: false,
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
                            <Picker.Item label="Freie Übung" value="Freie Übung" />
                            <Picker.Item label="Maschine" value="Maschine" />
                        </Picker>
                    </View>

                    <View style={styles.checkbox}>
                        <View style={styles.check1}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.checkText}>Bauch</Text>
                                <Text style={styles.checkText}>Bizeps</Text>
                                <Text style={styles.checkText}>Brust</Text>
                                <Text style={styles.checkText}>Oberschenkel</Text>
                                <Text style={styles.checkText}>Po</Text>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <CheckBox value={this.state.bauch} onChange={ ()=> {this.setState({bauch:!this.state.bauch})}} />
                                <CheckBox value={this.state.bizeps} onChange={ ()=> {this.setState({bizeps:!this.state.bizeps})}}/>
                                <CheckBox value={this.state.brust} onChange={ ()=> {this.setState({brust:!this.state.brust})}}/>
                                <CheckBox value={this.state.oberschenkel} onChange={ ()=> {this.setState({oberschenkel:!this.state.oberschenkel})}}/>
                                <CheckBox value={this.state.po} onChange={ ()=> {this.setState({po:!this.state.po})}}/>
                            </View>
                        </View>
                        <View style={styles.check2}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.checkText}>Rücken</Text>
                                <Text style={styles.checkText}>Schultern</Text>
                                <Text style={styles.checkText}>Trizeps</Text>
                                <Text style={styles.checkText}>Waden</Text>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <CheckBox value={this.state.rücken} onChange={ ()=> {this.setState({rücken:!this.state.rücken})}} />
                                <CheckBox value={this.state.schultern} onChange={ ()=> {this.setState({schultern:!this.state.schultern})}} />
                                <CheckBox value={this.state.trizeps} onChange={ ()=> {this.setState({trizeps:!this.state.trizeps})}} />
                                <CheckBox value={this.state.waden} onChange={ ()=> {this.setState({waden:!this.state.waden})}} />
                            </View>
                        </View>
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
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        textInput: {
            flex: 1,
            borderColor: '#372D29',
            color: '#000000',
            fontSize: 14,
            width: 150,
        },
        picker:{
            flex: 1,
            paddingLeft: 5,
            justifyContent: 'center',
          },
        checkbox: {
            flex: 5,
            flexDirection: 'row',
            marginLeft: 15,
        },
        check1: {
            flex: 1,
            flexDirection: 'row',
            marginRight: 20,
        },
        check2: {
            flex: 1,
            flexDirection: 'row',
        },
        checkText: {
            marginTop: 5,
            marginBottom: 8,
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