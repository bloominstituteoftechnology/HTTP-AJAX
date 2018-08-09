import React from 'react';
import axios from 'axios';

export default class FriendForm extends React.Component {
        
        state ={
            name: '',
            age: '',
            email: '',
        }
    
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    addNewFriend = (event) => {
        // event.preventDefault();
        const newFriendObj = {
            name: this.state.name,
            age: this.state.age,
            email:this.state.email
           };
           axios.post('http://localhost:5000/friends', newFriendObj)
           .then(response => {
               this.setState({
                   friends: response.data,
                    name : '',
                    age: '',
                    email: ''
               })
           })
           .catch((err) => console.log(err))
    }
     
     componentDidMount() {
        axios.get(`http://localhost:5000/friends`).then(response => {
            this.setState({
               friends: response.data
            });
        });

     }
          
 
     render() {
        return (
          <div>
            <form onSubmit={this.addNewFriend}>
              <label>
                Friend Name:
                <input type="text" name="name" onChange={this.handleChange} />
                <input type="number" name="age" onChange={this.handleChange} />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
              <button type ="submit">Add Friend</button>
            </form>
          </div>
        )
      }
    }



