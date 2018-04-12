import React, { Component } from 'react';
import FriendsDisplay from './Components/FriendsListDisplay/FriendsListDisplay';
import SubmitNewFriend from './Components/SubmitNewFriend/SubmitNewFriend';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Friend from './Components/Friend/Friend';
class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[],
      name: '',
      age: '',
      email: '',
    }
  }
  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  addNewFriend = (event) => {
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email}
    axios.post(`http://localhost:5000/friends`, friend)
    .then(() => {
      this.updateList();
    })
    this.setState({name: '', age: '', email: ''})
  }
  updateList = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
    })
  }
  componentDidMount(){
    this.updateList();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' render={(props) => <FriendsDisplay {...props} {...this.state}/>} />
          <Route path='/:id' render={(props) => <Friend {...props} updateList={this.updateList} friends={this.state.friends}/>}/>
        </header>
        <Route exact path='/' render={(props) => <SubmitNewFriend {...this.state} updateValue={this.updateValue} addNewFriend={this.addNewFriend}/>}/>
      </div>
    );
  }
}
export default App;
