import React, { Component } from 'react';
import './App.css';
import axios from "axios";

const friendsData = 'http://localhost:5000/friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: '',
      name: '',
      age: '',
      email: '',
      friendName: '',
    }
  }

  handleOnChange = e => { this.setState({[e.target.name]: e.target.value}) };

  componentDidMount() {
    axios.get(friendsData).then(response => {
      this.setState({data: response.data});
    });
  }

  addNewFriend = e => {
    e.preventDefault();

    axios.post(friendsData, {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    })
    .then(response => {
      this.setState({data: response.data})
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({name: '', age: '', email: ''})
  }

  deleteFriend = e => {
    e.preventDefault();
    let chooseName = this.state.id;
    axios.delete(`http://localhost:5000/friends/${chooseName}`)
    .then(response => {
      this.setState({data: response.data})
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({id: ''})
  }

  render() {
    return (
      <div className="App">
        <section className="friends-list">
          <h1>List</h1>
          {this.state.data.map((item, index) => <h3 key={index}>{item.name}</h3>)}
        </section>
        <hr />
        <section>
          <div>
            <h1>Add A New Person</h1>
            <form onSubmit={this.addNewFriend} action="submit">
              <label htmlFor="name">Enter Name:</label>
              <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
              <label htmlFor="age">Enter Age:</label>
              <input id="age" type="number" name="age" value={this.state.age} onChange={this.handleOnChange} />
              <label htmlFor="email">Enter Email:</label>
              <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleOnChange} />
              <button>Submit</button>
            </form>
          </div>
          <div>
            <h1>Delete A Person</h1>
            <form onSubmit={this.deleteFriend} action="submit">
              <label htmlFor="id">Enter Id:</label>
              <input id="id" type="number" name="id" value={this.state.id} onChange={this.handleOnChange} />
              <button>Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
