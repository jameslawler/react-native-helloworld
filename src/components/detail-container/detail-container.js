import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  WebView
} from 'react-native';

class Detail extends Component {
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
    marginTop: 20,
  },
  webView: {
    flex: 1,
  },
});

Detail.navigationOptions = {
  title: 'Details',
  headerStyle: {
    marginTop: 24
  }
};

export default Detail;