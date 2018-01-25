import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  WebView
} from 'react-native';

class CleanView extends Component {
  static navigationOptions = {
    tabBarLabel: 'Read',
  };

  render() {
    let jsCode = `
      document.addEventListener('selectionchange', function() {
        window.postMessage(window.getSelection());
      })       
    `;

    return (
      <View style={ styles.scene }>
        <WebView
          source={{uri:'http://www.bbc.com/news/science-environment-42690577'}}
          style={ styles.webView }
          injectedJavaScript={jsCode}
          onMessage={(event) => {
            console.log(event.nativeEvent.data);
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default CleanView;