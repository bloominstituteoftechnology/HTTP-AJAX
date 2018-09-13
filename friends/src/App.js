import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
//import { runInThisContext } from 'vm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friend: {
        id: 0,
        name: '',
        age: undefined,
        email: '',
      },
    };
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Route path='/' component={FriendList} />
        <Route
          path='/'
          render={props =>(
            <FriendForm
            {...props}
            friend={this.state.friend}
            handleChange={this.handleChange}
            handleNumberChange={this.handleNumberChange} />
          )}
        />
      </div>
    );
  }
}

export default App;
