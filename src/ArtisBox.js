import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtisBox extends Component {
  render() {
    const { image, name, likes, comments } = this.props.artist;

    return (
      <View style={styles.artisBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info} >
          <Text style={styles.name} >{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="grey" />
              <Text style={styles.count} >{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="grey" />
              <Text style={styles.count} >{comments}</Text>
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
    marginHorizontal: 30,
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
