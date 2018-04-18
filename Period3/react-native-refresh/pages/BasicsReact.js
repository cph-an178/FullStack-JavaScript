import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

export default class BasicsReact extends React.Component {
    static navigationOptions = { title: 'Basics React' };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Alexander</Text>
                <Touchable onPress={() => navigate('web')} title="What I have to do" />
                <Touchable onPress={() => navigate('basics')} title="Basics" />
                <Touchable onPress={() => navigate('props')} title="Props" />
                <Touchable onPress={() => navigate('state')} title="State" />
                <Touchable onPress={() => navigate('style')} title="Style" />
                <Touchable onPress={() => navigate('heightwidth')} title="Height and Width" />
                <Touchable onPress={() => navigate('textinput')} title="Text Input" />
                <Touchable onPress={() => navigate('touches')} title="Touches" />
                <Touchable onPress={() => navigate('scrollviews')} title="Scroll View" />
                <Touchable onPress={() => navigate('listviews')} title="List Views" />
                <Touchable onPress={() => navigate('networking')} title="Net Working" />
            </View>
        )
    }
}



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
