import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Navigation from './components/Navigation'
import Routes from './components/Routes';

class App extends Component {
  constructor () {
    super();

    this.state = {
      friends: '',
      currentname: '',
      currentage: '',
      currentemail: '',
      PostMessage: '',
    }

    this.state = {
      friends: []
  };
  }

  formChange = (event) => {
    this.setState({
      [`current${event.currentTarget.name}`]: event.currentTarget.value
    });

    console.log(event.currentTarget.value)
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState({friends:response.data})
    })
  }

  addFriend = (event, props) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/friends', {
      name: this.state.currentname,
      age: this.state.currentage,
      email: this.state.currentemail}).then(response => {
        this.setState({friends:response.data});
        console.log(props);
      }).catch(error => {console.log(error)})}
  
  render() {
    return (
      <div className="App">      
      <Navigation />

      <Routes formChange = {this.formChange} addFriend = {this.addFriend} friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;
