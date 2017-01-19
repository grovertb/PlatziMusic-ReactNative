/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import LoginView from './LoginView';
import HomeView from './HomeView';
import ArtistDetail from './ArtistDetailView';

class PlatziMusic extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginView} hideNavBar />
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene key="artistDetail" component={ArtistDetail} title="Comentarios" hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
