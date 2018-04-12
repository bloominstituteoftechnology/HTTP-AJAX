import React from 'react';

const Friend = (props) => {
    console.log('props', props.match.params.id);
    console.log('friends', props.friend);
    return <div>hi</div>
    // const {id, name, age, email} = props.friend;
    // return <Container>
    //     <Row className="friendsRow">
    //       {props.friends.map(friend => {
    //         return <Link key={friend.id} to={`/friends/${friend.id}`} className="friendCard">
    //             <Col sm="12">
    //               <Card body>
    //                 <CardTitle>Name: {friend.name}</CardTitle>
    //                 <CardText>Email: {friend.email}</CardText>
    //               </Card>
    //             </Col>
    //           </Link>;
    //       })}
    //     </Row>
    //   </Container>;
}

export default Friend;