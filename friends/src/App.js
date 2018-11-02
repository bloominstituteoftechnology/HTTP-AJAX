import React from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form'
import Friends from './Friends'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err))
  }

  addFriend = (response) => {
    this.setState({
      friends: response
    })
	
  }
  
  updateFriends = (response) => {
    this.setState({
      friends: response
    })
  }

  
  deleteFriend = (id) => {
    return () => {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(response => 
          this.setState({
            friends: response.data
        }, console.log(this.state.friends)))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="App">
        <Friends updateFriends={this.updateFriends} friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <Form addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;