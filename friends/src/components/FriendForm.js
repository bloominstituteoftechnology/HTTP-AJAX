import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
  state = {
      name: '',
      age: '',
      email: '',
  };


  render() {
        return (
          <form onSubmit={this.submitHandler}>
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onchange={handleInputChange} 
              />

              <label>Age</label>
              <input
                  type="number" 
                  name="Age" 
                value={this.state.age} 
                onchange={handleInputChange} 
              />

              <label>Email</label>
              <input
                type="email"
                name="email" 
                value={this.state.name} 
                onchange={handleInputChange} 
              />

              <button type="submit">Save Friend</button>
          </form>
        );
    }
    submitHandler = (event) => {
      event.preventDefault(); // prevents reload keeps your state on the page
      const newFriend = { ...this.state, age: }  //makes copy of state then overrides the age property
      axios.post('http://localhost:5000/friends', this.state)  // command to create data
      .then(response =>{
          console.log('response from post', response);
      })
    } )
      .catch(error => {
          console.log('response from post', response);
      });
    
    }


    handleInputChange = event => {
      // event.target is an object that represents the input
      // const { {name, value } = event.target; }  // destructuring
      
      const name = event.target.name;
      let value = event.target.value;  // use let because it changes later

      console.log('input name:', event.target.name) // see the value of the input when the change happens

      // const propName = 'age';

      /*  EXAMPLE SEE TAPE
      const 0 = {
        foo: 'bar',
        [propName]: 7
      }
      */

      console.log('foo property', o)

      this.setState({ name; event.target.value }) //change the value of this.state.name to the value in target

    }
    <button onClick={() => {props.deleteFriend(friend.id)}}>Delete</button>
    <button onClick={props.deleteFriend(friend.id)}>Delete</button>
  }


// controlled components get its value state



http://localhost:5000/friends', // endpoint