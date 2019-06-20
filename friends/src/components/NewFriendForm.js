import React, { Component } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

const StyledInput = styled.input`
  display: block;
  margin: .5rem auto;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid rgba(0, 49, 116, .5);
  width: 15rem;
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  &:focus, &:active {
    outline: none;
    border-bottom: 2px solid rgba(0, 49, 116, .9);
  }
`

const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .1);
  border-radius: .4rem;
`

export default class NewFriendForm extends Component {

  state = {
    name: '',
    age: '',
    email: '',
  }

  addNewFriend = (e) => {
    e.preventDefault()
    this.props.addNewFriend(this.state);
  }

  updateFriend = id => event => {
    event.preventDefault()
    this.props.updateFriend(this.state, id);
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value 
    })
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    let friend;
    if (id) {
      friend = this.props.friends.filter(friend => friend.id === Number(id))[0];
    }

    if (friend) this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email
    })
  }

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        {this.props.isLoading && (<p>...Loading</p>)}
        <h1>{id ? 'Update Friend' : 'Add New Friend'}</h1>
        <StyledForm onSubmit={this.addNewFriend}>
          <StyledInput 
            type='text' 
            value={this.state.name} 
            onChange={this.handleChange('name')} 
            placeholder='Name'
          />
          <StyledInput 
            type='number' 
            value={this.state.age} 
            onChange={this.handleChange('age')} 
            placeholder='Age'
          />
          <StyledInput 
            type='email' 
            value={this.state.email} 
            onChange={this.handleChange('email')} 
            placeholder='Email'
          />
          <StyledButton onClick={id ? this.updateFriend(id) : this.addNewFriend}>
            {id ? 'Update Friend' : 'Add New Friend'}
          </StyledButton>
        </StyledForm>
      </div>
    );
  }
}

