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
import { getArtists } from './apiClient';

export default class PlatziMusic extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    getArtists().then(data => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;
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
