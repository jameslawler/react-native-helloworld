import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Notes extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notes',
  };

  render() {
    return (
      <View style={ styles.scene }>
        <Text>Notes here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20,
  },
});

export default Notes;