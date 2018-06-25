import React, { Component } from "react";
import { View, Text, FlatList , List, TouchableOpacity } from "react-native";
import ListElement from "./ListElementComponent";
import * as allData from './../../Daten.json';

export default class TrainingsplanListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: allData.Trainingspläne,
    };
  }

  componentDidMount() {
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000000",
        }}
      />
    );
  };
  render() {
    const { navigate}=this.props.navigation;
    return (
      <View style={{flex: 1, width: "100%",borderTopWidth: 2, borderBottomWidth: 2}}>
        
            <FlatList
                data={this.state.data}
                renderItem={({item})=>(
                    <TouchableOpacity onPress = { ()=> navigate('Trainingsplan',{trainingsplan: item})}>
                    <ListElement 
                    trainingsplan= {item}
                    />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, name) => item.name}
                ItemSeparatorComponent={this.renderSeparator}
            />
        
      </View>
    );
  }
}
