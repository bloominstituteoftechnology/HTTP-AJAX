import React, {Component} from 'react';
import './Friend.css';
import axios from 'axios';
class Friend extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      name: '',
      age:  '',
      email: ''
    }
  }
  deleteFriend = (id, goBack) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(() => {
      this.props.updateList();
      goBack();
    })
    .catch(err => {
      console.log(err);
    })
  }
  updateValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateFriend = (friend) => {
    const update = {}
    if (this.state.name !== '') {
      update.name = this.state.name;
    }
    if (this.state.age !== '') {
      update.age = this.state.age;
    }
    if ( this.state.email !== '') {
      update.email = this.state.email;
    }
    axios.put(`http://localhost:5000/friends/${friend.id}`, update)
    .then(() => {
      this.setState({showForm: false, name: '', age: '', email: ''});
      this.props.updateList();
    })
  }
  render(){
    const {friends} = this.props;
    const friend = friends.find((friend) => friend.id === parseInt(this.props.match.params.id, 10));
    return (
      <div>
        <h1>Your Friend: </h1>
        <h2>{friend.name}</h2>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <div className='buttonContainer'>
          <button className='button' onClick={() => this.deleteFriend(friend.id, this.props.history.goBack)}>Delete</button>
          <button className='button' onClick={() => this.setState({showForm: !this.state.showForm})}>Update</button>
        </div>
        {this.state.showForm ? (
          <form  className='friendFieldContainer' >
            <p>update your friend: </p>
            <input
              className='updateField'
              name='name'
              type='text'
              value = {this.state.name}
              onChange={this.updateValues}
              placeholder='name'
            />
            <input
              className='updateField'
              name='age'
              type='number'
              value = {this.state.age}
              onChange={this.updateValues}
              placeholder='age'
            />
            <input
              className='updateField'
              name='email'
              type='text'
              value = {this.state.email}
              onChange={this.updateValues}
              placeholder='email'
            />
            <button type='button' onClick={(e) => this.updateFriend(friend)}> Submit </button>
          </form>
        ): null}
      </div>
    );
  }
}
export default Friend;
