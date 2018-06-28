import React, { Component } from "react";
import { View, Text} from "react-native";

export default class ListElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trainingsplan: props.trainingsplan,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10, paddingLeft: 20}}>
        <Text style={{fontWeight: 'bold',color: '#FFFFFF'}}>{this.state.trainingsplan.name}</Text>
        <Text style={{color: '#FFFFFF', opacity: 0.6}}>{this.state.trainingsplan.kategorie}</Text>   
      </View>
    );
  }
}
