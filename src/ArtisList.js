import React, { Component } from 'react';
import { ListView } from 'react-native';

import ArtisBox from './ArtisBox';

export default class ArtisList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  componentDidMount() {
    this.updateDatSource(this.props.artists);
  }

  componentWillReceiveProps(newProps) {
    // cambia cada que
    if (newProps.artists !== this.props.artists) {
      this.updateDatSource(newProps.artists);
    }
  }

  updateDatSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    });
  };

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtisBox artist={artist} />}
      />
    );
  }
}
