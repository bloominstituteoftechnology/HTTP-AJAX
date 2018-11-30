import React from 'react';
import axios from 'axios';
import { Button, Segment, Header, Card , Modal} from 'semantic-ui-react';

class FriendAlert extends React.Component {

  state = {
    name: '',
    age: '',
    location: '',
    email: '',
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.props.match.params.id);
    this.props.history.push('/');
  }

  componentDidMount() {
    const { match, history } = this.props;

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

  render () {
    const { name, age, location, email } = this.state;
    const { history } = this.props;
    return (
      <Modal style={{ maxWidth: '400px'}} open onClose={this.close}>
        <Modal.Header>{`Alert!`}</Modal.Header>
        <Segment>
          <Header textAlign='center' as="h4">Are you sure you want to remove this friend?</Header>
          <Card centered>
            <Card.Content>
              <Card.Header>
              {name}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                Age: {age}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                Location: {location}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                Email: {email}
              </Card.Description>
        </Card.Content>
          </Card>
        </Segment>
        <Modal.Actions>
          <Button onClick={ () => {history.push('/')} }>
            Cancel
          </Button>
          <Button
            color='red'
            icon='checkmark'
            labelPosition='right'
            content='remove'
            onClick={this.onSubmit}
          />
        </Modal.Actions>
      </Modal>
  )};
}

export default FriendAlert;