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
        id: null,
        name: '',
        age: null,
        email: '',
      },
    };
  }

  // componentDidMount(){
  //     //fetch data from the api
  //     axios
  //       .get('http://localhost:5000/friends')
  //       .then(response => {
  //         //this.setState({doggos: response.data.message})
  //         console.log(response);
  //         //this.setState({doggos: response.data})
  //       })
  //       .catch(err => console.log(err));
  //     //set our state with the new data
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Route path='/' component={FriendList} />
        <Route path='/' component={FriendForm} />
      </div>
    );
  }
}

export default App;
