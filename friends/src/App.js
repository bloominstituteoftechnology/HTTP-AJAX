import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }

  // getItemById = id => {
  //   axios
  //     .get(`http://localhost:3333/itemById/${id}`)
  //     .then(response => this.setState({ activeItem: response.data }));
  // };



  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <div>
        <FriendsList
        friendly = {this.state.friends}
        />
        </div>
      </div>
    );
  }
}

export default App;
