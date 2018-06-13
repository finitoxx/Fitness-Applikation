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
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import TrainingsplanScreen from './components/TrainingsplanScreen';
import EditTrainingsplanScreen from './components/EditTrainingsplanScreen';
import ÜbungenScreen from './components/ÜbungenScreen';
import TrainierenScreen from './components/TrainierenScreen';
import ÜbungAusführenScreen from './components/ÜbungAusführenScreen';
import StatistikScreen from './components/StatistikScreen';

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

    },
    title : "Xtreme Xercising"
  } 
});

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

