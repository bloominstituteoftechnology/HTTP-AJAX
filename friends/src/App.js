import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

// Inside your React application, create a component to display the list of friends coming from the server.
// Add a form to gather information about a new friend.
// Add a button to save the new friend by making a POST request to the same endpoint listed above.
// Each friend should have the following properties:
// {
//   name: should be a string,
//   age: should be a number,
//   email: should be a string,
// }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState({
        list : response.data
      })
      
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendsList list={this.state.list}></FriendsList>
      </div>
    );
  }
}

export default App;
