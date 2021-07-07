import React from "react";
import styled from 'styled-components'
import Person from './Person'
import { Link } from 'react-router-dom';

const Grid = styled.div`
    display: grid;
    margin:  0;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
`
const Card = styled.div`
    margin: 25px 25px;
    padding: 24px;
    background: white;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    height: 50px;
`

const FriendsList = props => {
  return (
    <Grid>
      {props.friends.map(personOb => <Card><Person key={personOb.id} {...personOb} /></Card> )
      }
      <Card>
      <Link to="/new"><div>Add New Friend</div></Link>
      </Card>
    </Grid>
  );
};

export default FriendsList;
