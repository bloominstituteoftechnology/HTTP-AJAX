import React from 'react';
import { Button, Segment, Form , Modal} from 'semantic-ui-react';

class UpdateForm extends React.Component {
  state = {
    name: this.props.friend.name,
    age: this.props.friend.age,
    location: this.props.friend.location,
    email: this.props.friend.email,
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onUpdate = e => {
    e.preventDefault();
    const friend = {...this.state};
    this.props.updateFriend(this.props.friend.id, friend);
    this.props.close();
  }

  render() {
    const { open, close } = this.props;
    const { name, age, location, email } = this.state

    return (
        <Modal open={open} onClose={this.close}>
          <Modal.Header>Update {this.props.friend.name}'s Info</Modal.Header>
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
            <Button onClick={close}>
              Cancel
            </Button>
            <Button
              primary
              icon='checkmark'
              labelPosition='right'
              content="Update"
              onClick={this.onUpdate}
            />
          </Modal.Actions>
        </Modal>
    );
  }
}

export default UpdateForm;