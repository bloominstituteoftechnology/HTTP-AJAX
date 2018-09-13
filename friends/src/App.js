import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor () {
    super();

    this.state = {
      friends: "",
      currentname: "",
      currentage: "",
      currentemail: "",
      lastPostMessage: "",
    }

    this.state = {
      friends: []
  };
  }

  formChange = (event) => {
    this.setState({
      [`current${event.currentTarget.name}`]: event.currentTarget.value
    });

    console.log(event.currentTarget.value);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
        this.setState({friends:response.data})
    })
}

  addFriend = (event) => {
    axios.post('http://localhost:5000/friends', {
      name: this.state.currentname,
      age: this.state.currentage,
      email: this.state.currentemail
    }).then(response => {console.log(response);}).catch(error => {
      console.log(error);
      axios.get('http://localhost:5000/friends').then(response => {
        this.setState({friends:response.data})
    })
    });
};



  render() {
    return (
      <section className="App">
      <h1>Friends</h1>
      <AddFriendForm formChange={this.formChange} addFriend={this.addFriend}/>
      <Friends friends={this.state.friends}/>

      </section>
    );
  }
}

export default App;