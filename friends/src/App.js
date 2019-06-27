import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendForm from './components/FriendForm';

class App extends Component {
  state = {
    friends: [],
    friend: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  }
  


  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response =>  this.setState( {friends: response.data } ))
      .catch(err => console.log('Error:', err));
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState( { friend: { ...this.state.friend, [event.target.name]: event.target.value } } )
  }

  addFriend = event => {
    event.preventDefault();
    let newfriend =  this.state.friend;
    console.log(newfriend);
    this.setState( { friends: [...this.state.friends, newfriend], friend: "" } )
  }


  render() {
    return (
      <div>
        <Route 
          exact 
          path="/" 
          render={ (props) =>
            <FriendList 
              {...props} 
              data={this.state.friends} 
            /> }
        />
        <Route 
          path="/"
          render={ (props) =>
            <FriendForm 
              {...props} 
              data={this.state.friends} 
              friend={this.state.friend}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
            /> }
         />
      </div>
    );
  }
}

export default App;
