import React, { Component } from 'react';
import {
  ListView,
  Text,
} from 'react-native';

import Comment from './Comment'

export default class CoomentList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  componentDidMount() {
    this.updateDatSource(this.props.comments);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.comments !== this.props.comments) {
      this.updateDatSource(newProps.comments);
    }
  }

  updateDatSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    });
  };

  render() {
    const comment = this.props.comment
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(comment) => {
          return (
              <Comment text={comment.text} avatar={comment.userPhoto} />
          )
        }}
      />
    );
  }
}
