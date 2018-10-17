import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './FriendsList/Friend';
import FriendForm from './FriendsList/FriendForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendList: [],
      updatedList: [],
      newName:'',
      newAge:'',
      newEmail:''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friendList: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  nameHandler= event =>  {
   this.setState ({newName: event.target.value});
  }

  ageHandler = event =>  {
    this.setState ({newAge: event.target.value});
   }

   emailHandler = event =>  {
    this.setState ({newEmail: event.target.value});
   }

  formFieldHandler = event => {
    event.preventDefault();
    const newId = this.state.friendList.length + 1;
     
    this.setState({
      updatedList: [
        ...this.state.friendList,
        {
          id:newId,
          name:newName,
          age: newAge,
          email: newEmail,
        },
        ]
      })

      {this.state.updatedList.map(friend => (
        <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
        ))}

    }

  

  render() {
  
    return (
      
      <div className="friend-list">
      <FriendForm formFieldHandler={this.formFieldHandler} emailHandler={this.emailHandler} ageHandler={this.ageHandler} nameHandler={this.nameHandler}></FriendForm>
      {this.state.friendList.map(friend => (
      <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
      ))}
      
      </div>
    );
  }
}

export default App;

/*
 


<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/
      
      
      