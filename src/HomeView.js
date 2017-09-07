import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import { Toolbar } from 'react-native-material-design'
import ArtisList from './ArtisList';
import { getArtists } from './apiClient';

export default class HomeView extends Component {
  state = {
    artists: null
  };

  componentDidMount() {
    getArtists().then(data => this.setState({ artists: data }));
  }

  _handleSearch = () => {
   console.warn("_handleSearch");
  }

  _handleIconPress = () => {
    console.warn("_handleIconPress");
  }

  render() {
    const artists = this.state.artists
    return (
      <View style={styles.container}>
        <Toolbar
          title="PlatziMusic"
          style={{
            position: 'relative'
          }}
          actions={[ {
            icon   : 'search',
            onPress: this._handleSearch()
          } ]}
          icon='menu'
          onIconPress={this._handleIconPress} 
        />
        {!artists && <ActivityIndicator size="large" /> }
        {artists && <ArtisList artists={artists} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 0,
    })
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});
