import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

// const Button = styled.a`
//   display: inline-block;
//   border-radius: 4px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 0rem;
//   width: 11rem;
//   background: green;
//   color: white;
//   border: 2px solid white;
// `;

const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0rem;
  width: 50%;
  background: white;
  color: black;
  border: 1px solid black;
  text-align: left;
`;


class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: '', 
      
    };
  }
 



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return ( 
      <div className="formDiv">
        <form className="formForm" onSubmit={event =>  this.props.addNewFriend(event, this.state) }>
        <h1>Add a New Friend</h1>
          <Input
            className="styled.input"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="  friend's name"
            onChange={this.handleChange}
          />
  
          <Input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="  friend's age"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="  friend's email"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );

  }
  
};

export default FriendForm;

