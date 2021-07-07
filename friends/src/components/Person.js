
import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Person = props => {
  return(
    <div>
      <Link to={`/update/${props.id}`}>{props.name} : {props.email}</Link>
    </div>
  );
}

export default Person;