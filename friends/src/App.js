import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendForm from './components/FriendForm';
import UpdateFriend from './components/UpdateFriend'

class App extends Component {
  state = {
    friends: [],
    friend: {
      id: Date.now(),
      name: "",
      age: "",
      email: "",
      errorMessage: null
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

    axios.post("http://localhost:5000/friends", newfriend)
      .then(response => {

        this.setState( { friends: response.data,
          friend: {
            id: Date.now(),
            name: "",
            age: "",
            email: "",
            errorMessage: null
          } 
        })
      })

      .catch(err => {
        console.log(err);
      })
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
          exact
          path="/addfriend"
          render={ (props) =>
            <FriendForm 
              {...props} 
              data={this.state.friends} 
              friend={this.state.friend}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
            /> }
         />
         <Route 
          path="/updatefriend/:id"
          render={ (props) =>
            <UpdateFriend 
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
