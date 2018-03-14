import React, { Component } from 'react';
import axios from 'axios';



class NewFriendForm extends Component {

    constructor() {
      super();
      this.state = {
    
            name: '',
            age: '',
            email: '',
       
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.addFriend = this.addFriend.bind(this);  
    };

    handleNameChange(event) {
        this.setState({
          
          name: event.target.value
          
        });
      }
    
      handleAgeChange(event) {
        this.setState({
          
            age: event.target.value
          
        });
      }
    
      handleEmailChange(event) {
        this.setState({
          
            email: event.target.value
          
        });
      }




    addFriend = (event) => {
        const {name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', {
    
                name: name,
                age: age,
                email: email
                
        })  
        
            .then((response)=> {
                this.setState({
                    
                        name: '',
                        age: '',
                        email: '',   
                    
                })
            })
    
            .catch((error)=> {
                console.log("Something isn't right bro")
            })
           
      }


  
      render() {
        return (
          <div>
    
      <form onSubmit={this.addFriend} >
        <input type='text' onChange= {this.handleNameChange} placeholder='Enter name' value={this.state.name}/> <br /><br />
        <input type='text' onChange= {this.handleAgeChange} placeholder='Enter age' value={this.state.age}/> <br /><br />
        <input type='text' onChange= {this.handleEmailChange} placeholder='Enter email' value={this.state.email}/><br /><br />
    
        <input type='submit' value='Submit'/>
        </form>
          </div>
        );
      }

}

export default NewFriendForm;