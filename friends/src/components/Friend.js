import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
  height: 10rem;
  max-width: 30rem;
  margin: 1rem auto;
  display: block;
  background-color: #b2bec3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 2px;
  text-align: center;
`

export default class Friend extends React.Component {
  state={
    name: "",
    age: "",
    email: "",
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let name = this.state.name ? this.state.name : this.props.friend.name;
    let age = this.state.age ? this.state.age : this.props.friend.age;
    let email = this.state.email ? this.state.email : this.props.friend.email;

    let updatedFriend = {id: this.props.friend.id, name: name, age: age, email: email};

    this.props.updateFriend(updatedFriend);
    this.setState({
      name: '',
      age: '',
      email: ''
    })

  }

  render() {
    return (
      <FriendWrapper>
       <p>{this.props.friend.name}</p>
       <p>{this.props.friend.age}</p>
       <p>{this.props.friend.email}</p>
            <form onSubmit={this.handleSubmit} id={this.props.friend.id}>
              <input
                onChange={this.handleOnChange}
                name="name"
                type="text"
                value={this.state.name}
                placeholder="Name"
              />
              <input
                onChange={this.handleOnChange}
                type="number"
                name="age"
                value={this.state.age}
                placeholder="Age"
              />
              <input
                onChange={this.handleOnChange}
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
              />
            <button type='submit' value='Submit'>Update</button>
          </form>
          <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>
      </FriendWrapper>
    )
  }
}