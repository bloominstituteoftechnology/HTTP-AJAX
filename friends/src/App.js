import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Lambda from './Lambda_Symbol.png'

class App extends Component {
 constructor() {
   super();
   this.state = {
     friend: [],
     moreFriends: []
   }
 }

componentDidMount() {
 axios.get(`http://localhost:5000/friends`)
 .then((resp) => this.setState({friend:[...resp.data]}))
 .catch(err => console.log(err));
}
render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={Lambda} className="App-logo" alt="logo" />
         <h1 className="App-title">Lambda Friends</h1>
       </header>
       <div>
       <ul className="friend-grid">
         {this.state.friend.map(friend => {
           return (
             <li key={friend.id} className="friend">
               <div className="friend-name">{friend.name}</div>
               <div className="friend-age">{`Age: ${friend.age}`}</div>
               <div className="friend-email">{`Email: ${friend.email}`}</div>
             </li>
           );
         })}
       </ul>
     </div>
     </div>
   );
 }
}
export default App;