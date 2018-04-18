import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Basics extends Component {
  static navigationOptions = { title: "Learn the Basics" }
  render() {
    return (<View><Text>Hello World!</Text></View>)
  }
}

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)