import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

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
    }
  }
handleChange = e => {
  this.setState ({
    friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value,
    }
  });
}

handleNumberChange = e => {
  let input = 0;
  if (e.target.value===null){
    input = undefined;
  }else {
    input = parseInt(e.target.value, 10);
  }
  this.setState({
    friend:{
      ...this.state.friend,
      [e.target.name]: input,
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
        <Route exact path='/friend' component={FriendList} />
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