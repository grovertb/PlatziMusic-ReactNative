import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtisBox from './ArtisBox';
import { getArtists } from './apiClient';

import { firebaseDatabase, firebaseAuth } from './firebase'

import CommentList from './CommentList'

export default class ArtistDetailView extends Component {
  state = {
    comments: []
  }

  componentDidMount() {
    this.getArtistCommentsRef().on('value', this.addComment);
  }

  componentWillUnmount(){
    this.getArtistCommentsRef().off('value', this.addComment);
  }

  addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: comment || []
    })
  }

  handleSend = () => {
    const { text } = this.state
    const { uid, photoURL } = firebaseAuth.currentUser
    const artistCommentsRef = this.getArtistCommentsRef()
    const newCommentRef = artistCommentsRef.push();
    newCommentRef.set({
      text,
      userPhoto: photoURL,
      uid,
    })
    this.setState({ text: '' })
  };

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({ text })

  render() {
    const artist = this.props.artist;
    const { comments } = this.state;
    return (
      <View style={styles.container}>
        <ArtisBox artist={artist} />
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
            value={this.state.text}
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
  header: {
    fontSize: 20,
    marginVertical:15,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
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
