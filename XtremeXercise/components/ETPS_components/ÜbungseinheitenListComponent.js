import React, { Component } from "react";
import { View, FlatList , StyleSheet } from "react-native";
import ListElement from "./ListElementComponent";
import * as allData from './../../Daten.json';

export default class ÜbungseinheitenListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.trainingsplan.doc.übungseinheiten,
    };
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
    return (
      <View style={styles.list}>
        
            <FlatList
                data={this.state.data}
                renderItem={({item})=>(
                    <ListElement 
                    uebungseinheit= {item}
                    />
                )}
                keyExtractor={(item, name) => item.übung.name}
                ItemSeparatorComponent={this.renderSeparator}
            />
        
      </View>
      
    );
   
  }
  
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: "100%",
        borderTopWidth: 2, 
        borderBottomWidth: 2,
        borderLeftWidth: 2,
    },
}) 