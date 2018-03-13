import React, {Component} from 'react';
import axios from 'axios';

class AddFriendForm extends Component {
   constructor() {
   super();

   }

   render() {
      return (
         <form className="friendsForm" onSubmit={this.handleSubmit}>
            <div>
               <label > Full Name: </label>
               <input type="text" id="nameInput" name="name" />
            </div>
            <div>
               <label > Age: </label>
               <input type="text" id="ageInput" name="age" />
            </div>
            <div>
               <label > Email: </label>
               <input type="email" id="emailInput" name="email" />
            </div>
            <div>
               <button type="submit" id="submitButton"> Submit </button>
            </div>
         </form>
      )
   }
}

export default AddFriendForm;