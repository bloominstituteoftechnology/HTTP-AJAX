import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import Friends from './Friends/Friends';
import FriendCard from './Friends/FriendCard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
       name: '',
       age: '',
       email: '',
      updatedFriend: [],
     
    };    
    // name: '';
    // age: '';
    // email: '';

  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      // console.log(response.data);
      this.setState({updatedFriend: response.data})
      
    })
    .catch(err => {
      console.log(err);
    });
  };

  handleNameInput = e => {
    this.setState({ [e.target.name]: e.target.value});
    //console.log(this.state.name)
  };
  // // handleAgeInput = e => {
  // //   this.setState({ [e.target.age]: e.target.value});
  // //   console.log(this.state.age)
  // // };
  // handleEmailInput = e => {
  //   this.setState({ [e.target.email]: e.target.value});
  //   console.log(this.state.email)
  // };

  saveFriendData = () => {
    const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios.post('http://localhost:5000/friends', newFriend)
    .then(saveFriend => {
      this.getFriends();
      
      //console.log(saveFriend);
    })
    .catch(err => {
      console.log(err);
    });
  };

  updateFriendData = friendId => {
    //console.log('This is running' + friendId + this.state.name)
    // const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
    // newFriend.map((friend) => {
    //   // {friend}
    //   const {name, age, email } = friend;
    //   //console.log(name);
    //   //return <h3> Name is: {name} Age is: {age} Email is: {email} </h3> ;
    //   console.log(friend + friendId);
    // })
    this.state.updatedFriend.map((friend) => {
      //console.log(friend.name + this.state.name); // this is the array of friends
       //if (this.state.name !== '') {
     //friend.name = this.state.name;
     console.log(friend.name + 'this is work' + this.state.name);
     if (this.state.name !== '') {
      friend.name = this.state.name;
    }
    if (this.state.age !== '') {
      friend.age = this.state.age;
    }
    if (this.state.email !== '') {
      friend.email = this.state.email;
    }
     axios.put(`http://localhost:5000/friends/${friendId}`, {
       //key : value
       name: friend.name, age: friend.age, email: friend.email
     })
      //console.log(friend)
      .then(Friend => {
        console.log(Friend);
         //Friend.name = this.state.name;
        this.getFriends();
      })
    })
  };
     // }
  //   // if (this.state.age !== '') {
  //   //   friend.age = this.state.age;
  //   // }
  //   // if (this.state.email !== '') {
  //   //   friend.email = this.state.email;
  //   // }
  //   console.log(friend + friendId); // calling object object
     //axios.put(`http://localhost:5000/friends/${friendId}` )
     
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // })
    
 
     // calling object object
    //const updatedFriend = {};
     
  //     // {friend}
  //     //const {name, age, email } = friend;
  //     //console.log(name);
  //     //return <h3> Name is: {name} Age is: {age} Email is: {email} </h3> ;
  //   //const updatedFriend = {};
    
  //   // if (this.state.name !== '') {
  //   //   friend.name = this.state.name;
  //   // }
  //   // if (this.state.age !== '') {
  //   //   friend.age = this.state.age;
  //   // }
  //   // if (this.state.email !== '') {
  //   //   friend.email = this.state.email;
  //   // }
  //   console.log(friend + friendId); // calling object object
  //   axios.put(`http://localhost:5000/friends/${friendId}`)
  //   .then(Friend => {
      
  //     this.getFriends();
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // })
  
  

  deleteFriendData = friendId => {
    //console.log(friendId);
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(deleteFriend => {
      this.getFriends();
      //console.log(deleteFriend);
    })
    .catch(err => {
      //console.log(err);
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
        </header>
        <h3> Ente a new friend below or update an existing one,  </h3>
        <h3> using Name, Age, and Email! </h3>
        {/* {console.log(this.state)} */}
        <input type="text" onChange={this.handleNameInput} placeholder= 'Name' name='name' value={this.state.name} />
        <input type="number" onChange={this.handleNameInput} placeholder= 'Age' name='age' value={this.state.age} />
        <input type="text" onChange={this.handleNameInput} placeholder= 'Email' name='email' value={this.state.email} />
        <button name="button" type="submit" onClick={this.saveFriendData}> Submit </button>
        <div>
        {/* <Route exact path="/" component={Friends} />
        <Route path="/FriendCard" component={FriendCard} /> */}
        </div>
        <h2 class='MyFriends'> My Friends Are </h2>
        {this.state.updatedFriend.map(friend => {
          const {name, age, email } = friend;
          return (
            <div key={friend.id}>
              <h3> Name: {name} Age: {age} Email: {email} </h3> ;
              <button class= 'delete' onClick={() => this.deleteFriendData(friend.id)}> delete friend </button>
              <button name="button" type="submit" onClick={() => this.updateFriendData(friend.id)}> Update </button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
