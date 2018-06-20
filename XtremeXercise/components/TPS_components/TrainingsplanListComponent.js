import React, { Component } from "react";
import { View, Text, FlatList , List } from "react-native";

export default class TrainingsplanListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: ["ALPHA", "BETA", "GAMMA"],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
            <FlatList
                data={this.state.data}
                renderItem={({item})=>(
                    <Text> {item} </Text>
                )}
            />
        
      </View>
    );
  }
}
