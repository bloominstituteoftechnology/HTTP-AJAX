import React from 'react';
import axios from 'axios';
import './FriendList.css';
import AddFriend from './AddFriend';

const blankFormValues = {
  name: '',
  age: '',
  email: ''
};

export default class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      editingFriend: null,
      isEditing: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        const friends = res.data;
        this.setState({ friends })
      })
  }

  handleChange = event => {
    this.setState({ friend: { ...this.state.friend, [event.target.name]: event.target.value } })
  }

  handleSubmit = () => {
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(res => {
        this.setState({ friends: res.data, friend: blankFormValues })
      })
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map(friend => (
            <div className='friend' key={friend.id}>
              <li><span>Name:</span> {friend.name}</li>
              <li><span>Age:</span> {friend.age}</li>
              <li><span>Email:</span> {friend.email}</li>
              <button onClick={event => this.deleteFriend(event, friend.id)}>Delete</button>
            </div>  
          ))}
      </ul>
      <AddFriend handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>   
    )     
  }

}