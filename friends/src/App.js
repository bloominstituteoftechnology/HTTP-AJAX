import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
	  friends: [],
	};		

	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
				</p>
				  <div>
           <div className="friend-title">Lambda Friends</div>
         <ul className="friend-grid">
            {this.state.friends.map(friend => {
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
   componentDidMount() {
       let data = axios.get('http://localhost:5000/friends')
         .then((response) => {
             console.log('data', response.data);
             this.setState({friends: response.data});
             })
         .catch((error) => {
             console.log('there was an error', error);
         });
 
        console.log('data', data);

		 /* const data = axios.post('http://localhost:5000/friends')
       .then((response) => {
        console.log('data', response.data);
				this.setState({friends: response.data});
        })
        .catch(function (error) {
         console.log('there was an error', error);
      });*/ 	
   }
}

export default App;
