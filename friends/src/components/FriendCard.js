import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const FriendCard = ({ friend, deleteFriend }) => {
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
          <Button primary>Update</Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default FriendCard;