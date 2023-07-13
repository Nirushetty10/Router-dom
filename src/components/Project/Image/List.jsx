import React, { Component } from 'react';
import "./List.scss"

class List extends Component {
  render() {
    return (
      <img src={this.props.link} alt=''/>
    )
  }
}

export default List