import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom'; 
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

const URL = "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    axios
        .get(URL)
        .then(response => {
          console.log(response);
          this.setData(response.data);
        })
        .catch(err => {
          console.log(err);
        })
      }
    
  setData = data => {
    this.setState({friends: data});
  }


  render() {
    return (
        <div className='App'>
          <h1>Friends</h1>
          <Route exact path='/' render={props => <FriendsList {...props} friends={this.state.friends} />} />
          <Route path='/friends/:id' component={Friend} />
        </div>
    );
  }
}

export default App;
