import React, { Component } from "react";
import { View, FlatList , StyleSheet, TouchableOpacity } from "react-native";
import ListElement from "./ListElementComponent";
import * as allData from './../../Daten.json';

export default class ÜbungseinheitenListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainingsplan: this.props.trainingsplan,
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
    const { navigate}=this.props.navigation;
    return (
      <View style={styles.list}>
        
            <FlatList
                data={this.state.trainingsplan.übungseinheiten}
                renderItem={({item})=>(
                    <TouchableOpacity onPress = { ()=> navigate('ÜbungAusführen',{trainingsplan: this.state.trainingsplan,übungseinheit: item,progressAktualisieren: this.props.progressAktualisieren})}>
                    <ListElement 
                    uebungseinheit= {item}
                    />
                    </TouchableOpacity>
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
        borderWidth: 2,
    },
}) 