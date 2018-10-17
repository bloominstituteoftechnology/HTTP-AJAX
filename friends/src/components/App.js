import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      },
      url: 'http://localhost:5000',
    }
  }

  componentDidMount() {
    axios.get(`${this.state.url}/friends`,)
      .then(({data}) => this.setState({friends: data}))
      .catch(err => console.error(err));
  }

  addNewFriend = (ev) => {
    ev.preventDefault();
    let empty = false;
    Object.values(this.state.newFriend).forEach(n => n === ''?empty=true:null);
    if(empty) return;

    axios.post(`${this.state.url}/friends`, this.state.newFriend)
      .then(({data}) => this.setState({friends: data, newFriend: {name: '', age: '', email: ''}}))
      .catch(err => console.error(err));
  }

  changeHandler = (ev) => {
    ev.preventDefault();
    this.setState({ newFriend: { ...this.state.newFriend, [ev.target.name]: ev.target.value}});
  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading Friends...</h1>
    }
    return (
      <div className="App">
        <form onSubmit={this.addNewFriend}>
          <input type="text" name="name" placeholder="Name" value={this.state.newFriend.name} onChange={this.changeHandler}/>
          <input type="text" name="age" placeholder="Age" value={this.state.newFriend.age} onChange={this.changeHandler}/>
          <input type="text" name="email" placeholder="Email" value={this.state.newFriend.email} onChange={this.changeHandler}/>
          <button>Add Friend</button>
        </form>
        {this.state.friends.map(friend => {
         return (
          <div key={friend.id}>
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
