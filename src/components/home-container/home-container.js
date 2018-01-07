import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  clearPressed() {
    this.props.clearNews()
  }

  refreshPressed() {
    this.props.fetchNews()
  }

  render() {
    return (
      <View style={ styles.scene }>
        <View style= { styles.refreshSection }>
          <View style= { styles.refreshButtonsSection }>
            <Button
              onPress={ () => this.refreshPressed() }
              title="Refresh"
              accessibilityLabel="Refresh the news contents"
            />
            <Button
              onPress={ () => this.clearPressed() }
              title="Clear"
              accessibilityLabel="Clear the news contents"
            />
          </View>
        </View>
        <ScrollView style={ styles.scrollSection }>
          { this.props.newsItems && this.props.newsItems.map((item) => {
            return (
              <View key={item.id}>
                <Image source={{ uri: item.image }} style={ styles.newsImage } />
                <Text style={ styles.newsHeadline }>{item.headline} - {item.image}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20,
  },
  refreshSection: {
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  refreshButtonsSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollSection: {
    flex: 0.8,
  },
  newsImage: {
    height: 150,
  },
  newsHeadline: {
    backgroundColor: '#000',
    color: '#fff',
    height: 20,
  }
});

Home.propTypes = {
  newsItems: PropTypes.array,
  clearNews: PropTypes.func,
  fetchNews: PropTypes.func
}

function mapStateToProps(state) {
  return {
    newsItems: state.newsItems
  }
}

export default connect(mapStateToProps)(Home);