import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo'
import { Ionicons } from '@expo/vector-icons';

const URL = 'https://63ef683e.ngrok.io/';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      region: { latitude: 55.7704186, longitude: 12.5117948, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
      locationResult: null,
      location: { coords: { latitude: 55.7704186, longitude: 12.5117948 } },
      username: '',
      password: '',
      friends: []
    };
  }

  login = (username, password, callback) => {
    var data = {
      username: username,
      password: password,
      longitude: 12.487678527832031,
      latitude: 55.77386963550729,
      distance: 1000
    }
    fetch(URL + 'users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      callback(data);
    })
  }

  componentDidMount() {
    this._getLocationAsync();
  }
  onRegionChange = region => {
    this.setState({ region });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location, });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.friends != this.state.friends) {
      console.log(this.state.friends)
    }
  }
  makeMarkers = () => {
    return this.state.friends.map((friend) => {
      let latLng = {
        latitude: friend.loc.coordinate[1],
        longitude: friend.loc.coordinate[0]
      }
      return(
        <MapView.Marker 
        coordinate={latLng}
        title={friend.user}
        description="One of your friends"
        key={latLng}/>
      )
    })
  }
  submit = async () => {
    try {
      const username = this.state.username;
      const password = this.state.password;
      this.login(username, password, (data) => {
        this.setState({ friends: data })
      });
    } catch (err) {
      console.log(err);
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.statusBar} />
        <Text>username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({ username })}
        />
        <Text>password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          onPress={this.submit}
          title='Find friends' />

        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="You"
            description="This is where you are"
          />
          {this.makeMarkers}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: "#74b76f",
    height: Constants.statusBarHeight,
  },
  input: {
    height: 40,
    padding: 2
  },
});