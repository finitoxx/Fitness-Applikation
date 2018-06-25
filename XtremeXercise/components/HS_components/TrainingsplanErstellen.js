import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const width = '50%';
const height = '50%';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.box}>
                    <Text>Hello!</Text>
                    <TouchableOpacity onPress={this.props.toggle}>
                    <Text>Hide me!</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#F3D1B0',
      },
});
  
