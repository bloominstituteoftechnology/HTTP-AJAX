import React from 'react';
import edit from '../imgs/edit.png'
import del from '../imgs/x.png'

const Friend = props => {
  let remove = id => {
    props.delete(id)
  };
  return(
    <div className="friend">
      <div className="buttons">
        <img src={edit} alt="edit button" />
        <img onClick={remove(props.id)} src={del} alt="delete button" />
      </div>
      <h4>{props.data.name}</h4>
      <h6>age: {props.data.age}</h6>
      <h6>email: {props.data.email}</h6>
    </div>
  )
}

export default Friend;
