import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const width = '80%';
const height = '50%';

export default class ÜbungHinzufügen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sätze: 3,
            wiederholungen: 10,   
            übung:this.props.uebung,
            trainingsplan:this.props.trainingsplan
        };
      }

    _addÜbungseinheit = () =>{
        let uebungseinheit = {
            "sätze": this.state.sätze,
            "wiederholungen": this.state.wiederholungen,
            "übung": this.state.übung,
            "trainingsplan": this.state.trainingsplan,
          }
          console.log(uebungseinheit)
        this.props.addÜbungseinheit(uebungseinheit) 
        this.props.navigation.navigate("EditTrainingsplan")
    }
    _minusSatz = () => {
        if(this.state.sätze > 0){
            this.setState({
                sätze: this.state.sätze-1
            })
        } 
    }
    _minusWdh = () => {
        if(this.state.wiederholungen > 0){
            this.setState({
                wiederholungen: this.state.wiederholungen-1
            })
        } 
    }
    _plusSatz = () => {
        this.setState({
            sätze: this.state.sätze+1
        }) 
    }
    _plusWdh = () => {
        this.setState({
            wiederholungen: this.state.wiederholungen+1
        })
    }

    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>
                
                    <View style={styles.titel}>
                        <Text style={styles.titelText}>Übung hinzufügen</Text>
                    </View>
                    
                    <View style={styles.info}>
                        <Text style={styles.infoName}>{this.state.übung.name}</Text>
                        <View style={styles.info2}>
                            <Text style={styles.infoRest}>{this.state.übung.kategorie}</Text>
                        <   Text style={styles.infoRest}>{this.state.übung.muskelgruppe.join(", ")}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.input}>

                        <View style={styles.inputText}>
                            <Text style={{paddingBottom: 15}}>Sätze</Text>
                            <Text style={{paddingTop: 5}}>Wdh.</Text>
                        </View>
                        
                        <View style={styles.inputValue}>
                            <TextInput
                                style={styles.inputText}
                                value={this.state.sätze.toString()}
                            />
                            <TextInput
                                style={styles.inputText}
                                value={this.state.wiederholungen.toString()}
                            />
                        </View>
                        
                        <View style={styles.inputPlus}>
                            <TouchableOpacity onPress= {this._plusSatz}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgPlus}
                                    source={require('./../../img/add_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress= {this._plusWdh}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgPlus}
                                    source={require('./../../img/add_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.inputMinus}>
                            <TouchableOpacity onPress= {this._minusSatz}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgMinus}
                                    source={require('./../../img/remove_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress= {this._minusWdh}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgMinus}
                                    source={require('./../../img/remove_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress= {this.props.toggle}> 
                            <View style={styles.btnAbbrechen}>
                                <Text  style={styles.btnText}>ABBRECHEN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress= {this._addÜbungseinheit}> 
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
        info: {
            flex: 2,
            paddingLeft: 10,
            justifyContent: 'center',
        },
        infoName: {
            fontSize: 16,
            color: '#000000',
        },
        info2: {
            paddingLeft: 10,
        },
        infoRest: {
            fontSize: 14,
            color: '#00000070',
        },
        input: {
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        inputText: {
            flex: 1,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputValue: {
            flex: 1,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputPlus: {
            flex: 1,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputMinus: {
            flex: 1,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imgPlus: {
            tintColor: '#EF2E1C'
        },
        imgMinus: {
            tintColor: '#EF6A39'
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
  
