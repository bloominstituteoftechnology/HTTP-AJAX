import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import UpdateForm from './UpdateForm';

class FriendCard extends React.Component {
  state = {
    open: false,
  }

  show = dimmer => () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { friend, deleteFriend, updateFriend } = this.props;
    const { open } = this.state;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
           {friend.name}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            Age: {friend.age}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            Location: {friend.location}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            Email: {friend.email}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="ui two buttons">
          <Button 
              onClick={(e) => {
                e.preventDefault();
                deleteFriend(friend.id)
              }}
            >Remove</Button>
            <Button
              primary
              icon='checkmark'
              labelPosition='right'
              content="Update"
              onClick={this.show(true)}
            />
          </div>
        </Card.Content>
        <UpdateForm open={open} friend={friend} close={this.close} updateFriend={updateFriend} />
      </Card>
    );
  }
}

export default FriendCard;