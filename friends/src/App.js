import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";
import FriendForm from './FriendForm';
import firebase, {auth, provider} from './firebase';
import styled from 'styled-components';

const MessageDiv = styled.div`

max-width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
background-color: #282828;
color: white;
list-style: none; 
height: 55px;
border: 1px solid grey;
`
const LogButton = styled.button`
height: 55px;
width: 200px;
background-color: #363636;
color: white;
border: none;
cursor: pointer;
font-size: 22px;
`
const SignUpButton = styled.button`
height: 55px;
width: 250px;
background-color: #40e0d0;
color: white;
border: none;
cursor: pointer;
font-size: 22px;
`



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
         {this.state.user ? 
          <MessageDiv><div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '5px' }}><p style={{ paddingLeft: '10px', paddingRight:'15px', borderRight: '1px solid grey', fontSize: '28px', color: '#ff0080', fontWeight: 'bold' }}>ReactChat</p> <img style={{ width: '40px', height: '40px', paddingLeft: '15px', paddingRight: '10px' }} src={this.state.user.photoURL} /> <div style={{ display: 'block', margin: '0', padding: '0', paddingLeft: '5px' }}> <p style={{fontWeight: 'bold', fontSize: '28 px', textAlign:'left', margin: '3px', padding: '0'}}>Welcome, {this.state.user.displayName}!</p><p style={{color: 'grey', fontSize: '12px'}}>The Weather is Partly Cloudy today.</p> </div> </div><LogButton onClick={this.logout}>Logout</LogButton></MessageDiv>
           : <MessageDiv> 
            <p style={{ paddingLeft: '10px', fontSize: '28px', color:'#ff0080', fontWeight:'bold'}}>ReactChat</p> <div><LogButton onClick={this.login}>Login</LogButton> <SignUpButton >Sign up</SignUpButton></div>
          
          </MessageDiv>} 
      
        
        <FriendsList user={this.state.user} friends={this.state.friends} onChange={this.onChange} nameValue={this.state.first_name} emailValue={this.state.email} formSubmit={this.formSubmit}/>
       
      
      </div>
    );
  }
}

export default App;
