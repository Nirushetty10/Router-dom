import React, { Component } from 'react';
import {About, Home} from "../Demo/Project1/Project1"

export default class Task extends Component {
  render() {
    const login = this.props.data;
    return (
      <div>
        {(login) ?  <Home /> : <About />}
      </div>
    )
  }
}
