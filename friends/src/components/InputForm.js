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
    const { update, match, history } = this.props;

    if (update) {
      // retrieve friends and get friend info to populate
      axios
        .get('http://localhost:5000/friends')
        .then(res => {
          const friend = res.data.filter(friend => (
            friend.id.toString() === match.params.id)
          );

          // check if a friend is found and set state, otherwise return back to home
          if (friend.length > 0) {
            this.setState({
              name: friend[0].name,
              age: friend[0].age,
              location: friend[0].location,
              email: friend[0].email,
            })
          } else {
            window.alert(`Cannot find a friend with id ${match.params.id}`)
            history.push('/')
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
    
    // although friend's id is being pass down for both updating and adding friend,
    // the method in App.js will ignore friend's id in the case of adding friend
    this.props.handleSubmit(friend, this.props.match.params.id);
    this.props.history.push('/');
  }

  render() {
    const { name, age, location, email } = this.state;
    const { history, update } = this.props;
    return (
      <div>
        <Modal open onClose={this.close}>
          <Modal.Header>{update ? `Update ${name}'s Info'` : `Add ${name} as Friend`}</Modal.Header>
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
            <Button onClick={ () => {history.push('/')} }>
              Cancel
            </Button>
            <Button
              primary
              icon='checkmark'
              labelPosition='right'
              content={update ? 'update' : 'add'}
              onClick={this.onSubmit}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
 
export default InputForm;