import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

class FriendsList extends Component {
   constructor() {
      super();
      this.state = {
         friends : [],
      }
   }

   componentDidMount() {
      axios.get('http://localhost:5000/friends').then(response => {
         console.log(response);
         this.setState({ friends : response.data});
      }).catch(error => console.log(error));
   }
   render() {
   return (
      <div>
         <h2 className="friend-title">Lambda Friends</h2>
         <div className="friend-list">
            {this.state.friends.map(friend => {
               return (
                  <Card key={friend.id} className="friend">
                     <CardBody>
                        <CardTitle className="friend-name">{friend.name}</CardTitle>
                        <CardText className="friend-age">{`Age: ${friend.age}`}</CardText>
                        <CardText className="friend-email">{`Email: ${friend.email}`}</CardText>
                     </CardBody>
                  </Card>
               );
            })}
         </div>
      </div>
   )
   }
}

export default FriendsList;