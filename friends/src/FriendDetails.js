import React, { Component } from 'react';
import axios from 'axios';




export default class FriendsList extends Component {
    constructor(){
      super()
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
      }
    }
  
    componentDidMount(){
      this.getUsers()
    }
  
    getUsers = () => {
      axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data, name: '', age: '', email: ''})
        })
        .catch(err => console.log(err))
    } 

    postUsers = (event) => {
        const {name, age, email} = this.state
        axios.post('http://localhost:5000/friends', {name, age, email})
        .then(response =>{
            return this.setState({friends: response.data});
        })
        .catch(error =>{
            return `There's an error!`;
        })
        
    }

    handleChange = event => {
       { this.setState({ [event.target.name]: event.target.value })};
      }; 
    

    render() {
        return(
            <div>
            <div>
                <h3>Join my Slack Channel!</h3>
                <form onChange={this.HandleChange}>
                    <label>Name:
                        <input type="text" onChange={this.handleChange}  />
                    </label>
                    <label>Age:
                    <input type="number" onChange={this.handleChange}   />
                    </label>
                    <label>Email:
                    <input type="email" onChange={this.handleChange}  />
                    </label>
                    <button onClick = {this.postUsers}>Submit Info</button>
                </form>
            </div>
            <div>
                
                <ul className = "friends">
                    {this.state.friends.map(friend => {
                        return (
                            <li key = {friend.id} className = "friend">
                            <div>
                            <p>Name - {friend.name}</p>
                            <p>Age - {friend.age}</p>
                            <p>Email - {friend.email}</p>
                            <br/>
                            </div>
                    </li>
                        )
                            
                    })}
                    
                </ul>
            </div>
            </div>

            
        )
        
    }
    
}