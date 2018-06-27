import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} from 'react-native';

const width = '50%';
const height = '50%';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Name' };
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

                    <View style={styles.btnContainer}>
                        <View style={{flex: 1}}>
                        <TouchableOpacity onPress= {this.props.toggle}> 
                            <View style={styles.btnCont1}>
                               <Text>OK</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                        <TouchableOpacity onPress= {this.props.toggle}>
                            <View style={styles.btnCont2}>
                                
                                    <Text style={styles.btnText}>ABBRECHEN</Text>
                                
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
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
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
        flex: 1,
      },
      btnCont1: {
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
      
      },
      btnCont2: {
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
      
      },
      btnText:{
          fontSize: 12
      }
});
  
