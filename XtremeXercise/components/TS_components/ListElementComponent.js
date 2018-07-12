import React, { Component } from "react";
import { View, Text} from "react-native";

export default class ListElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        übungseinheit: props.uebungseinheit,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10}}>
        <Text style={{fontWeight: 'bold',color: '#FFFFFF'}}>{this.state.übungseinheit.übung.name}</Text>
        <Text style={{color: '#FFFFFF', opacity: 0.6}}>{this.state.übungseinheit.übung.kategorie}</Text>   
        <Text style={{color: '#FFFFFF', opacity: 0.6}}>{this.state.übungseinheit.übung.muskelgruppen.join(", ")}</Text>   
      </View>
    );
  }
}