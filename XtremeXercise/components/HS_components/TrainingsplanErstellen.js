import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} from 'react-native';

const width = '60%';
const height = '60%';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Name',
            kategorie: 'Ausdauer'                
        };
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
                    <View style={styles.btnContainer}>
                        <View style={{flex: 2 ,alignItems: 'flex-end',}}>
                        <TouchableOpacity onPress= {this.props.toggle}> 
                            <View style={styles.btnCont1}>
                               <Text  style={styles.btnText}>ABBRECHEN</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                        <TouchableOpacity onPress= {this.props.toggle}>
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
      }
});
  
