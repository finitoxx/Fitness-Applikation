import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const width = '80%';
const height = '50%';

export default class ÜbungHinzufügen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            kategorie: "",
            muskelgruppen: "",   
            sätze: "",
            wiederholungen: "",   
        };
      }

    _addÜbungseinheit = () =>{
        let übung = {
            name: this.state.text,
            kategorie: this.state.kategorie,
            muskelgruppen: this.state.muskelgruppen,
            sätze: this.state.sätze,
            wiederholungen: this.state.wiederholungen,
        };
        this.props._addÜbungseinheit(übungseinheit)
        this.props.toggle()
    }
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>
                
                    <View style={styles.titel}>
                        <Text style={styles.titelText}>Übung hinzufügen</Text>
                    </View>
                    
                    <View style={styles.info}>
                        <Text style={styles.infoName}>Übungsname</Text>
                        <View style={styles.info2}>
                            <Text style={styles.infoRest}>Kategorie</Text>
                        <   Text style={styles.infoRest}>Muskelgruppen</Text>
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
                                value="3"
                            />
                            <TextInput
                                style={styles.inputText}
                                value="10"
                            />
                        </View>
                        
                        <View style={styles.inputPlus}>
                            <TouchableOpacity onPress= { ()=> plus()}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgPlus}
                                    source={require('./../../img/add_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress= { ()=> plus()}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgPlus}
                                    source={require('./../../img/add_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.inputMinus}>
                            <TouchableOpacity onPress= { ()=> minus()}>
                                <View style={styles.btnEdit}>
                                <Image style={styles.imgMinus}
                                    source={require('./../../img/remove_filled.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress= { ()=> minus()}>
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
                        <TouchableOpacity onPress= {this.props.toggle}> 
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
  
