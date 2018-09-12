import React from 'react';
import axios from 'axios';

export default class Friends extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: null,
      email: '',
      id: Math.floor(Math.random() * 1000)
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  newFriendPost = () => {
    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        id: this.state.id
      }
    )
    .then((res) => console.log(res))
    .catch(err => console.log(new Error(err)))
  }

  render() {
  
    return (
      <div>
      <form onSubmit={this.newFriendPost}>
        <input onChange={this.onChangeHandler} name="name" type="text" placeholder="Name"/>
        <input onChange={this.onChangeHandler} name="age" type="text" placeholder="Age" />
        <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" />
        <button onClick={this.newFriendPost}>Submit</button>
      </form>
        {
          this.props.friends.map(friend => {
            return (
              <React.Fragment key={friend.id}>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}