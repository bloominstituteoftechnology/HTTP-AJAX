import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    location: '',
    email: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      age: Number(this.state.age) || 0,
      // id: Math.max(...(this.state.friends.map(friend => friend.id))) + 1,
    }

    this.props.addFriend(friend);
    this.setState({
      name: '',
      age: '',
      location: '',
      email: '',
    });

    this.props.history.push('/');
  }

  onCancel = e => {
    e.preventDefault();
    Object.values(this.state).every(item => !item) ?
    this.props.history.push('/'):
    this.setState({
      name: '',
      age: '',
      location: '',
      email: '',
    });
  }

  render() {
    const { name, age, location, email } = this.state;
    return (
    <Segment>
      <Form style={{padding: '20px'}}>
        <Form.Field>
          <label>Name</label>
          <input type="text" value={name} onChange={this.onChange} name="name" placeholder="Enter name" />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="text" value={age} onChange={this.onChange} name="age" placeholder="Enter age" />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input type="text" value={location} onChange={this.onChange} name="location" placeholder="Enter location" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="text" value={email} onChange={this.onChange} name="email" placeholder="Enter email" />
        </Form.Field>
        <Button
          onClick={this.onCancel}>
          {Object.values(this.state).every(item => !item) ? 'Cancel' : 'Clear'}
        </Button>
        <Button primary onClick={this.onClick}>Add Friend</Button>
      </Form>
    </Segment>
    );
  }
}
 
export default FriendForm;