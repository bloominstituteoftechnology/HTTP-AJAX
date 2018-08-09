import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import FriendPage from './components/FriendPage';


class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
        .then(response => {
            console.log(response.data);
            this.setState({
                friends: response.data
            })
        })
}

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => (<Friends {...props} />)} />
        <Route path ="/friends/:id" render={(props) => (<FriendPage array={this.state.friends} {...props} />)} />
      </div>
    );
  }
}

export default App;
