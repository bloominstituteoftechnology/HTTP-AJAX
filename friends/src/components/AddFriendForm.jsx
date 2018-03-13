import React, {Component} from 'react';
import axios from 'axios';

class AddFriendForm extends Component {
   constructor() {
   super();
      this.state = {
         id: "",
         name : "",
         age : "",
         email: "",
      }
   }
   //function to update name from form to state object
   nameChange = event => {
      this.setState({ name: event.target.value });
    }
   //function to update age from form to state object
   ageChange = event => {
      this.setState({ age: event.target.value });
   }
    //function to update email from form to state object
   emailChange = event => {
      this.setState({ email: event.target.value });
   }

    //submit completed form to server
   handleSubmit = event => {
      event.preventDefault();

      const friend = {
         name : this.state.name,
         age : this.state.age, 
         email : this.state.email,
      }

      //send form data to server and log response
      axios.post('http://localhost:5000/friends', friend).then(res => {
         console.log(res);
         console.log(res.data);
      });
   }
   render() {
      return (
         <form className="friendsForm" onSubmit={this.handleSubmit}>
            <div>
               <label > Full Name: </label>
               <input type="text" id="nameInput" name="name" onChange={this.nameChange}/>
            </div>
            <div>
               <label > Age: </label>
               <input type="text" id="ageInput" name="age" onChange={this.ageChange}/>
            </div>
            <div>
               <label > Email: </label>
               <input type="email" id="emailInput" name="email" onChange={this.emailChange}/>
            </div>
            <div>
               <button type="submit" id="submitButton"> Submit </button>
            </div>
         </form>
      )
   }
}

export default AddFriendForm;