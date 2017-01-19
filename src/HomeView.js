import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ArtisList from './ArtisList';
import { getArtists } from './apiClient';

export default class HomeView extends Component {
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
