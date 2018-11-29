import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

const serverURL = 'http://localhost:5000/friends';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: '',
      friendPhone: '',
      friendNotes: '',
      updatingFriendId: 0,
      formUpdating: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addFriend = (ev) => {
    ev.preventDefault();


    if(this.state.friendName === ''){
      return alert('At least give your friend a name...');
    }
    

    let friend = {  
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail,
      notes: this.state.friendNotes,
      phone: this.state.friendPhone};

    axios
      .post(serverURL, friend)
      .then(res => this.setState({ 
        friends: res.data,
        friendName: '',
        friendAge: '',
        friendEmail: '',
        friendPhone: '',
        friendNotes: ''
        }))
  }

  deleteFriend = () => {

    axios
      .delete(`${serverURL}/${this.state.updatingFriendId}`)
      .then(res => this.setState({ 
        friends: res.data,
        formUpdating: false,
        updatingFriendId: 0,
        friendName: '',
        friendAge: '',
        friendEmail: '',
        friendPhone: '',
        friendNotes: ''
      }))

  }

  update = (id) => {
    let updatingFriend = this.state.friends.find(friend => {
      return friend.id === id;
    });
    this.setState({ 
      friendName: updatingFriend.name,
      friendAge: updatingFriend.age,
      friendEmail: updatingFriend.email,
      formUpdating: true,
      updatingFriendId: updatingFriend.id,
      friendPhone: updatingFriend.phone,
      friendNotes: updatingFriend.notes
    })

  }

  updateFriend = () => {
    let friend = {
      id: this.state.updatingFriendId,
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail,
      phone: this.state.friendPhone,
      notes: this.state.friendNotes
        }
    axios
      .put(`${serverURL}/${this.state.updatingFriendId}`, friend)
      .then(res => this.setState({
        friends: res.data,
        friendName: '',
        friendAge: '',
        friendEmail: '',
        friendPhone: '',
        friendNotes: '',
        formUpdating: false,
        updatingFriendId: 0
      }))
  }

  componentDidMount() {
    axios.get(serverURL)
    .then(res => {
      console.log(res);
      this.setState({friends: res.data})
    })
  }
  
  render() {
    return (
      <>
      <FriendForm 
        updateFriend={this.updateFriend} 
        addFriend={this.addFriend}
        deleteFriend={this.deleteFriend}
        appState={this.state}
        handleChange={this.handleChange}
      />
      {/* <form onSubmit={this.state.formUpdating ? this.updateFriend : this.addFriend} className="add-friend-form" >
        <input autocomplete='off' type="text" name="friendName" 
          placeholder="Friend Name" value={this.state.friendName}
          onChange={this.handleChange} />
        <input type="text" name="friendAge" 
          placeholder="Friend Age" value={this.state.friendAge}
          onChange={this.handleChange} />
        <input type="email" name="friendEmail" 
          placeholder="Email Address" value={this.state.friendEmail}
          onChange={this.handleChange} />
        <input type="phone" name="friendPhone" 
          placeholder="Phone Number" value={this.state.friendPhone}
          onChange={this.handleChange} />
        <textarea type='textarea' name='friendNotes' 
          placeholder="notes about friend" value={this.state.friendNotes}
          onChange={this.handleChange} />
        <input type="submit" style={{display: 'none'}} />
        <div className="add-friend-submit-container">
        {this.state.formUpdating ? 
          <>
          <div className="add-friend-submit" onClick={this.updateFriend}>UPDATE</div>
          <div className="add-friend-submit delete-warn" onClick={this.deleteFriend}>DELETE</div>
          </>
          :
          (<div className="add-friend-submit" onClick={this.addFriend}>Add Friend</div>)
        }
        </div>
      </form> */}


      <div className="App">
      {this.state.friends.map(friend => (
          <Friend friend={friend} 
            key={friend.id} 
            update={this.update}
            />))}
      </div>
      </>
    );
  }
}

export default App;
