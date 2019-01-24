import React, { Component } from 'react';
import axios from 'axios';
import { Route  } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // friends: []
    }
  }

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(response => {
  //         this.setState({friends: response.data})
  //     })
  //     .catch(error => {
  //         console.error('Server Error', error);
  //     });
  // }

  

  render() {
    return (
      <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route exact path='/friends' component={FriendsList} />
      

      {/* <FriendsList friends={this.state.friends} /> */}
      </div>
    );
  }
}

export default App;
