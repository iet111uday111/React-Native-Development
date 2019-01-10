import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = {
        album: []
    };

    componentWillMount() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>
                    Album List!!!!
                </Text>
            </View >
        )
    }

}

export default AlbumList;

