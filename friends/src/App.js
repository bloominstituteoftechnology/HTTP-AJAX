import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

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
