import React from 'react';
import axios from 'axios';
import { Button, Segment, Form , Modal} from 'semantic-ui-react';

class InputForm extends React.Component{
  
  state = {
    name: '',
    age: '',
    location: '',
    email: '',
    }

  componentDidMount() {
    if (this.props.update) {
      axios
        .get('http://localhost:5000/friends')
        .then(res => {
          const friend = res.data.filter(friend => friend.id.toString() === this.props.match.params.id);
          
          if (friend.length > 0) {
            this.setState({
              name: friend[0].name,
              age: friend[0].age,
              location: friend[0].location,
              email: friend[0].email,
            })
          }
        })
        .catch(err => {
          console.log('ERR');
        });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const friend = {...this.state};
    this.props.updateFriend(this.props.match.params.id, friend);
    this.props.history.push('/');
  }

  render() {
    const { name, age, location, email } = this.state;
    return (
      <div>
        {this.props.match.params.id}
        <Modal open onClose={this.close}>
          <Modal.Header>Update {this.state.name}'s Info</Modal.Header>
          <Segment>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input type="text" value={name} onChange={this.onChange} name="name" placeholder="Enter name" />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input type="text" value={age}onChange={this.onChange} name="age" placeholder="Enter age" />
              </Form.Field>
              <Form.Field>
                <label>Location</label>
                <input type="text" value={location} onChange={this.onChange} name="location" placeholder="Enter location" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="text" value={email} onChange={this.onChange} name="email" placeholder="Enter email" />
              </Form.Field>
            </Form>
          </Segment>
          <Modal.Actions>
            <Button onClick={ () => {this.props.history.push('/')} }>
              Cancel
            </Button>
            <Button
              primary
              icon='checkmark'
              labelPosition='right'
              content="Update"
              onClick={this.onSubmit}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
 
export default InputForm;