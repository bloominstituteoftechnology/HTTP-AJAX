import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendList';
import FriendsForm from './components/FriendForm';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      friendList: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    //when the request has success
    .then(res=>this.setState({friendList: res.data}))
    //when the request has failed
    .catch(err=>err);
  }
  
  addFriend = (event,friend) =>{
    event.preventDefault();
    axios
    .post(`http://localhost:5000/friends/`,friend)
    .then((res)=>{ this.setState({friendList: res.data}) })
    .catch((err)=>{console.log(err)})
  }
  
  
    render() {
      return (
        <div >
          <FriendsForm addFriend={this.addFriend}/>
         <FriendsList friendsArray={this.state.friendList} />
        </div>
      );
    }
  }
export default App;
