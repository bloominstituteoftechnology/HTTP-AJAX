import React from 'react';
import axios from 'axios';

export default class FriendForm extends React.Component {
    state ={
        name: '',
        age: '',
        email: '',
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value, [event.target.age]: event.target.value, [event.target.email]: event.target.value})
    };

    

     handleSubmit = event => {
         event.preventDefault();
     }
    
     addNewFriend = (event) => {
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email:this.state.email
           }
    }
     
     componentDidMount() {
        axios.get(`http://localhost:5000/friends`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
        }
 
     render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Friend Name:
                <input type="text" name="name" onChange={this.handleChange} />
                <input type="number" name="age" onChange={this.handleChange} />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
              <button type="submit">Add Friend</button>
            </form>
          </div>
        )
      }
    
}



