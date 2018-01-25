import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Detail extends Component {
  static navigationOptions = {
    tabBarLabel: 'Details',
  };

  render() {
    return (
      <View style={ styles.scene }>
        <Text>Details here</Text>
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

export default Detail;