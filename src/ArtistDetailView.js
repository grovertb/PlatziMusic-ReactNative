import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtisBox from './ArtisBox';
import { getArtists } from './apiClient';

import { firebaseDatabase } from './firebase'


export default class ArtistDetailView extends Component {
  handleSend = () => {
    const { text } = this.state
    const artistCommentsRef = this.getArtistCommentsRef()
    const newCommentRef = artistCommentsRef.push();
    newCommentRef.set({ text })
  };

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({ text })

  render() {
    const artist = this.props.artist;
    return (
      <View style={styles.container}>
        <ArtisBox artist={artist} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
  },
});
