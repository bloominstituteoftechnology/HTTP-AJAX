import React, { Component } from 'react';
import './App.css';
// import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';

const url =
  "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true
    }
  }
  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  remove(id) {
    axios.delete(`${url}/${id}`)
      .then((response) => {
        console.log(response)})
        .catch((error) => {
        console.log(error)});
    window.location.reload();
  }
  render() {
    return (
      <div className="App">
        <h2>Lambda Friends ... <br/>
            Assemble!!</h2>
        <div className="friendHug">
          {this.state.friends.map(friend=><FriendsList key={friend.id}>
                                            <p>{friend.name}</p>
                                            <p>age:{friend.age}</p>
                                            <button onClick={()=> this.remove(friend.id)}>remove</button>
                                            </FriendsList>)}
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
