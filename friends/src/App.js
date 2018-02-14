import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class FriendsList extends Component {
    state = {
        friends: [],
        friendData: {
            name: "",
            age: "",
            email: ""
        },
        friendName: '',
        friendAge: '',
        friendEmail: ''
    };

    handleSubmit = event => {
      event.preventDefault();
      // this.serverRequest = axios.post("http://localhost:5000/friends", {
      //   : this.name.
      // })
      axios
      .post('http://localhost:5000/friends', this.state.friendData)
      .then(response => {
        console.log('response from post', response);
        this.setState({
            name:'',
            age: '',
            email: '',
        });
        this.loadFriends();
      })
      .catch(error => {
          console.error('error saving the data');
      });
    };

    handleInputChange = (event) => {
      console.log('input name:', event.target.name)
    //   const { name, value } = event.target; >>>>>(same as 2 lines below)
      const name = event.target.name;
      let value = event.target.value;

        if(event.target.type === 'number') {
            value = Number(value);
        }

      this.setState({ [name] : value });
    }
    render() {
        return (
            <div>
                <h1>Friends Proj</h1>
                <div className = "forms">
                <form onSubmit={this.handleSubmit}>
                  <label> Name:</label>
                  <input 
                    type="text" 
                    name="name"
                    value={this.state.friendData.name} 
                    onChange={this.handleInputChange}/>
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label> Age:</label>
                  <input 
                    type="text" 
                    name="age"
                    value={this.state.friendData.age} 
                    onChange={this.handleInputChange}/>
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label> Email:</label>
                  <input 
                    type="text"
                    name="email"
                    value={this.state.friendData.email} 
                    onChange={this.handleInputChange}/>
                  <button type="submit"> Add Friend </button>
                </form>
                </div>
                <ul className="friend-grid">
                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id} className="friend">
                                <div>{`Name: ${friend.name}`}</div>
                                <div>{`Age: ${friend.age}`}</div>
                                <div>{`Email: ${friend.email}`}</div>
                                <button onClick={() => {this.removeFriend(friend.id)}}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    removeFriend = (id) => {
        const endpoint = `http://localhost:5000/friends/${id}`;
        axios
        .delete(endpoint)
        .then((response) => {
            console.log('response from delete', response);
            this.setState({ friends: response.data })
        })
        .catch(() => {
            console.error('error deleting');
        });
    }

    loadFriends = () => {
        const data = axios
        .get('http://localhost:5000/friends')
        .then(response => {
            const friends = response.data;
    
            this.setState({ friends: friends })
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('there was an error', error)
        });
            console.log('data',data);
    }

    componentDidMount() {
        this.loadFriends();
    }
}

export default FriendsList;
