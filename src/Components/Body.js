import React, { Component } from 'react';

export default class BodyPage extends Component {
  render() {
    return (
      <div> {this.props.children}</div>
    );
  }
}
