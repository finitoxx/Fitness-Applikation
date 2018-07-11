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
      trainingssätze: [],
      trainingspläne: [],
      übungen:[],
      anzahlTrainings: 0,
      anzahlÜbungen: 0,
      anzahlSätze: 0,
      anzahlWiederholungen: 0,
      selectionTime: "Diese Woche",
      selectionTraining: "Leg Day I",
      selectionÜbung: "Squats",
      maximalgewicht: 0,
      maximalleistung: 0,
      anteilBauch:0.0,
      anteilBizeps:0.0,
      anteilBrust:0.0,
      anteilOberschenkel:0.0,
      anteilPo:0.0,
      anteilRücken:0.0,
      anteilSchultern:0.0,
      anteilTrizeps:0.0,
      anteilWaden:0.0,
    };
    initialisiereStatistik = () => {
      global.db.get("Statistik").then((doc)=>{
        this.setState({
          anzahlTrainings: doc.absolvierteTrainings,
          anzahlÜbungen: doc.durchgeführteÜbungen,
          anzahlSätze: doc.geschaffteSätze,
          anzahlWiederholungen: doc.geschaffteWiederholungen,
        })
      }).catch((err)=>{
        console.log(err)
      })
    }
    initialisiereListen = () =>{
      let trainingsplanList = this.props.navigation.getParam("trainingspläne", [])
      if (typeof trainingsplanList !== 'undefined' && trainingsplanList.length > 0) {
        let übungslist = []
        for(let i= 0; i < trainingsplanList[0].übungseinheiten.length; i++){
            übungslist.push(trainingsplanList[0].übungseinheiten[i].übung)
        }
        
        this.setState({
          trainingspläne: trainingsplanList,
          übungen: übungslist,
        })
      }
      
    }
    initialisiereTrainingssätze = () => {
      db.find({
        selector: {docArt: "Trainingssatz"},
      }).then((result) =>{
        console.log("_______________________________________________________")
        console.log(result)
        this.setState({  
          trainingssätze: result
        })
      }).catch((err) =>{
        console.log("_______________________________________________________")
        console.log(err);
      });
    }
    aktualisiereÜbungPicker = (index) => {
      let übungslist = []
        for(let i= 0; i < this.state.trainingspläne[index].übungseinheiten.length; i++){
            übungslist.push(this.state.trainingspläne[index].übungseinheiten[i].übung)
        }      
        this.setState({
          übungen: übungslist,
        })
    }
    findeMaxGewicht = (übung) => {
      let max = 0
      for(let i = 0; i < this.state.trainingssätze.docs.length; i++){
        console.log(this.state.trainingssätze.docs[i].übungseinheit.übung.name)
        if(this.state.trainingssätze.docs[i].übungseinheit.übung.name == übung.name){
          if(max <= Math.max.apply(Math, this.state.trainingssätze.docs[i].gewichte)){
            max = Math.max.apply(Math, this.state.trainingssätze.docs[i].gewichte)
          }
        }
      }
      return max
    }
    findeMaxLeistung = (übung) => {
      let max = 0
      for(let i = 0; i < this.state.trainingssätze.docs.length; i++){
        console.log(this.state.trainingssätze.docs[i].übungseinheit.übung.name)
        if(this.state.trainingssätze.docs[i].übungseinheit.übung.name == übung.name){
          if(max <= this.state.trainingssätze.docs[i].trainingswert){
            max = this.state.trainingssätze.docs[i].trainingswert
          }
        }
      }
      return max
    }
    aktualisiereMaxWerte = (index) => {
      console.log("MaxwertMethode wird ausgeführt")
      let übung = this.state.übungen[index]
      let maxGewicht = this.findeMaxGewicht(übung)
      let maxLeistung = this.findeMaxLeistung(übung)
      this.setState({
        maximalgewicht: maxGewicht,
        maximalleistung: maxLeistung
      })
    }
    componentDidMount = () => {
      this.initialisiereStatistik()
      this.initialisiereListen()
      this.initialisiereTrainingssätze()

    }
    render(){
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
              <Text style={styles.text}>Anzahl aller absolvierten Trainings: <Text style={styles.resultText}>{this.state.anzahlTrainings}</Text></Text>
              <Text style={styles.text}>Anzahl aller durchgeführten Übungen: <Text style={styles.resultText}>{this.state.anzahlÜbungen}</Text></Text>
              <Text style={styles.text}>Anzahl aller geschafften Sätze: <Text style={styles.resultText}>{this.state.anzahlSätze}</Text></Text>
              <Text style={styles.text}>Anzahl aller geschafften Wiederholungen: <Text style={styles.resultText}>{this.state.anzahlWiederholungen}</Text></Text>
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
                      onValueChange={(itemValue, itemIndex) =>{
                        this.aktualisiereÜbungPicker(itemIndex)
                        this.setState({selectionTraining: itemValue})
                      } }>
                      {this.state.trainingspläne.map((item, index) => {
                          return <Picker.Item color='#7c655c' key={index} label={item.name} value={item.name} />
                      })}
                  </Picker>
                  <Picker
                      mode='dropdown'
                      selectedValue={this.state.selectionÜbung}
                      style={{ height: 30 , width: 150}}
                      onValueChange={(itemValue, itemIndex) =>{
                        this.aktualisiereMaxWerte(itemIndex)
                        this.setState({selectionÜbung: itemValue})}
                      }>
                      {this.state.übungen.map((item, index) => {
                          return <Picker.Item color='#7c655c' key={index} label={item.name} value={item.name} />
                      })}
                  </Picker>
                </View>
              </View>
              <View style={styles.pickerResult}>
                <Text style={styles.text}>Maximalgewicht: <Text style={styles.resultText}>{this.state.maximalgewicht}</Text></Text>
                <Text style={styles.text}>Maximalleistung: <Text style={styles.resultText}>{this.state.maximalleistung}</Text></Text>
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
