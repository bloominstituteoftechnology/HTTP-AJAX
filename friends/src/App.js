import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './Components/Friends/Friends';
import Friend from './Components/Friend/Friend';
import Home from './Components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleNewFriend = e => {
    this.setState( { [e.target.name]: e.target.value});
  };

  addFriend = (e) => {
    const friend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    };
    axios.post('http://localhost:5000/friends', friend).then(savedFriend => {
      console.log(savedFriend);
      this.setState({ name: '', email: '', age: '' });
    }).catch(err => {
      console.log(err);
    });

  };

  render() {
    return <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/friends" render={props => <Friends {...props} friends={this.state.friends} handleNewFriend={this.handleNewFriend} addFriend={this.addFriend} state={this.state} />} />
          <Route exact path="/friends/:id" component={Friend} />
      </div>;
  }
}

export default App;
