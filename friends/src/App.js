import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from "react-router-dom";
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {

  constructor(){
    super();
    this.state ={
      friends: []
    }
  }

componentDidMount(){
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response);
          this.setState({ friends: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }

    addToList = (obj) => {
    
      axios.post('http://localhost:5000/friends', obj)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  
    }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <FriendForm  addToList={this.addToList}/>
      </div>
    );
  }
}

export default App;
