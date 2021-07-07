import React, { Component } from 'react';
import axios from 'axios';

function updateFriend(friends, id, updateFriend){
  let index = 0;
  friends.forEach(function(friend){
    if(friend.id === id){
      friend[index] = updateFriend;
    }
    index++;
  });
  return friends;
}

function deleteFriend(friends, id){
  let newFriends = [];
  friends.forEach(function(friend){
    if(friend.id !== id){
      newFriends.push(friend);
    }
  });
  return newFriends;
}


export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      id: '',
      name: '',
      email: '',
      age: '',
      maxId: 0
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        let maxId = response.data[response.data.length-1].id;
        this.setState(() => ({ 
          friends: response.data,
          maxId: maxId
         }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addOrUpdateFriend = () => {

    if (this.state.name === '' || this.state.email === '' || this.state.age === '') {
      this.clearInputText();
      return
    }else{
      let id = 0;
      let requestType = "ADD";
      console.log("this.state.id: " + this.state.id + "; type: " + typeof this.state.id);
      if(this.state.id === ''){
        id = this.state.maxId;
      }else{
        id = this.state.id;
        requestType = "UPDATE";
      }
      let friend = {
        id: id,
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email
      }
      console.log(requestType);
      if(requestType === "ADD"){
        //make a POST Request
        axios
        .post("http://localhost:5000/friends", friend )
        .then(response => {
          console.log(response);
          this.clearInputText();
          this.setState({
            friends: [... this.state.friends, friend]
          });
        })
        .catch(err => console.log(err));
      }else if(requestType === "UPDATE"){
        //make a PUT Request
        axios
        .put(`http://localhost:5000/friends/${id}`, 
          friend )
        .then(response => {
          console.log(response);
          this.clearInputText();
          let friends = updateFriend(this.state.friends, id, friend);
          this.setState({
            friends: friends
          });
        })
        .catch(err => console.log(err));
      }
    }
  }

  updateInputText = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearInputText = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      id: ''
    });
  }

  incrementMaxId = () => {
    this.setState({
      maxId: this.state.maxId + 1
    });
  }

  fetchFriend = event => {
    let id = this.state.id;
    let clearNeeded = true;
    if(id !== ''){
      id = Number(id)-1;
      console.log(id);
      if(id > 0){
        console.log('**');
        if (id <= this.state.friends.length) {
          let friend = this.state.friends[id];
          console.log(friend);
          this.setState({
            name: friend.name,
            email: friend.email,
            age: friend.age,
            id: friend.id
          });
          clearNeeded = false;
        }
      }
    }
    if(clearNeeded){
      this.clearInputText();
    }
  }

  deleteFriends = () => {
    if(this.state.id !== ''){
      let newFriends = deleteFriend(this.state.friends, this.state.id);
      axios
        .delete(`http://localhost:5000/friends/${this.state.id}`)
        .then(response => {
          console.log(response);
          this.clearInputText();
          this.setState({
            friends: newFriends
          });
        })
      .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state.friends === null) {
      return <div>Loading friends...</div>;
    }

    //const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="friends-wrapper">
        <h1>These are my friends</h1>
         {this.state.friends.map(friend => (
          <div className="friend" key={friend.id} friend={friend.name} >{friend.name}</div>
        ))}

        <h1>Add a Friend</h1>
        <input type="text" name="name" className="formInputText" placeholder="name.." value={this.state.name} onChange={this.updateInputText} ></input>
        <input type="text" name="email" className="formInputText" placeholder="email.." value={this.state.email} onChange={this.updateInputText} ></input>
        <input type="text" name="age" className="formInputText" placeholder="age.." value={this.state.age} onChange={this.updateInputText} ></input>
        <button onClick={this.addOrUpdateFriend} type="button">Add/Update</button>
        <button onClick={this.clearInputText} type="button">Clear</button>
        <br />
        <input type="text" name="id" className="formInputText" placeholder="id of friend.." value={this.state.id} onChange={this.updateInputText} ></input>
        <button onClick={this.fetchFriend} type="button">Fetch</button>
        <button onClick={this.deleteFriends} type="button">Delete</button>
      </div>
    );
  }
}
