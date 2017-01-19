/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';
import HomeView from './HomeView';
import ArtistDetail from './ArtistDetailView';

class PlatziMusic extends React.Component {
  render() {
    const isAndroid = Platform.OS === 'android'

    return (
      <Router>
        <Scene key="root">
          {/* <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Register} title="Register"/> */}
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
