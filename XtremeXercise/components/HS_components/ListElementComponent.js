import React, { Component } from "react";
import { View, Text, Image} from "react-native";

export default class ListElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trainingsplan: props.trainingsplan,
        bellColor: null,
        starColor: null
    };
  }

  componentDidMount=()=> {
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
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, paddingLeft: 20}}>

        <View style={{flex: 5, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold',color: '#FFFFFF'}}>{this.state.trainingsplan.name}</Text>
          <Text style={{color: '#FFFFFF', opacity: 0.6}}>{this.state.trainingsplan.kategorie}</Text>
        </View>

        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}}>
        
          <Image style={[{tintColor: this.state.bellColor}]}
            source={require('./../../img/bell_outline.png')}/>
          <Image style={[{tintColor: this.state.starColor}]}
            source={require('./../../img/star_outline.png')}/>
        </View>

      </View>
    );
  }
}
