import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <Button onClick={() => props.delete(datum.id)} >Delete</Button>
          <Link to={`/update/${datum.id}`}><Button onClick={props.update} >Update</Button></Link>
        </Jumbotron>
      );
    })}

    <Link to="/new"><Button>New Friend</Button></Link>

    </div>
  );
  else return(<div></div>)
})

export default FriendsView
