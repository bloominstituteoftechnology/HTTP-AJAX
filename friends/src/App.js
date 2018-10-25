import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      name: '',
      age: '',
      email: ''
     }
  }
  componentDidMount () {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value} 
    )
  }
  
  addFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    axios.post('http://localhost:5000/friends', newFriend)
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err))
  }

  render() { 
    return ( 
    <div>
        <div>{this.state.friends.map((friend, key) => {
          return (
            <div key={key}>
              Number {friend.id} is {friend.name}. They are {friend.age} years old and thier email is {friend.email}. You should reach out more.
            </div>
          )
        })

        }
      </div>
      <form>
        <input type="text" onChange={this.changeHandler} name='name' value={this.state.name} placeholder='name'></input>
        <input type="text" onChange={this.changeHandler} name='age' value={this.state.age} placeholder='age'></input>
        <input type="text" onChange={this.changeHandler} name='email' value={this.state.email} placeholder='email'></input>
      </form> 
      <button onClick={this.addFriend}>Add Friend</button>
    </div>);
  }
}
 
export default App;
