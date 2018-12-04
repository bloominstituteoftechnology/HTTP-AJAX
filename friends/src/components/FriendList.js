import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      email: '',
      age: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addFriend = () => {

    if (this.state.name === '' || this.state.email === '' || this.state.age === '') {
      this.clearInputText();
      return
    }else{
      let friend = {
        id: this.state.friends.length + 1,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
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
      age: ''
    });
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
        <button onClick={this.addFriend} type="button">Add</button>
        <button onClick={this.clearInputText} type="button">Clear</button>
      </div>
    );
  }
}
