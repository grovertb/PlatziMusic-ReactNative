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
  Image,
  ListView,
} from 'react-native';

import ArtisList from './ArtisList';

export default class PlatziMusic extends Component {
  render() {
    const artist = {
      image: 'http://eskipaper.com/images/cool-android-wallpaper-1.jpg',
      name: 'Grover Trujillo Benites',
      likes: 200,
      comments: 140,
    };
    const artists = Array(500).fill(artist);

    return (
      <View style={styles.container}>
        <ArtisList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
