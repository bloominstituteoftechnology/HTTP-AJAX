import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Friends from './components/Friends'


const url = `http://localhost:5000/friends`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Route
         exact path='/'
         render={props => (
           <Friends
            {...props}
            friends={this.state.friends}
            loading={this.state.loading} />
         )}
        />
      </div>
    );
  }
}

export default App;
