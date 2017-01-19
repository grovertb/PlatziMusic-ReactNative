/*
# LoginView
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';

import firebase, { firebaseAuth } from './firebase';
const { FacebookAuthProvider } = firebase.auth;

import ArtisList from './ArtisList';
import { getArtists } from './apiClient';

export default class LoginView extends Component {
  state = {
    credential: null
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        // Actions.home()
      }, (error) => {
        console.log("Sign in error", error)
      })
    })
  }
  // publishPermissions={['publish_actions']}
  render() {
    return (
      <Image source={require('./background.jpg')} style={styles.container} >
        <Text style={styles.saludo}>Bienvenido a PlatziMusic</Text>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.saludo}>
          {this.state.credentials && this.state.credentials.displayName}
        </Text>
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={ this.handleLoginFinished }
          onLogoutFinished={() => alert("logout.")}/>
      </Image>
    );
  }

  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      console.warn("login is cancelled.");
    } else {
      this.authenticateUser()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  saludo: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
    backgroundColor: 'transparent',
    color: 'white',
  },
});
