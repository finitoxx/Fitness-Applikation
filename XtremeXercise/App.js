/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoadingScreen from './components/LS_components/LoadingScreen';
import HomeScreen from './components/HS_components/HomeScreen';
import TrainingsplanScreen from './components/TPS_components/TrainingsplanScreen';
import EditTrainingsplanScreen from './components/ETPS_components/EditTrainingsplanScreen';
import ÜbungenScreen from './components/ÜS_components/ÜbungenScreen';
import TrainierenScreen from './components/TS_components/TrainierenScreen';
import ÜbungAusführenScreen from './components/ÜAS_components/ÜbungAusführenScreen';
import StatistikScreen from './components/SS_components/StatistikScreen';

const NavigationApp = StackNavigator({
  LoadingScreen: { screen: LoadingScreen},
  Home: { screen: HomeScreen},
  Trainingsplan: { screen: TrainingsplanScreen},
  EditTrainingsplan: { screen: EditTrainingsplanScreen},
  Übungen: { screen: ÜbungenScreen},
  Trainieren: { screen: TrainierenScreen},
  ÜbungAusführen: { screen: ÜbungAusführenScreen},
  Statistik: { screen: StatistikScreen},
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#423631'
    },
    title : "Xtreme Xercising",
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontSize: 15,
    },
  }
});

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

