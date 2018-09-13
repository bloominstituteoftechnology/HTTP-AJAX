import React from 'react';

const DeleteFriend = props => {
  // console.log(params)
  return (
    <div className='form-class'>
      <button onClick={props.delete}>Delete Friend</button>

    </div>
  )
}

export default DeleteFriend
