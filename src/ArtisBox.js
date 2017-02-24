import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { firebaseDatabase, firebaseAuth } from './firebase'
import Share, {ShareSheet, Button} from 'react-native-share';

export default class ArtisBox extends Component {
  state = {
    liked: false,
    likeCount: 0,
    commentCount: 0,
  }

  componentWillMount() {
    const { uid } = firebaseAuth.currentUser
    this.getArtistRef().on('value', snaphot => {
      const artist = snaphot.val()
      if(artist) {
        this.setState({
          likeCount: artist.likeCount,
          liked: artist.likes && artist.likes[uid]
        })
      }
    })

    this.getArtistCommentRef().on('value', snaphot => {
      const artist = snaphot.val()
      if(artist) {
        this.setState({
            commentCount: snaphot.numChildren()
        })
      }
    })
  }

  handlePress = () => {
    this.toggleLike(!this.state.liked)
  };

  getArtistRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`artist/${id}`)
  }

  getArtistCommentRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  toggleLike = (like) => {
    const { uid } = firebaseAuth.currentUser

    this.getArtistRef().transaction((artist) => {
      if (artist) {
        if (artist.likes && artist.likes[uid]) {
          artist.likeCount--;
          artist.likes[uid] = null;
        } else {
          artist.likeCount++;
          if (!artist.likes) {
            artist.likes = {};
          }
          artist.likes[uid] = true;
        }
      }

      return artist || {
        likeCount: 1,
        likes: {
          [uid]: true
        }
      };
    });
  }

  handleShared = () => {
    const { url, name } = this.props.artist;
    let shareOptions = {
      title: name,
      message: "GroverTB",
      url: url
    };

    Share.shareSingle(Object.assign(shareOptions, {
       "social": "facebook"
     }));
  };

  render() {
    const { image, name } = this.props.artist;
    const likeIcon = this.state.liked ? <Icon name='ios-heart' size={30} color="#e74c3c" /> : <Icon name='ios-heart-outline' size={30} color="gray" />
    const { likeCount, commentCount } = this.state
    return (
      <View style={styles.artisBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info} >
          <Text style={styles.name} >{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.handlePress}>
                {likeIcon}
              </TouchableOpacity>
              <Text style={styles.count} >{likeCount}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray" />
              <Text style={styles.count} >{commentCount}</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.handleShared}>
                <Icon name="md-share" size={30} color="gray" />
              </TouchableOpacity>
              <Text style={styles.count} >Shared</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artisBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'grey',
  },
});
