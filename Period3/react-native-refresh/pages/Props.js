import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
          <Image source={pic} style={{width: 193, height: 110}}/>
        );
      }
}

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)