import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledFriendForm = styled.form`
  max-width: 60%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    padding: 5px;
  }
`;

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      email: '',
    };
  }

  handleChange = e => {
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    console.log('submit');
    e.preventDefault();
    const newFriend = {...this.state, id: Date.now()};
    this.setState({ name: '', age: '', email: ''})
    this.props.addFriend(newFriend);
  };

  render() {
    return (
      <StyledFriendForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </StyledFriendForm>
    );
  }
}

//export const EditForm = props => {
//return (
//<StyledFriendForm onSubmit={() => props.updateFriend(props.match.params.id)}>
//<input type="text" placeholder='' name='name' />
//<input type="number" placeholder='' name='age' />
//<input type="email" placeholder='' name='email' />
//<input type="submit" />
//</StyledFriendForm>

//)
//}

export default FriendForm;
