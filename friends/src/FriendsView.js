import React from 'react';
import { Jumbotron } from 'reactstrap';

const FriendsView = (props => {
  if (props.data) return (
    <div className="friends-view">
    {props.data.map((datum) => {
      return (
        <Jumbotron key={datum.id}>
          <h1 className="display-3">{datum.name}</h1>
          <p className="lead">Age: {datum.age}</p>
          <hr className="my-2" />
          <p>Email: {datum.email}</p>
        </Jumbotron>
      );
    })}


    </div>
  );
  else return(<div></div>)
})

export default FriendsView
