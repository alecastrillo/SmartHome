import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
