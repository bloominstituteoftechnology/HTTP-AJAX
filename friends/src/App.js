import React from 'react';
import axios from 'axios'

import Friends from './component/Friends/Friends'
import NewFriend from './component/Friends/NewFriend'
import './App.css';
import { format } from 'url';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      friends: '',
      name: '',
      email: '',
      age: '',
      updating: false,
      updatingId: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends') 
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err))
  }

  submitFriend = e => {
    e.preventDefault();
    this.setState({
      friends: [
        ...this.state.friends,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          age: e.target.age.value,
          id: Date.now()
        }
      ],
      name:'',
      email:'',
      age:'',
    })
    axios.post('http://localhost:5000/friends', {
        name: e.target.name.value,
        email: e.target.email.value,
        age: e.target.age.value,
        id: Date.now()
    })
  }

  updateFriend = (e,friend) => {
    this.setState({
      name: friend.name,
      email: friend.email,
      age: friend.age,
      updating: true,
      updatingId: friend.id
    })
  }

  submitUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${this.state.updatingId}`, {
          name: this.state.name,
          email: this.state.email,
          age: this.state.age,
      })
      .then(res => this.setState({
          friends: res.data,
          name: '',
          email: '',
          age: '',
          updating: false
      }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data })
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
      <NewFriend 
        handleChange={this.handleChange}
        submitFriend={this.submitFriend} 
        handleUpdate={this.submitUpdate}
        nameValue={this.state.name}
        ageValue={this.state.age}
        emailValue={this.state.email}
        updating={this.state.updating}
      />
      {this.state.friends ? 
      <Friends 
        updateFriend={this.updateFriend} 
        deleteFriend={this.deleteFriend} 
        friendsList={this.state.friends}
      /> : <h2>loading...</h2>}
      </div>
    );
  }
}

export default App;
