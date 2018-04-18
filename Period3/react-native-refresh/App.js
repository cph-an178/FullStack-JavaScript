import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants } from "expo";
import { StackNavigator } from 'react-navigation';

import BasicsReact from './pages/BasicsReact';
import Basics from './pages/Basics';
import Props from './pages/Props';
import State from './pages/State';
import Style from './pages/Style';
import HeightWidth from './pages/HeightWidth';
import FlexBox from './pages/FlexBox';
import TextInput from './pages/TextInput';
import Touches from './pages/Touches';
import ScrollViews from './pages/ScrollView';
import ListViews from './pages/ListViews';
import NetWorking from './pages/NetWorking';
import WhatToDo from './pages/WhatToDo';
import LocationApi from './pages/LocationApi';
import MapViews from './pages/MapViews';


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Alexander</Text>
        <Touchable onPress={() => navigate('basicsreact')} title="Basics React" />
        <Touchable onPress={() => navigate('locationApi')} title="Location API" />
        <Touchable onPress={() => navigate('mapviews')} title="Map with Location" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basicsreact: { screen: BasicsReact },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  style: { screen: Style },
  heightwidth: { screen: HeightWidth },
  touches: { screen: Touches },
  scrollviews: { screen: ScrollViews },
  listviews: { screen: ListViews },
  networking: { screen: NetWorking },
  locationApi: { screen: LocationApi },
  mapviews: { screen: MapViews },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
});
