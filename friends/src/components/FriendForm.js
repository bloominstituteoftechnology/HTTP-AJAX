import React from 'react';

import styled from 'styled-components';

const FormContainer = styled.div `
  width: 30%;
  margin: 15px auto;
  border: 1px solid grey;
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    background-color: #ede7e7;

    h2 {
      margin: 0 0 3px;
      color: grey;
    }

    label {
      display: block;
      margin-bottom: -10px;
      z-index: 2;
      background-color: #c5d9fd;
      overflow: hidden;
      width: 16%;
      float: left;
      margin-left: 4%;
    }

    input {
      margin: 0 10px 10px;
      height: 26px;
      text-align: center;
      background-color: #c5d9fd;
      border: none;
      border-radius: 3px;
    }

    button {
      width: 30%;
      height: 24px;
      margin: 10px auto;
      background: none;
      border: 1px solid grey;
      border-radius: 3px;
      box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
      background: #79afe4;
    }
  }
`


class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    if(this.props.update) {
      setTimeout(() => {
        this.setState({ friend: this.props.friend })
      }, 100);
      
    }
    console.log(this.props)
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend);
    this.setState({ 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    })
  }

  putFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend, this.props.id);
    this.setState({ 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
    this.props.history.goBack();
  }

  render() {
    return (
      <FormContainer>
        <form>
          {this.props.create ? <h2>Add a Friend</h2> : <h2>Update this Friend's Info</h2>}
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <label htmlFor="age">Age</label>
          <input 
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <label htmlFor="email">Email</label>
          <input 
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />

          {this.props.create ? <button onClick={this.postFriend}>Create</button> : <button onClick={this.putFriend}>Update</button>}
           
        </form>
      </FormContainer>
    )
  }
}

export default FriendForm;