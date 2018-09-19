import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friends from './Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  render() {
    return <Friends friendsProps={this.state.friends} />;
  }
}

export default App;
