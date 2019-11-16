import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';
import FriendEdit from './Components/FriendEdit';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data, id: response.data.length }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data}));
      })
      .catch(err => {
        console.error(err);
      });
  }

  makeObject = () => {
    const { id, name, age, email } = this.state;
    const newObj = {
      id: id,
      name: name,
      age: Number(age),
      email: email
    }
    return newObj;
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addInput = obj => {
    // if (this.emptyCheck()) {  //ensures no empty inputs or invalid formats
    const { friends } = this.state;
    friends.push(obj);
    this.saveInput(obj);
    this.setState({ friends, id: obj.id, name: '', age: '', email: '' });
    // }
  };

  saveInput = obj => {
    axios
      .post('http://localhost:5000/friends', obj)
      .then(response => {
        this.getFriends();
      })
      .catch(err => {
        console.err(err);
      });
  };

  deleteInput = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(reponse => {
        this.getFriends();
      })
      .catch(err => {
        console.err(err);
      });
  };

  emptyCheck = () => {  //this is meant to lock the add friend button when all fields are empty
    const name = this.state.name;
    const age = this.state.age;
    const email = this.state.email;
    let result = true;

    if (name.trim() === "") result = false;  //blank name
    else if (age.trim() === "" || 13 > age > 120) result = false;  //reasonable age
    else if (email.trim() === "") result = false;  //would have been messy on a single line
    else if (email.indexOf('@') < 0) result = false;  //this will check email address
    else if (email.indexOf('.com') < 0) result = false;  //for some minor format
    return result;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={(props) => <FriendList {...props} saveInput={this.saveInput} deleteInput={this.deleteInput} friends={this.state.friends} newFriend={this.state.newFriend} onClick={this.addInput} />
            } />
          <Route path="/addFriend/:id"
            render={(props) => <FriendEdit {...props} getFriends={this.getFriends} friends={this.state.friends} addInput={this.addInput} updateInput={this.updateInput} />
            } />
          <Route path="/addFriend"
            render={(props) => <FriendForm addInput={this.addInput} id={this.state.id + 1} updateInput={this.updateInput} />
            } />
        </Switch>
      </div>
    );
  }
}

export default App;