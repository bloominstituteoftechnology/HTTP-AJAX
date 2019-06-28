import React from 'react';
import './App.css';
import FriendList from './component/friendList';
import FriendForm from './component/friendForm';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  
  sendPostFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
        .then(response => {
          this.setState({
              friends: response.data
          })
        })
        .catch(err => {
            console.log("Error: ", err);
        });
  }

  updateFriend = (friend) => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(response => {
          this.setState({
              friends: response.data
          })
        })
        .catch(err => {
            console.log("Error: ", err);
        });
  }

  deleteItem = (friend) => {
    axios.delete(`http://localhost:5000/friends/${friend.id}`)
        .then(response => {
          this.setState({
              friends: response.data
          })
        })
        .catch(err => {
            console.log("Error: ", err);
        });
  }


  componentDidMount(){
    axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(err => {
            console.log("Error: ", err);
        })   
  }

  

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} updateFriend={this.updateFriend} deleteItem={this.deleteItem} />
        <FriendForm sendForm={this.sendPostFriend} />
      </div>
    );
  }

}

export default App;
