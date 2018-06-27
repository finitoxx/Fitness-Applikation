import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const width = '50%';
const height = '50%';

export default class Trainingsplan extends Component {
 
  render() {
    const trainingsplan = this.props.navigation.getParam("trainingsplan", 'Irgend n Trainingsplan');
    return (
      <View style={styles.screen}>
        <View style={styles.box}>
          <Text style={styles.text}>
            {trainingsplan.name}
          </Text>
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
    backgroundColor: '#7AC36A',
  },
  box: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3D1B0',
  },
  text: {
    fontSize: 18,
  },
});