import React, { Component } from 'react';
import FriendList from './component/Friend/FriendList';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        loading: true,
        name: '',
        age: '',
        email: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  newFriend = e => {
    e.preventDefault();
    axios.post(url,{
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
         .then(response => console.log(response))
  }
  componentDidMount(){
      axios
          .get(url)
          .then(person => {
              this.setState({friends: person.data, loading: false})
          })
          .catch(err => console.log('Server Error', err));
  }
  render(){
      return(
          <div>
              <FriendList friends={this.state.friends} />
              <form onSubmit={this.newFriend}>
                <input name="name" placeholder='name' onChange={this.handleChange} />
                <input name="age" placeholder='age' onChange={this.handleChange} />
                <input name="email" placeholder='email' onChange={this.handleChange} />
                <button>Save</button>
              </form>
          </div>
         
      )
    }
}

export default App;
