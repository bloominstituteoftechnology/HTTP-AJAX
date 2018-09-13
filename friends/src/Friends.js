import React from 'react';
import axios from 'axios';

export default class Friends extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
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
        age: parseInt(this.state.age, 10),
        email: this.state.email,
      }
    )
    .catch(err => console.log(new Error(err)))
  }

  render() {
  
    return (
      <div>
      <form>
        <input onChange={this.onChangeHandler} name="name" type="text" placeholder="Name"/>
        <input onChange={this.onChangeHandler} name="age" type="text" placeholder="Age" />
        <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" />
        <button type="submit" onClick={this.newFriendPost}>Submit</button>
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