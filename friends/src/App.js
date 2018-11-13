import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from "./components/FriendForm";



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [{
        id: '',
        name: '',
        age: '',
        email: ''
      }],
        name: '',
        age: '',
        email: ''
    };

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('from CDM '  , response.data);
        this.setState({friends: response.data});
      })
      .catch(error => console.log('ERROR: ', error));
  }

      // don't need 'ev' passed in
  addNewFriend = () => {
   // ev.preventDefault();          // don't need
 //   if(this.state.name) {         // don't need
      axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        this.setState({friends: response.data, name: '', age: '', email: ''})
      })
      .catch(error => console.log('ERROR: ', error));
 //   }       // don't need
  };

  handleInput = ev => {
    this.setState({[ev.target.name]: ev.target.value});
    console.log('from handleInput', {[ev.target.name]: ev.target.value});

  };


  deleteFriend = (friend) => {
     axios.delete(`http://localhost:5000/friends/${friend}`)
       .then( () => {
         // this.setState({friends: response.data});
         this.addNewFriend();
       })
       .catch(error => console.log('ERROR: ', error));
   };

  updateFriend = friend => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data, friend: {
            name: '',
            age: '',
            email: ''
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };




  render() {
    return (
      <div className="App">

        <h1 className = 'titleHeader'> {"\u2764"}{"\u2665"}{"\u2665"}{"\u00a0"}
              dats my Bestie List
          {"\u00a0"}{"\u2665"}{"\u2665"}{"\u2764"}
         </h1>

        <div className = 'friendlist-container'>
        {this.state.friends.map( friend => (
          <FriendList key = {friend.email} friend = {friend} deleteFriend = {this.deleteFriend} />

          )
        )}
        </div>


        <div className = 'friendform-container'>
          <FriendForm
            addNewFriend = {this.addNewFriend}
            input_name = {this.state.name}
            input_age = {this.state.age}
            input_email = {this.state.email}
            handleInput = {this.handleInput}
          />

        </div>

      </div>
    );
  }
}



export default App;
