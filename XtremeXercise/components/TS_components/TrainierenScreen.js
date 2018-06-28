import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
export default class TrainierenScreen extends Component {

  state = {
    progress: 0.3,
  };

    render(){
      const { navigate}=this.props.navigation;
      const item = this.props.navigation.getParam("trainingsplan","noDefault");
      return(
        <View style={styles.container}>
        
          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {item.name} - Training
              </Text>
            </View>
          </View>

          <View style={styles.list}>
            <Button
              title ="Will Squats machen"
              onPress = { ()=> navigate('ÜbungAusführen')}/>
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
      marginBottom: 10,
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
      flex: 17,
    },
    progress: {
      flex: 1,
      margin: 5,
      marginLeft: 30,
      marginRight: 30,
      justifyContent:'center',
    },
  });