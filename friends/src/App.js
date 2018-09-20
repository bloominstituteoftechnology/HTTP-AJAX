import React, { Component, Fragment } from 'react';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList'
import './App.css';


const axios = require('axios');

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          friendsList: [],
          inputData: ''
        }
      }

      componentDidMount() {
        
        axios
          .get('http://localhost:5000/friends')
            .then(response)
      }



  render() {
    return (
      <React.Fragment>
          <FriendsList />
          <FriendForm />
      </React.Fragment>
    );
  }
}

export default App;
