import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendForm from './FriendsList/FriendForm';
import FriendContainer from './FriendsList/FriendContainer';


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
    event.preventDefault();
   this.setState ({newName: event.target.value});
  }

  ageHandler = event =>  {
    event.preventDefault();
    this.setState ({newAge: event.target.value});
   }

   emailHandler = event =>  {
    event.preventDefault();
    this.setState ({newEmail: event.target.value});
   }

  formFieldHandler = event => {
    event.preventDefault();
    const newId = this.state.friendList.length + 1;
    const newName= this.state.newName;
    const newAge= this.state.newAge;
    const newEmail= this.state.newEmail;
    
    this.setState({
      friendList: [
        ...this.state.friendList,
        {
          id:newId,
          name:newName,
          age: newAge,
          email: newEmail,
        },
        ]
      })

 

    }

  

  render() {
  
    return (
      
      <div className="friend-list">
      <FriendForm formFieldHandler={this.formFieldHandler} emailHandler={this.emailHandler} ageHandler={this.ageHandler} nameHandler={this.nameHandler}></FriendForm>
      <FriendContainer friendList={this.state.friendList}/>
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
      
      
      