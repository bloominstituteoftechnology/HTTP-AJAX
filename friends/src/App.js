import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List';
import Add from './Add';


class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
    id: ''
  }


  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  deleteFriend = (id) => {
    return () => {
      axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends: friends})
      })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
  

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {axios.get('http://localhost:5000/friends')
        .then(res => {
          const friends = res.data;
          this.setState({ friends: friends})
        })})
      .catch(function (error) {
        console.log(error);
      });


      document.getElementById("addForm").reset();

  }

  


handleUpdate = () => {
  axios.put(`http://localhost:5000/friends/${this.state.id}`, {
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  })
  .then(res => {axios.get('http://localhost:5000/friends')
    .then(res => {
      const friends = res.data;
      this.setState({ friends: friends})
    })})
  .catch(function (error) {
    console.log(error);
  });


  document.getElementById("addForm").reset();

}


  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
  }

  render() {
    return (
      <div>
        <Add submit={this.handleSubmit} change={this.handleChange} update={this.handleUpdate} />
        <List friends={this.state.friends} delete={this.deleteFriend}/>
      </div>
    )
  }
}

export default App;
