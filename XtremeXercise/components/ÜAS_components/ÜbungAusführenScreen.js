import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
export default class ÜbungAusführenScreen extends Component {

  state = {
    done: false,
    trainingsplan: this.props.navigation.getParam("trainingsplan","noDefault"),
    übungseinheit: this.props.navigation.getParam("übungseinheit","noDefault"),
    aktuellerSatz: 1,
    value: 7.25,
    statistik: {},
    trainingssatz: {}
  };

  _toggleImage = () =>
    this.setState({ done: !this.state.done });
  _plus = () => {
      this.setState({
        value: parseFloat(this.state.value) + 1.25
      })
  }
  _minus = () => {
    if(this.state.value >= 1.25){
      this.setState({
        value: parseFloat(this.state.value) - 1.25
      })
    }
  }
  _trainingswertBerechnen = (sätze,wdh,gewichte) =>{
    let result = 1;
    result = result * wdh * sätze
    for(let i = 0; i < gewichte.length; i++){
      if(parseFloat(gewichte[i]) == 0){
        result = result * 1
      }else{
        result = result * parseFloat(gewichte[i])
      }
    }
    return result.toFixed(2)
  }
  _satzFertig = () => {
      if(this.state.value != ""){
        let newStatistik = Object.assign({},this.state.statistik)
        newStatistik.geschaffteSätze = newStatistik.geschaffteSätze + 1 
        newStatistik.geschaffteWiederholungen = this.state.statistik.geschaffteWiederholungen + this.state.übungseinheit.wiederholungen
        
        let newTrainingssatz = Object.assign({},this.state.trainingssatz)
        newTrainingssatz.gewichte.push(this.state.value)
        newTrainingssatz.trainingswert = this._trainingswertBerechnen(newStatistik.geschaffteSätze,newStatistik.geschaffteWiederholungen,newTrainingssatz.gewichte)
        if(this.state.aktuellerSatz < this.state.übungseinheit.sätze){
          this.setState({
            statistik:newStatistik,
            trainingssatz:newTrainingssatz,
            aktuellerSatz: this.state.aktuellerSatz + 1
        })
        }else{
          newStatistik.durchgeführteÜbungen = newStatistik.durchgeführteÜbungen + 1
          this.setState({
            statistik:newStatistik,
            trainingssatz:newTrainingssatz,
            done: true,
          })
          let progressAktualisieren = this.props.navigation.getParam("progressAktualisieren",{})
          progressAktualisieren()
          this.props.navigation.navigate("Trainieren")
        }
      } 
  }
  onChanged (text) {
    this.setState({
        value: text.replace(/[^0-9.]/g, ''),
    });
  }
  componentDidMount = () =>{
    let newTrainingssatz = {
      _id: new Date().toJSON(),
      docArt: "Trainingssatz",
      trainingswert: 0,
      gewichte: [],
      übungseinheit: this.state.übungseinheit,
      trainingsplan: this.state.trainingsplan._id,
    }
    let newStatistikDoc = {
      _id: "Statistik",
      absolvierteTrainings: 0,
      durchgeführteÜbungen: 0,
      geschaffteSätze: 0,
      geschaffteWiederholungen: 0,      
    }
    global.db.get("Statistik").then((doc)=>{ 
      this.setState({
        statistik: newStatistikDoc,
        trainingssatz: newTrainingssatz,
      })
    }).catch((err) => {
      this.setState({
        statistik: newStatistikDoc,
        trainingssatz: newTrainingssatz,
      })
      global.db.put(newStatistikDoc).then((doc)=>{
      console.log(doc)
      })
    })
  }
  componentWillUnmount = () =>{
    if(this.state.done){
      global.db.get("Statistik").then((doc)=>{
        doc.absolvierteTrainings = doc.absolvierteTrainings + this.state.statistik.absolvierteTrainings
        doc.durchgeführteÜbungen = doc.durchgeführteÜbungen + this.state.statistik.durchgeführteÜbungen
        doc.geschaffteSätze = doc.geschaffteSätze + this.state.statistik.geschaffteSätze
        doc.geschaffteWiederholungen = doc.geschaffteWiederholungen + this.state.statistik.geschaffteWiederholungen
        return global.db.put(doc)
      })
      global.db.put(this.state.trainingssatz).then((result) => {
        console.log(result)
      })
    }  
  }

    render(){

      return(
        <View style={styles.container}>

          <View style={styles.top}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {this.state.trainingsplan.name} - Training
              </Text>
            </View>
          </View>
        
          <View style={styles.info}>
            <View style={{marginBottom: 10}}><Text style={styles.infoText1}>{this.state.übungseinheit.übung.name}</Text></View>
            <Text style={styles.infoText2}>{this.state.übungseinheit.übung.kategorie}</Text> 
            <Text style={styles.infoText2}>{this.state.übungseinheit.übung.muskelgruppen.join(", ")}</Text>
          </View>

          <View style={styles.setsReps}>
            <View style={styles.sr1}>
              <Text style={styles.setsRepsText}>Sätze</Text>
              <Text style={styles.setsRepsText}>Wdh.</Text>
            </View>
            <View style={styles.sr2}>
              <Text style={styles.setsRepsText}>{this.state.aktuellerSatz.toString()}/{this.state.übungseinheit.sätze.toString()}</Text>
              <Text style={styles.setsRepsText}>{this.state.übungseinheit.wiederholungen}</Text>
            </View>
          </View>

          <View style={styles.input}>
            <View style={styles.inputResult}>
            <TextInput 
              style={styles.inputText}
              keyboardType='numeric'
              onChangeText={(text)=> this.onChanged(text)}
              value={this.state.value.toString()}
              maxLength={10}
            />
            </View>
            <View style={{marginTop: 10, marginRight: 50, marginLeft: 3}}>
              <Text style={styles.inputText}>kg</Text>
            </View>
            <View style={styles.inputBtns}>
              <TouchableOpacity onPress= { this._plus}>
                <View style={styles.btnEdit}>
                  <Image style={styles.imgAddRem}
                    source={require('./../../img/add_outline.png')}/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.inputBtns}>
              <TouchableOpacity onPress= { this._minus}>
                <View style={styles.btnEdit}>
                  <Image style={styles.imgAddRem}
                    source={require('./../../img/remove_outline.png')}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.button}>
          <TouchableOpacity onPress= {this._satzFertig}>
              <View style={styles.buttomOk}>
                <Image style={styles.imgForward}
                  source={require('./../../img/forward.png')}/>
              </View>
            </TouchableOpacity>
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
      flex: 1,
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
    info: {
      flex: 2,
      justifyContent:'center',
      paddingLeft: 40,
    },
    infoText1: {
      color: '#FFFFFF',   
      fontSize: 20,
    },
    infoText2: {
      color: '#FFFFFF',
      fontSize: 18,
      opacity: .6,
    },
    setsReps: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 40,
    },
    sr1: {
      marginRight: 25,
      paddingRight: 25,
    },
    sr2: {
    },
    setsRepsText: {
      color: '#FFFFFF',   
      fontSize: 22,
    },
    input: {
      flexDirection: "row",
      flex: 2,
      paddingLeft: 40,
    },
    inputResult: {
      width: 82,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    inputText: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    inputBtns: {
      marginTop: 10,
      marginRight: 10,
    },
    imgAddRem:{
      tintColor: '#EF2E1C',
    },
    button: {
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    buttomOk: { 
      alignItems: 'flex-end',
      margin: 50,
    },
    buttonText: {
      fontSize: 65,
      color: '#EF6A39',
    },
    imgOK: {
      tintColor: "#EF6A39",
      height: 72,
      width: 72,
    },
    imgForward: {
      tintColor: "#EF6A39",
      height: 64,
      width: 64,
    },
  });