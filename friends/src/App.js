import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';

const serverURL = 'http://localhost:5000/friends';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: '',
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


    if(this.state.friendName === '' || this.state.friendAge === '' || this.state.friendEmail === ''){
      return alert('Please Fill Out All Inputs');
    }
    
    
    let friend = {  
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail};

    axios
      .post(serverURL, friend)
      .then(res => this.setState({ 
        friends: res.data,
        friendName: '',
        friendAge: '',
        friendEmail: ''
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
        friendEmail: '' 
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
      updatingFriendId: updatingFriend.id
    })

  }

  updateFriend = () => {
    let friend = {
      id: this.state.updatingFriendId,
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail
    }
    axios
      .put(`${serverURL}/${this.state.updatingFriendId}`, friend)
      .then(res => this.setState({
        friends: res.data,
        friendName: '',
        friendAge: '',
        friendEmail: '',
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
      {this.state.formUpdating ? 
      (<form onSubmit={this.updateFriend} className="add-friend-form">
              <input autocomplete='off' type="text" name="friendName" 
          placeholder="Friend Name" value={this.state.friendName}
          onChange={this.handleChange} />
        <input type="text" name="friendAge" 
          placeholder="Friend Age" value={this.state.friendAge}
          onChange={this.handleChange} />
        <input type="email" name="friendEmail" 
          placeholder="Friend Email" value={this.state.friendEmail}
          onChange={this.handleChange} />
        <input type="submit" style={{display: 'none'}} />
        <div className="add-friend-submit-container">
          <div className="add-friend-submit" onClick={this.updateFriend}>Update Friend</div>
          <div className="add-friend-submit delete-warn" onClick={this.deleteFriend}>DELETE</div>
        </div>
        </form>
        )
      :
      (<form onSubmit={this.addFriend} className="add-friend-form" >
              <input autocomplete='off' type="text" name="friendName" 
          placeholder="Friend Name" value={this.state.friendName}
          onChange={this.handleChange} />
        <input type="text" name="friendAge" 
          placeholder="Friend Age" value={this.state.friendAge}
          onChange={this.handleChange} />
        <input type="email" name="friendEmail" 
          placeholder="Friend Email" value={this.state.friendEmail}
          onChange={this.handleChange} />
        <input type="submit" style={{display: 'none'}} />
        <div className="add-friend-submit" onClick={this.addFriend}>Add Friend</div>
      </form>)
      }
      {/* <form onSubmit={this.addFriend} className="add-friend-form" > */}
        {/* <input autocomplete='off' type="text" name="friendName" 
          placeholder="Friend Name" value={this.state.friendName}
          onChange={this.handleChange} />
        <input type="text" name="friendAge" 
          placeholder="Friend Age" value={this.state.friendAge}
          onChange={this.handleChange} />
        <input type="email" name="friendEmail" 
          placeholder="Friend Email" value={this.state.friendEmail}
          onChange={this.handleChange} />
        <input type="submit" style={{display: 'none'}} />
        <div className="add-friend-submit" onClick={this.addFriend}>Add Friend</div>
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
