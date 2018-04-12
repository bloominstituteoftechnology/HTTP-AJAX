import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      showUpdateFriend: false
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.error('This did not work', error);
    });
  }

handleName = (event) => {
  this.setState({ name: event.target.value }) };

handleAge = (event) => {
  this.setState({ age: event.target.value }) };

handleEmail = (event) => {
  this.setState({ email: event.target.value }) };

showUpdateFriend = () => {
    this.setState({ showUpdateFriend: !this.state.showUpdateFriend }); };

handleSubmit = event => {  
    const user = {
      name: this.state.name, age: this.state.age, email: this.state.email };

    axios
    .post('http://localhost:5000/friends', user)
    
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
    .catch(err => {
        console.error('Something went amiss', err);
    })
    this.setState( {name: '', age: '', email: ''} )
}

  deleteFriend = (friendId) => {
    // alert(friendId);
    axios
    .delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => {
      this.getFriends();
    })
    .catch(err => {
      console.log(err);
    });
  };

  updateFriend = (friendId) => {
    const friend = {};
    if (this.state.name !== '') {
      friend.name = this.state.name;
    }
    if (this.state.age !== '') {
      friend.age = this.state.age;
    }
    if (this.state.email !== '') {
      friend.email = this.state.email;
    }
    axios
    .put(`http://localhost:5000/friends/${friendId}`, friend)
    .then(response => {
      this.setState({ showUpdateFriend: false, name: '', age: '', email: ''})
      this.getFriends();
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is our friend list
        </p>
       
        <div>
          {this.state.friends.map((friend, index) => {
          return (
            <div key={friend.id} className="Friends">
                <h3> {`Name: ${friend.name}`} </h3>
                <div> {`Age: ${friend.age}`} </div>
                <div> {`Email: ${friend.email}`} </div>
                <button onClick={() => this.deleteFriend(friend.id)} type="submit">Delete Friend</button>
                <button onClick={this.showUpdateFriend} type="submit">Update Friend Info</button>
                  {this.state.showUpdateFriend ? (
                    <div> 
                      Name:
                        <input type="text" placeholder="Name" onChange={this.handleName} />
                      Age:
                        <input 
                          type="number" placeholder="Age" onChange={this.handleAge} />
                      Email:
                        <input type="text"  placeholder="Email"  onChange={this.handleEmail} />

                      <button onClick={() => this.updateFriend(friend.id)}>Update Friend </button>
                    </div>
                
               ) : null}
            </div>
        );
        })}
          </div>
       

        <div> 
            <form onSubmit={this.handleSubmit}>
                <label>
                  Add a new friend!
                    <ul>
                      Friend Name:
                        <input 
                          type="text"
                          placeholder="Name"
                          onChange={this.handleName}
                        />
                    </ul>
                    <ul>
                      Friend Age:
                        <input 
                          type="number"
                          placeholder="Age"
                          onChange={this.handleAge}
                        />
                    </ul>
                    <ul>
                      Friend Email:
                        <input 
                          type="text"
                          placeholder="Email"
                          onChange={this.handleEmail}
                        />
                    </ul>
                </label>
                <button type="submit">Add Friend</button>
            </form>
        </div>
        
      </div>
    );
  }
}

export default App;
