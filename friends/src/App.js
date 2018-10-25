import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/friendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      // newFriend: {
      //   name: '',
      //   age: '',
      //   email: ','
      // }
     }
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
    .then(response => {
    this.setState({friends: response.data })
  })
  .catch(error => console.log('Error!'))
}







  render() { 
    return (  
      <div className="App">
        {this.state.friends.map(friends => (
        <FriendList key={friends.id} friends={friends} />
         ))}
      </div>
    );
  }
}
     


      
 
export default App;
