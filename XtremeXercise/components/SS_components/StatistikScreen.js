import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';

export default class StatistikScreen extends Component {

    state = {
      selectionTime: "Diese Woche",
      selectionTraining: "Leg Day I",
      selectionÜbung: "Squats",
    };
    
    render(){
      const { navigate}=this.props.navigation;
      return(
        <View style={styles.container}>

          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText1}> 
                |
                <Text style={styles.headerText2}>
                  h
                </Text>
                <Text style={styles.headerText3}>
                  Statistik
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.graph1}>
            <Text style={styles.headerText4}>|
              <Text style={styles.headerText5}>
                h
              </Text>
              <Text style={styles.headerText6}>
                Allgemeine Daten
              </Text>
            </Text>
            <View style={{paddingTop: 10, paddingStart: 10}}>
              <Text style={styles.text}>Anzahl aller absolvierten Trainings: <Text style={styles.resultText}>??</Text></Text>
              <Text style={styles.text}>Anzahl aller durchgeführten Übungen: <Text style={styles.resultText}>??</Text></Text>
              <Text style={styles.text}>Anzahl aller geschafften Sätze: <Text style={styles.resultText}>??</Text></Text>
              <Text style={styles.text}>Anzahl aller geschafften Wiederholungen: <Text style={styles.resultText}>??</Text></Text>
            </View>
          </View>

          <View style={styles.graph2}>
            <Text style={styles.headerText4}>|
              <Text style={styles.headerText5}>
                h
              </Text>
              <Text style={styles.headerText6}>
                Training
              </Text>
            </Text>
            <View>
              <View style={styles.picker}>
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectionTime}
                    style={{ height: 30 , width: 300}}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectionTime: itemValue})}>
                    <Picker.Item color='#7c655c' label="Diese Woche" value="DieseWoche" />
                    <Picker.Item color='#7c655c' label="Letzte Woche" value="LetzteWoche" />
                    <Picker.Item color='#7c655c' label="Dieser Monat" value="DieserMonat" />
                    <Picker.Item color='#7c655c' label="Letzte 3 Monate" value="Letzte3Monate" />
                    <Picker.Item color='#7c655c' label="Letzte 6 Monate" value="Letzte6Monate" />
                    <Picker.Item color='#7c655c' label="Letztes Jahr" value="LetztesJahr" />
                    <Picker.Item color='#7c655c' label="Alle" value="Alle" />
                </Picker>
                <View style={{flexDirection:'row'}}>
                  <Picker
                      mode='dropdown'
                      selectedValue={this.state.selectionTraining}
                      style={{ height: 30 , width: 150}}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectionTraining: itemValue})}>
                      <Picker.Item color='#7c655c' label="Leg Day I" value="DieseWoche" />
                      <Picker.Item color='#7c655c' label="Leg Day II" value="LetzteWoche" />
                      <Picker.Item color='#7c655c' label="Push and Pull" value="DieserMonat" />
                      <Picker.Item color='#7c655c' label="HIIT" value="Letzte3Monate" />
                      <Picker.Item color='#7c655c' label="Cardiotraining" value="Letzte6Monate" />
                  </Picker>
                  <Picker
                      mode='dropdown'
                      selectedValue={this.state.selectionÜbung}
                      style={{ height: 30 , width: 150}}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectionÜbung: itemValue})}>
                      <Picker.Item color='#7c655c' label="Squats" value="Squats" />
                      <Picker.Item color='#7c655c' label="Ausfallschritte" value="Ausfallschritte" />
                      <Picker.Item color='#7c655c' label="Abduktoren" value="Abduktoren" />
                      <Picker.Item color='#7c655c' label="Adduktoren" value="Adduktoren" />
                      <Picker.Item color='#7c655c' label="Wadenheben" value="Wadenheben" />
                  </Picker>
                </View>
              </View>
              <View style={styles.pickerResult}>
                <Text style={styles.text}>Maximalgewicht: <Text style={styles.resultText}>??</Text></Text>
                <Text style={styles.text}>Maximalleistung: <Text style={styles.resultText}>??</Text></Text>
                <Text style={styles.textSmall}>(Sätze + Wdh. + Gewicht)</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.piechart}>
            <Text style={styles.headerText4}>|
              <Text style={styles.headerText5}>
                h
              </Text>
              <Text style={styles.headerText6}>
                Verteilung der Muskelgruppen
              </Text>
            </Text>
            <View style={styles.muskelgruppen}>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={styles.text}>Bauch: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Bizeps: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Brust: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Oberschenkel: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Po: <Text style={styles.resultText}>?%</Text></Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={styles.text}>Rücken: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Schultern: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Trizeps: <Text style={styles.resultText}>?%</Text></Text>
                <Text style={styles.text}>Waden: <Text style={styles.resultText}>?%</Text></Text>
              </View>
            </View>
          </View>

        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#372D29',
    },  
    top: {
      flex: 1,
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
    },
    header: {
      flexDirection:'column',
      width: 240,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerText2: {
      color: '#372D29',
      fontSize: 10,
    },
    headerText3: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    headerText4: {
      color: '#EF2E1C',
      fontSize: 16,
      fontWeight: 'bold'
    },
    headerText5: {
      color: '#372D29',
      fontSize: 8,
    },
    headerText6: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    graph1: {
      flex: 4,
      paddingLeft: 20,
    },
    graph2: {
      flex: 5,
      paddingLeft: 20,
    },
    piechart: {
      flex: 4,
      paddingLeft: 20,
    },
    muskelgruppen: {
      flexDirection: 'row', 
      paddingTop: 10, 
      paddingStart: 10
    },
    picker: {
      alignItems: 'flex-start',
      paddingTop: 10,
      paddingBottom: 10,
    },
    pickerResult: {
      flexDirection: 'column', 
      paddingLeft: 10,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 12,
      opacity: .8,
    },
    textSmall: {
      color: '#FFFFFF',
      fontSize: 8,
      opacity: .7,
    },
    resultText: {
      color: '#EF6A39',
      fontSize: 12,
      opacity: .8,
    },
  });
