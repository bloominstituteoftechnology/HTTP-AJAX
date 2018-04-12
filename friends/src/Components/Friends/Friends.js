import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Container, Row, Col} from 'reactstrap';
import './Friends.css';
import FriendForm from '../FriendForm/FriendForm';

const Friends = props => {
    console.log(props);
    return <div>
        <h1 className="friendsHeader">Friends List</h1>
        <FriendForm handleNewFriend={props.handleNewFriend} addFriend={props.addFriend} state={props.state} />
        <Container>
          <Row className="friendsRow">
            {props.friends.map(friend => {
              return <Link key={friend.id} to={`/friends/${friend.id}`} className="friendCard">
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Name: {friend.name}</CardTitle>
                      <CardText>Email: {friend.email}</CardText>
                    </Card>
                  </Col>
                </Link>;
            })}
          </Row>
        </Container>
      </div>;
}

export default Friends;