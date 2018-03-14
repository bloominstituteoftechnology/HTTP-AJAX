import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import PropTypes from 'prop-types';

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: ''
    }
  }

componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`there was an error getting friends: ${error}`);
    });
}

handleChange = (event) => {
    const { name , value } = event.target;
    //console.log(event.target);
    this.setState({ [name]: value })
    console.log(this.state);
}

addFriend = (event) => {
    event.preventDefault()
    const { name, age, email } = this.state;   
    axios.post('http://localhost:5000/friends', {
        name,
        age,
        email
      })
      .then(response => {
          console.log(`this is response from addFriend ${response}`);
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log(`there was an error posting friends: ${error}`);        
      });
}

removeFriend = (id) => {
  console.log(`the id that has been removed is - ${id}`);    
  axios.delete('http://localhost:5000/friends/' + id, {
      id
    })
    .then(response => {
        console.log(`this is a response from removeFriend ${response}`);
      this.setState({ friends: response.data});
    })
    .catch(error => {
      console.log(`there was an error removing friends: ${error}`);        
    });
}

render() {
    return (
      <div>
        <div className="friend-title">List of Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map((friend, index) => {
            return (
              <li key={index} className="friend">
                <div className="friend-name">{`Name: ${friend.name}`}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
                <button type="submit" >update</button>
                <button type="submit" onClick={() => {this.removeFriend(friend.id);}}>delete</button>
              </li>
            );
          })}
            </ul>
            <div className="friend">
            <form>
                <div className="friend-name">Name:
                <input name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter Name"/>
                </div>
                <div className="friend-age">Age:
                <input name="age" value={this.state.age} onChange={this.handleChange} type="text" placeholder="Enter Age"/>
                </div>
                <div className="friend-email">Email:
                <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Enter Email"/>
                </div>
                <button type="submit" onClick={this.addFriend}>Add</button>
            </form>
            </div>
      </div>      
    );
  }    
}

FriendList.defaultProps = {    
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
       
};

export default FriendList;
