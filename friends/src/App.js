import React, { Component } from 'react';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import './App.css';

import axios from 'axios';
//const axios = require('axios');

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          friends: [],
          newFriend: ''
        }
      }

       componentDidMount() {
          axios
           .get('http://localhost:5000/friends')
             .then(response => {
               this.setState({friends: response.data})
            
            

          } )
            .catch((err) => console.err(`Error! ${err}`)  )

        }
        
        
          
         
          



  render() {

    return (
      <React.Fragment>

      

          <FriendsList friends={this.state.friends} />
          <FriendForm  /> 

      </React.Fragment>
    );
    }
  }
  

export default App;
