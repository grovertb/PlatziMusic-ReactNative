import React, { Component } from 'react';
import { ListView } from 'react-native';

import ArtisBox from './ArtisBox';

export default class ArtisList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.artists),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtisBox artist={artist} />}
      />
    );
  }
}
