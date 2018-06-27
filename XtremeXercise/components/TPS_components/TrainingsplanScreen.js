import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
 } from 'react-native';

export default class Trainingsplan extends Component {

  state = {
    isBellVisible: false,
    isStarVisible: false
  };

  _toggleBell = () =>
    this.setState({ isBellVisible: !this.state.isBellVisible });

  _toggleStar = () =>
    this.setState({ isStarVisible: !this.state.isStarVisible });

  render() {
    const { navigate}=this.props.navigation;
    const trainingsplan = this.props.navigation.getParam("trainingsplan","noDefault");
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
                {trainingsplan.name}
              </Text>
            </Text>
            <Text style={styles.headerText4}>
              {trainingsplan.kategorie}
            </Text>
          </View>

          <View style={styles.bellStar}>
            <TouchableOpacity onPress= "">
              <View style={styles.bell}>
                <Image style={styles.imgBell}
                  source={require('./../../img/bell_outline.png')}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= "">
              <View>
                <Image style={styles.imgStar}
                  source={require('./../../img/star_filled.png')}/>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress=  { ()=> navigate('Trainieren')}>
            <View style={styles.btnTrainingStarten}>
              <Text style={styles.btnText1}>Training starten</Text>  
            </View>
          </TouchableOpacity>

          <View style={styles.btnDelEdit}>
            <TouchableOpacity onPress= "">
              <View style={styles.btnDel}>
                <Image style={styles.imgDel}
                  source={require('./../../img/delete.png')}/>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress= { ()=> navigate('EditTrainingsplan')}>
              <View style={styles.btnEdit}>
                <Image style={styles.imgEdit}
                  source={require('./../../img/edit.png')}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

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
    tintColor: "#564640",
  },
  imgStar: {
    tintColor: "#EF6A39",
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