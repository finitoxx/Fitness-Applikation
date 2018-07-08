import React, { Component } from "react";
import { View, Text, Image} from "react-native";

export default class ListElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trainingsplan: props.trainingsplan,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, paddingLeft: 20}}>

        <View style={{flex: 5, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold',color: '#FFFFFF'}}>{this.state.trainingsplan.doc.name}</Text>
          <Text style={{color: '#FFFFFF', opacity: 0.6}}>{this.state.trainingsplan.doc.kategorie}</Text>
        </View>

        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Image style={{tintColor: "#EF6A39"}} source={require('./../../img/bell_filled.png')}/>
          <Image style={{tintColor: "#EF6A39"}} source={require('./../../img/star_filled.png')}/>
        </View>

      </View>
    );
  }
}
