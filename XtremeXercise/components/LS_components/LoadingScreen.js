import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  BallIndicator,
} from 'react-native-indicators';
import PouchDB from 'pouchdb-core'
const url = "https://fd88de1e-f16d-457a-b16b-d265a75da8ae-bluemix:927be7647c76b68886121651d700c7dcf2b208738f6c7ae8b1fa4c01f9ddab37@fd88de1e-f16d-457a-b16b-d265a75da8ae-bluemix.cloudant.com"

export default class LoadingScreen extends Component {
  state={
   "db":null 
  };  
  
  fetchData = (db) => {
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then((result) =>{
        this.props.navigation.navigate('Home',{db:db,data:result.rows});
      }).catch((err) =>{
        console.log(err);
      });
  }
    componentDidMount = () => {
      PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
      const db = new PouchDB('Trainingsplan', {adapter: 'asyncstorage'});
      this.fetchData(db);
      this.setState({db:db})
    }
    _syncingDB = () =>{
      let remotedb = new PouchDB(url);
      this.state.db
      .replicate
      .to(remotedb)
      .on('complete', function () {
        alert("Erfolg")
      }).on('error', function (err) {
        // error while replicating
      })

      
    }
    render(){
      const { navigate}=this.props.navigation;
      return(

        <View style={styles.container}>

          <View style={styles.header}> 
            <View style={styles.headerElem1}>
              <Text style={styles.headerText1}>
                X
                <Text style={styles.headerText2}>
                  treme
                </Text>
              </Text>
            </View>

            <View style={styles.headerElem2}>
              <Text style={styles.headerText1}>
                X
                <Text style={styles.headerText2}>
                  ercising
                </Text>
              </Text>
            </View>
          </View>
          
          <View style={styles.loadingImage2}>
            <Button
              title ="Navigate to Home"
              onPress = { this._syncingDB}
              color = '#EF2E1C'/>
              <BallIndicator color = '#EF6A39' size = {50}/>
          </View>

          <View style={styles.quote}>
            <Text style={styles.quoteText1}>
                Be the best version of 
                <Text style={styles.quoteText2}>
                  h
                </Text>
                <Text style={styles.quoteText3}>
                  yourself
                </Text>
              </Text>
          </View>

        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372D29',
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    header: {
      flex: 3,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    headerElem1: {
      marginLeft: -80,
    },
    headerElem2: {
      marginLeft: 40,
    },
    headerText1: {
      color: '#EF2E1C',
      fontSize: 55,
    },
    headerText2: {
      color: '#FFFFFF',
      fontSize: 40,
    },
    loadingImage2: {
      flex: 2,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    quote: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    quoteText1: {
      color: '#FFFFFF',
      fontSize: 17,
    },
    quoteText2: {
      color: '#372D29',
      fontSize: 10,
    },
    quoteText3: {
      color: '#EF2E1C',
      fontSize: 19,
      fontWeight: 'bold',
    },
  });

  
  
  