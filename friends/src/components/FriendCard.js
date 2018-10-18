import React from 'react';
import Avatar from './Avatar';



const FriendCard = props => {
  let classList = 'friend-card ';
  if (props.id % 5 === 0){
    classList += 'green'
  } else {
    if (props.id % 4 === 0){
      classList += 'blue'
    } else {
      if (props.id % 3 === 0) {
        classList += 'purple'
      } else {
        if (props.id % 2 === 0) {
          classList += 'orange'
        } else {
          if (props.id % 1 === 0) {
            classList += 'red'
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
        <p>email: {props.email}</p>
        <div onClick={props.handleEdit} className='edit-button'>
          <i className="fas fa-edit"/>
        </div>
        </div>

  )
}
export default FriendCard;
