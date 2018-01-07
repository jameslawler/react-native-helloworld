import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  searchPressed() {
    this.props.fetchNews()
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 24}}>
        <View>
          <TouchableHighlight onPress={ () => this.searchPressed() }>
            <Text>Fetch News</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={{flex: 0.8}}>
          { this.props.newsItems && this.props.newsItems.map((item) => {
            return (
              <View key={item.id}>
                <Text>{item.title}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    newsItems: state.newsItems
  }
}

export default connect(mapStateToProps)(Home);