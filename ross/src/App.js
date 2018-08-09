import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList.js';
import Form from './components/Form/Form.js';
import './App.css';
// https://github.com/LambdaSchool/HTTP-AJAX/pull/275
class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then((response)=>{
        this.setFriendsToState(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  setFriendsToState = (f) => {
    let curr = this.state.friends;
    this.setState({
      friends: f
    })
  }

  handleSubmit = (input) => {
    axios.post(`http://localhost:5000/friends`, {
      name: input.name,
      age: input.age,
      email: input.email })
      .then(res => {
        this.setState({friends: res.data})
      })
  };

  handleDelete = (input) => {
    axios.delete(`http://localhost:5000/friends/${input}`).then(res => {
        this.setState({ friends: res.data })
      });
  }

  handleEdit = (input) => {
    axios.put(`http://localhost:5000/friends/${input.id}`,{
      name:input.name, age: input.age, email: input.email
    }).then(res => {
      this.setState({ friends: res.data });
    })
  }

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
        <FriendList friends={this.state.friends} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
