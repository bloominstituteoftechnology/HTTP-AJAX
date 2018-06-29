import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";
import FriendForm from './FriendForm';
import firebase, {auth, provider} from './firebase';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends : [],
        first_name: '',
        // age: 0,
        email: '', 
        user: null, 
        isLoggedIn: false,       
    }
   this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLoggedIn: true,
          user: user,
        });
      } else {
        this.setState({
          isLoggedIn: false,
          user: null,
        });
      }
    });
  }
  componentDidMount(){

    let db = firebase.database().ref('friends');
    db.on('value', snapshot => {
      let records = snapshot.val();
      let newRecords = Object.entries(records);
      console.log(newRecords);
      this.setState ({friends: newRecords}); 
  })  
}


login() {
auth.signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    this.setState({
      user:user,
      isLoggedIn: true,
    });
  });

}
logout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
  this.setState({isLoggedIn:false})

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
    profile_pic: 'https://robohash.org/distinctiominuseos.png?size=50x50&set=set1',
    email: this.state.email,
  }
let friendly = firebase.database().ref('friends');
friendly.push(newFriend);
this.setState({
  firstname: '',
  email: '',
})
}

  
  render() {
   
    return (
 
      <div className="App">
        {this.state.user ? <h1>Welcome, {this.state.user.displayName}!</h1> : <h1>Please sign in below.</h1>}
        
        {this.state.user ? <button onClick = {this.logout}>Logout</button> : <button onClick = {this.login}>Login</button>}
        
        <FriendsList friends={this.state.friends}/>
        <FriendForm onChange = {this.onChange} nameValue = {this.state.first_name} emailValue = {this.state.email} formSubmit={this.formSubmit}/>
      
      </div>
    );
  }
}

export default App;
