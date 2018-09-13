import React from 'react';
import Axios from 'axios';


 class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
   formChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
   formSubmit = e => {
    e.preventDefault();
    
  };

  addNewFriend = () => {
    Axios.post('http://localhost:5000/friends', this.props.friends)

  }

   render() {
    return (
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.formChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={this.formChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.formChange}
        />
        <button onClick={this.addNewFriend}>Submit</button>
      </form>
    );
  }
}
 
 export default FriendForm;