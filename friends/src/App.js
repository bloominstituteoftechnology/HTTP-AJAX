import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import FriendCard from './components/FriendCard';
import EditForm from './components/EditForm';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
        newFriend: {
          name: '',
          age: 0,
          email: '',
          location: ''
      },
      editedFriend: {}
    }
  }

  handleChange = (e) => {
    this.setState({newFriend: {...this.state.newFriend, [e.target.name]: e.target.value }})
  }

  addFriend = () => {
    console.log(this.state.newFriend);
    Axios
    .post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      console.log(response);
      this.setState({friends: response.data, newFriend: {}});
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  editFriend = id => {
    Axios
    .put(`http://localhost:5000/friends/${id}`, this.state.editedFriend)
    .then(response => {
      console.log(response);
      this.setState({friends: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteFriend = id => {
    Axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response);
      this.setState({friends: response.data});
    })
  .catch(err => {
    console.log(err);
  })
  }
  
  componentDidMount() {
    Axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
      <Route exact path='/' render={(props) =><FriendsList {...props} 
      friends={this.state.friends} deleteFriend={this.deleteFriend} toggleForm={this.toggleForm} showForm={this.state.showEditForm} />} />
    <Route path='/newfriend' render={(props) =><FriendForm {...props} 
    newFriend={this.state.newFriend} 
    textHandler={this.handleChange} 
    addFriend={this.addFriend} 
    />}/>
    <Route path='/friend/:id' render={(props) =><FriendCard {...props} editFriend={this.editFriend}
    deleteFriend={this.deleteFriend}/>} toggleForm={this.toggleForm} showForm={this.state.showEditForm}/>
    <Route path='/edit/:id' render={(props) => <EditForm {...props} editFriend={this.editFriend}/>} />
      </div>
    );
  }
}

export default App;
