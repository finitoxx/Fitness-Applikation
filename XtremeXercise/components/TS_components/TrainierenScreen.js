import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import UebungseinheitList from './ÜbungseinheitenListComponent';
export default class TrainierenScreen extends Component {

  state = {
    progress: 0.3,
    trainingsplan: this.props.navigation.getParam("trainingsplan","noDefault"),
  };
    render(){
      const item = this.props.navigation.getParam("trainingsplan","noDefault");
      return(
        <View style={styles.container}>
        
          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {item.doc.name} - Training
              </Text>
            </View>
          </View>

          <View style={styles.list}>
            <UebungseinheitList
            navigation = {this.props.navigation}
            trainingsplan = {this.state.trainingsplan}/>
          </View>
          <View style={styles.progress}>
            <ProgressBar 
              progress={this.state.progress} 
              width={null}
              height={10}
              borderRadius={20}
              color= '#EF2E1C'
              unfilledColor= '#443832'
              borderColor= '#28211e'
              borderWidth= {1} />
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
      flex: 2,
      marginBottom: 5,
      marginTop: 1,
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
    list: {
      marginLeft: 60,
      marginRight: 60,
      flex: 17,
      backgroundColor: '#564640'
    },
    progress: {
      flex: 1,
      marginBottom: 5,
      marginLeft: 30,
      marginRight: 30,
      justifyContent:'center',
    },
  });