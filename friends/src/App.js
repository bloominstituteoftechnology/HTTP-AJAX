import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";
import FriendForm from './FriendForm';
import firebase from './firebase';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      friends : [],
        first_name: '',
        // age: 0,
        email: '',         
    }
  }

  componentDidMount(){
    let db = firebase.database().ref('friends');
    db.on('value', snapshot => {
      let records = snapshot.val();
      let newRecords = Object.entries(records);
      console.log(newRecords);
      this.setState ({friends: newRecords});
     
      // firstfifty.map(friend => {
      // this.setState({friends: snapshot.val()});
      // })
   
  })
}

// axiosGet = () => {
//     axios
//     .get('http://localhost:5000/friends')
//     .then( res =>{
//       this.setState({friends:res.data})
//     }
//   )
// }

onChange = e => {
  e.preventDefault();
  console.log(typeof(e.target.value));
  this.setState({[e.target.name]: e.target.value });
}

formSubmit = e =>{
  e.preventDefault();
  let newFriend = {
    first_name : this.state.first_name,
    // age: Number(this.state.age),
    email: this.state.email,
  }
let friendly = firebase.database().ref('friends');
friendly.push(newFriend);
  // axios.post('http://localhost:5000/friends', newFriend)
  //   .then( res => {
  //     this.axiosGet()
  //   }
  // )

}
  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <FriendForm onChange = {this.onChange} formSubmit={this.formSubmit}/>
      </div>
    );
  }
}

export default App;
