import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>This is a home page</p>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>This is a About page</p>
            </div>
        )
    }
}
class Career extends Component {
    render() {
        return (
            <div>
                <h2>Career</h2>
                <p>This is a Career page</p>
            </div>
        )
    }
}

export default class Project1 extends Component {
  render() {
    return (
      <div>Project1</div>
    )
  }
}

export {Home, About,Career}
