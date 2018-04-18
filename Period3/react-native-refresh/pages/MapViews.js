import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

export default class MapLocation extends Component {
    static navigationOptions = { title: 'Map with location' };
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 55.7704186,
                latitudeDelta: 0.0522,
                longitude: 12.5117948,
                longitudeDelta: 0.0421,
            },
            lat: null,
            long: null,
            errorMessage: null,
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ lat: location.coords.latitude, long: location.coords.longitude });
    };

    onRegionChange = region => {
        console.log(region)
        this.setState({ region })
    }
    makePos() {
        return pos = {
            latitude: this.state.lat,
            longitude: this.state.long,
        }
    }
    render() {
        
        return (
            <View>
                <View style={{ flexDirection: 'row', height: 400 }}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={this.state.region}
                        onRegionChange={this.onRegionChange}
                    >
                    <MapView.Marker
                    coordinate={this.makePos}
                    title='Your Position'
                    description='This is where you are'
                    key={this.makePos}
                />
                    </MapView>
                </View>
                <View>
                    
                </View>
            </View>
        )
    }
}