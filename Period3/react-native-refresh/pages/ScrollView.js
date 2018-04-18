import React, { Component } from 'react';
import { ScrollView, Image, Text, TouchableOpacity } from 'react-native';

export default class ScrollViews extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Text style={{fontSize:96}}>What's the best</Text>
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)