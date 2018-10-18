import React from 'react';
import Avatar from './Avatar';



const FriendCard = props => {
  let classList = 'friend-card ';
  if (props.id % 6 === 0){
    classList += 'six'
  } else {
    if (props.id % 5 === 0){
      classList += 'five'
    } else {
    if (props.id % 4 === 0){
      classList += 'four'
    } else {
      if (props.id % 3 === 0) {
        classList += 'three'
      } else {
        if (props.id % 2 === 0) {
          classList += 'two'
        } else {
          if (props.id % 1 === 0) {
            classList += 'one'
          }
        }
      }
    }
  }
}
  return(
      <div className={classList}>
        <div onClick={props.handleDelete}
        className='delete-button'>
          <i className="fas fa-trash-alt" />
        </div>
        <div className='avatar'>
        <Avatar avatar={props.avatar} />
      </div>
        <p>{props.name}</p>
        <p>age: {props.age}</p>
        <p>{props.email}</p>
        <div onClick={props.handleEdit} className='edit-button'>
          <i className="fas fa-edit"/>
        </div>
        </div>

  )
}
export default FriendCard;
