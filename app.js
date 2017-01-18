/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtisBox from './ArtisBox';

export default class PlatziMusic extends Component {
  render() {
    const artist = {
      image: 'http://eskipaper.com/images/cool-android-wallpaper-1.jpg',
      name: 'Grover Trujillo Benites',
      likes: 200,
      comments: 140,
    };
    return (
      <View style={styles.container}>
        <ArtisBox artist={artist} />
        <ArtisBox artist={artist} />
        <ArtisBox artist={artist} />
        <ArtisBox artist={artist} />
        <ArtisBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
