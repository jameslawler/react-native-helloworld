import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  getDateTime() {
    this.props.getDateTime();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Current Date Time: {this.props.dateTime}</Text>
        <TouchableHighlight onPress={() => {this.getDateTime()}}>
          <Text>Get Date Time</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AppContainer.propTypes = {
  dateTime: PropTypes.string,
  getDateTime: PropTypes.any
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    dateTime: state.dateTime
  }
}, mapDispatchToProps)(AppContainer);