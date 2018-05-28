import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo'
import Datastore from './components/Datastore';

let datastore = new Datastore();

export default class App extends React.Component {
  constructor() {
    super();
    this.store = datastore;
    this.state = {
      region: { latitude: 55.7704186, longitude: 12.5117948, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
      locationResult: null,
      location: { coords: { latitude: 55.7704186, longitude: 12.5117948 } },
      username: '',
      password: '',
      friends: [],
      currentFriend: '',
    };
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
      return this.state.friends.map((friend, f) => {
        let latLng = {
          latitude: friend.loc.coordinates[1],
          longitude: friend.loc.coordinates[0]
        }
        decs = `Lat: ${latLng.latitude}
        Lng: ${latLng.longitude}`;
        return (
          <MapView.Marker
            key={f}
            coordinate={latLng}
            title={friend._id}
            description={decs}
          />
        )
      })
  }
  submit = async () => {
    try {
      const username = this.state.username;
      const password = this.state.password;
      await this.store.login(username, password, (data) => {
        this.setState({ friends: data })
      });
    } catch (err) {
      console.log(err);
    };
  };

  render() {
    let decs = `Lat: ${this.state.location.coords.latitude}
    Lng: ${this.state.location.coords.longitude}`;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.statusBar} />
        <Text>Username</Text>
        <TextInput
          style={{ height: 40, padding: 2 }}
          onChangeText={(username) => this.setState({ username })}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{ height: 40, padding: 2 }}
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
            description={decs}
          />
          {this.makeMarkers()}
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