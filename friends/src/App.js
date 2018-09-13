import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
//import { runInThisContext } from 'vm';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: undefined,
        email: '',
      },
    };
  }
  
  componentDidMount(){
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({friends: response.data})
        })
        .catch(err => console.log(err));
}

  handleChange = event =>{
    //console.log('event.target.name');
    this.setState({
      friend:{
        ...this.state.friend,
        [event.target.name]: event.target.value,
      }
    });
  }

  handleNumberChange = event =>{
    let input = 0;
    if(event.target.value===null){
      input = undefined;
    }else{
      input = parseInt(event.target.value, 10);
    }
    this.setState({
      friend:{
        ...this.state.friend,
        [event.target.name]: input,
      }
    })
  }

  handleAddNewFriend = event =>{
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
          this.setState({friends:response.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Route
          path='/'
          render={props=>(
            <FriendList
              {...props}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path='/'
          render={props =>(
            <FriendForm
              {...props}
              friend={this.state.friend}
              handleChange={this.handleChange}
              handleNumberChange={this.handleNumberChange}
              handleAddNewFriend={this.handleAddNewFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
