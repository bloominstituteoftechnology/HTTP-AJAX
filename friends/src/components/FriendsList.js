import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {

    state = {
        friends: [],
        name:'',
        age:'',
        email:''
    };

    newName = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    newAge = (event) => {
      this.setState({
        age: event.target.value
      })
    }

    newEmail = (event) => {
      this.setState({
        email: event.target.value
      })
    }
    
    addFriend = () => {
      axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(function (response) {
        console.log(response.data);
      })
    };

    
    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(()=> ({ friends: response.data }));
        })
        .catch(error => {
            console.error(`Server Error: ${error}`);
        });
    }

    render() {
        return (
          <div>
            <div className="friend-title"> My Lambda Friends</div>
            <ul className="friend-grid">
              {this.state.friends.map(friend => {
                return (
                  <li key={friend.id} className="friend">
                    <div className="friend-name">{friend.name}</div>
                    <div className="friend-age">{`Age: ${friend.age}`}</div>
                    <div className="friend-email">{`Email: ${friend.email}`}</div>
                  </li>
                );
              })}
            </ul>
            <div>
              <form className = 'form'>
              <input className = 'form-item' type="text" onChange={this.newName} placeholder="Friends name" />
              <input className = 'form-item' type="number" onChange={this.newAge} placeholder="Friends age" />
              <input className = 'form-item' type="text" onChange={this.newEmail} placeholder="Friends email" />
              <button className = 'form-item' onClick = {this.addFriend}> Add Friend </button>
              </form>
              </div>
          </div>
        );
      }
    }
    
    export default FriendsList;
    