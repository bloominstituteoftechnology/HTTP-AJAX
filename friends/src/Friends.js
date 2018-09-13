import React from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

export default class Friends extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      isUpdating: false,
      newData: null,
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

  isUpdating = () => {
    this.setState({isUpdating: true})
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
                <button onClick={() => this.setState({isUpdating: true})}>Update</button>
                <button onClick={() => this.props.deleteFriend(friend.id)}>Delete {friend.name}</button>
              </React.Fragment>
            )
          })
        }
        {this.state.isUpdating ? <UpdateForm friends={this.props.friends} updateFriend={this.props.updateFriend} /> : null}
      </div>
    )
  }
}