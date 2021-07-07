import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import NewFriend from './NewFriend'

export default class Friends extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [] ,
        name: '',
        age: '',
        email: '',
        updateName: '',
        updateAge: '',
        updateEmail: ''
      };
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }

    handleChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    handleSubmit = (e) => {
        const { name, age, email  } = this.state;
        axios
            .post('http://localhost:5000/friends', { "name":name, "age":age, "email":email })
            .then(response => {
                this.setState( { name, age, email : response.data } );
              })
              .catch(error => {
                console.error('Server Error', error);
            });     
    }

    handleUpdate = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
    
    render() {
        const newFriendFormData = new FormData();
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                  <Friend key={friend.id} friend={friend} handleUpdate={this.handleUpdate} updateName={this.state.updateName}
                  updateEmail={this.state.updateEmail} updateAge={this.state.updateAge} />
                ))}
                <NewFriend handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        );
    }
}

function Friend({ friend, key, handleUpdate, updateName, updateAge, updateEmail }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-card">
        <h2>{name}</h2>
          <div className="email">
            Email: <em>{email}</em>
          </div>
          <div className="age">
            Age: <strong>{age}</strong>
          </div>
          <br/>
        <form>
          <label htmlFor="update-name">Update Name:
            <input type="text" name="updateName" id="update-name" value={updateName} onChange={handleUpdate} />
          </label>
          <label htmlFor="update-age">Age:
            <input type="number" name="updateAge" id="update-age" value={updateAge} onChange={handleUpdate} />
          </label>
          <label htmlFor="update-email">Email:
            <input type="text" name="updateEmail" id="update-email" value={updateEmail} onChange={handleUpdate} />
          </label>
          <button type="submit">Update Friend</button>
        </form>
          {/*<UpdateFriend onUpdate={onUpdate} id={key} />*/}
      </div> 
    );
} 
