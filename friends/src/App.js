import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log('There was an error gettings friends: ${error}');
    })}

  newFriendName = (event) => {
    this.setState({ newName: event.target.value});
  };

  newFriendAge = (event) => {
    this.setState({ newAge: event.target.value})
  };

  newFriendEmail = (event) => {
    this.setState({ newEmail: event.target.value})
  };

  addFriend = (event) => {
    axios.post('http://localhost:5000/friends', {
      name:this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    })
    this.setState({
      newName: '',
      newAge: '',
      newEmail: ''
    })
  };
  
  render() {
    return (
      <div>
        <div className='Title'>Lambda Friends</div>
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
        <form onSubmit= {this.addFriend}>
          <div>
            <input type='text'
            onChange= {this.newFriendName} 
            placeholder= 'Add a new friend' 
            value={this.state.newName} />
          </div>
          <div>
            <input type='number' 
            onChange= {this.newFriendAge}
            placeholder= 'Add a new age' 
            value= {this.state.newAge}/>
          </div>
          <div>
            <input type='text' 
            onChange= {this.newFriendEmail}
            placeholder= 'Add a new email' 
            value= {this.state.newEmail}/>
          </div>
            <button>Submit</button>
        </form> 
      </div>
    )
  };
};

export default App;
