import React, { Componet } from 'react';

// Change to atcive ngrok tunnel
const URL = 'https://2a15d939.ngrok.io/';

export default class DataStore extends React.Component {
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
        }).then((data) => {
            return data.json();
        }).then((data) => {
            callback(data);
        }).catch((error) => {
            alert(error)
        })
    }
    findById = (id, callback) => {
        fetch(URL + 'users/login/' + id)
        .then((data) => {
            console.log(data.json())
            return data.json();
        }).then((data) => {
            callback(data);
        }).catch((error) => {
            alert(error)
        })
    }
}