import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello lovely World!</Text>
        <Text>Lädt der wirklich automatisch?.</Text>
        <Text>Was ist denn das Developermenü?????.</Text>
        <Text>Das Leben ist schön</Text>
		    <Text>So ist das Leben</Text>
    <Button
      title="Mibi"
			color="#0f1"
			accessibilityLabel = "This is Mibi"
		/>
      </View>
    );
  }
  mibi()
  {
	  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
