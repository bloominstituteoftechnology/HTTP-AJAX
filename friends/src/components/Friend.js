import React from 'react';
import {Link} from 'react-router-dom';


const Friend = props => {
  if (props.item){
    return (
      <ol key={props.item.id}>
        <li>{props.item.name}</li>
        <li>{props.item.age}</li>
        <li>{props.item.email}</li>
      </ol>
  )
} else {return ''}
}

export default Friend
