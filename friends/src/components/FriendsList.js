import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FriendsList extends Component {
        constructor(props){
          super(props)
          this.state = {
            firends: []
          }
        }
            componentDidMount() {
              axios.get(`http://localhost:5000/friends`)
                .then( response => this.setState({ friends: response.data }))
                .then( () => {console.log(this.state)})
                
              }
              
          
        
        render() {
          return (
            <div className="App">
            {this.state.friends.map(friend => (
              <FriendDetails key={friend.id} friend={friend} />
            ))}
            </div>
          );
        }
      }
      
      function FriendDetails({ friend }) {
        return(
            <Link to={`/`}>{friend.name}</Link>
        )
      }
 
export default FriendsList;