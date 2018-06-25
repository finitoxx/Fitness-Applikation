import React, { Component } from "react";
import { View, Text, FlatList , List, StyleSheet } from "react-native";

export default class ListComponent extends Component {
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
      <View style={styles.listElem}>
        
            <FlatList
                data={this.state.data}
                renderItem={({item})=>(
                    <Text style={styles.workoutPlanName}> {item} </Text>
                )}
            />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    listElem: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#564640',
        margin: 0,
    },
    workoutPlanName: {
        color: '#FFFFFF',
    },
    workoutPlanCategory: {
        color: '#FFFFFF50',
      },
  });
