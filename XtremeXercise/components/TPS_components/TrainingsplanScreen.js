import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
 } from 'react-native';
 import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Trainingsplan extends Component {

  state = {
    isBellVisible: false,
    isStarVisible: false,
    trainingsplan: this.props.navigation.getParam("trainingsplan","noDefault"),
    starColor: null,
    bellColor: null,
    timePicker: false,
  };

  _toggleTimePicker = () =>
    this.setState({ timePicker: !this.state.timePicker });

  _toggleBell = () => {
    this._toggleTimePicker()
    this.setState({ isBellVisible: !this.state.isBellVisible },()=>{      
      if(this.state.isBellVisible) {
        this.setState({bellColor: '#EF6A39'})
        global.db.get(this.state.trainingsplan._id).then((doc)=>{
          doc.benachrichtigung = true;
          return global.db.put(doc)
        })
      } else {
        this.setState({bellColor: '#564640'})
        global.db.get(this.state.trainingsplan._id).then((doc)=>{
          doc.benachrichtigung = false;
          return global.db.put(doc)
        })
      }
    });
  }

  _toggleStar = () => {
    this.setState({ isStarVisible: !this.state.isStarVisible }, ()=> {
      if(this.state.isStarVisible) {
        this.setState({starColor: '#EF6A39'})
        global.db.get(this.state.trainingsplan._id).then((doc)=>{
          doc.favorite = true;
          return global.db.put(doc)
        })
      } else {
        this.setState({starColor: '#564640'})
        global.db.get(this.state.trainingsplan._id).then((doc)=>{
          doc.favorite = false;
          return global.db.put(doc)
        })
      }
    });
  }

  _trainingsplanLöschenAlert = () => {
    Alert.alert(
      'Trainingsplan löschen',
      'Soll der Trainingsplan ' + this.state.trainingsplan.name + ' wirklich gelöscht werden?',
      [
        {text: 'ABBRECHEN', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress:()=>this._trainingsplanLöschen()},
      ],
      { cancelable: false }
    )
  }

  _trainingsplanLöschen = () => {
    global.db.get(this.state.trainingsplan._id).then(function (doc) {
      return global.db.remove(doc);
    })
    this.props.navigation.navigate('Home');
    
  }

  componentDidMount = () => {
    if(this.state.trainingsplan.favorite) {
      this.setState({starColor: '#EF6A39'})
    } else {
      this.setState({starColor: '#564640'})
    }
    if(this.state.trainingsplan.benachrichtigung) {
      this.setState({bellColor: '#EF6A39'})
    } else {
      this.setState({bellColor: '#564640'})
    }
  }

  render() {
    const { navigate}=this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.top}>

          <View style={styles.header}>
            <Text style={styles.headerText1}> 
              |
              <Text style={styles.headerText2}>
                h
              </Text>
              <Text style={styles.headerText3}>
                {this.state.trainingsplan.name}
              </Text>
            </Text>
            <Text style={styles.headerText4}>
              {this.state.trainingsplan.kategorie}
            </Text>
          </View>

          <View style={styles.bellStar}>
            <TouchableOpacity onPress= {this._toggleBell}>
              <View style={styles.bell}>
                <Image style={[styles.imgBell, {tintColor: this.state.bellColor}]}
                  source={require('./../../img/bell_outline.png')}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {this._toggleStar}>
              <View>
                <Image style={[styles.imgStar, {tintColor: this.state.starColor}]}
                  source={require('./../../img/star_outline.png')}/>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress=  { ()=> navigate('Trainieren', {trainingsplan: this.state.trainingsplan})}>
            <View style={styles.btnTrainingStarten}>
              <Text style={styles.btnText1}>Training starten</Text>  
            </View>
          </TouchableOpacity>

          <View style={styles.btnDelEdit}>
            <TouchableOpacity onPress= { this._trainingsplanLöschenAlert}>
              <View style={styles.btnDel}>
                <Image style={styles.imgDel}
                  source={require('./../../img/delete.png')}/>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress= { ()=> navigate('EditTrainingsplan', {trainingsplan: this.state.trainingsplan})}>
              <View style={styles.btnEdit}>
                <Image style={styles.imgEdit}
                  source={require('./../../img/edit.png')}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <DateTimePicker
          mode = "datetime"
          isVisible={this.state.timePicker}
          onConfirm={this._toggleTimePicker}
          onCancel={this._toggleTimePicker}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372D29',
    flex: 1,
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
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
    opacity: .6,
  },
  bellStar: {
    flexDirection: 'row',
  },
  bell: {
    marginRight: 5,
  },
  imgBell: {
  },
  imgStar: {
  },
  buttons: {
    flex: 3,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  btnTrainingStarten: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#EF2E1C',
  },
  btnText1:{
    fontSize: 30,
    color: '#FFFFFF',
  },
  btnDelEdit: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width: 300,
  },
  btnText2:{
    fontSize: 20,
    color: '#EF6A39',
  },
  btnDel: {
    marginRight: 5,
    marginTop: 10,
  },
  btnEdit: {
    marginTop: 10,
  },
  imgDel: {
    tintColor: "#EF6A39",
  },
  imgEdit: {
    tintColor: "#EF6A39",
  },
});