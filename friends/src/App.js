import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor () {
    super();

    this.state = {
      currentname: "",
      currentage: "",
      currentemail: ""
    }

    this.state = {
      friends: []
  };
  }

  formChange = (event) => {
    this.setState({
      [`current${event.currentTarget.name}`]: event.currentTarget.value
    });

    console.log(event.currentTarget.value)
  }

  formSubmit = () => {
    
  }

  addFriend(event) {

  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
        this.setState({friends:response.data})
    })
}

  render() {
    return (
      <section className="App">
      <h1>Friends</h1>
      <AddFriendForm formChange={this.formChange}/>
      <Friends friends={this.state.friends}/>

      </section>
    );
  }
}

export default App;
