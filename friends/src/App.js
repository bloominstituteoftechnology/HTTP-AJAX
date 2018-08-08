import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:5000/friends',
      friendsArray: []
    }
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(response => response.data)
      .then(data => this.setState({ friendsArray: data }))
      .catch(e => console.error(e));
  }

  handleAddFriend() {
    const newId = this.state.friendsArray[this.state.friendsArray.length - 1].id + 1;

    axios.post(this.state.url, {
      id: newId,
      name: `testing${newId}`,
      age: Math.floor(Math.random() * 100),
      email: `testing${newId}@gmail.com`
    })
      .then(response => response.data)
      .then(data => this.setState({ friendsArray: data }))
      .catch(e => console.error(e));
  }

  render() {
    console.log(this.state.friendsArray)
    return (
      <div className="App">
        <Friend friendsArray={this.state.friendsArray} />
        <PostButton handleAddFriend={this.handleAddFriend.bind(this)}/>
      </div>
    );
  }
}

function Friend(props) {
  return (
    <div>
      { props.friendsArray !== [] 
          ? props.friendsArray.map(friend => {
              const { id, name, age, email } = friend;
              return (
                <div>
                  <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{email}</li>
                  </ul>
                </div>
              )})   
          : <p>Loading</p>
      }
    </div>
  )
}

function PostButton(props) {
  return (
    <div>
      <button onClick={props.handleAddFriend}>Add a new friend</button>
    </div>
  )
}

export default App;
