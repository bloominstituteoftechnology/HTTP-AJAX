import React from 'react';
import FriendForm from './FriendForm';

const FriendsFormPage = props => {

  let formTitle;
  switch(props.formType) {
    case 'update':
      formTitle = 'Update Friend';
      break;
    case 'delete':
      formTitle = 'Delete Friend';
      break;
    default:
      formTitle = 'Add a Friend';
      break;
  }

  return(
    <div id="friendFormPage">
      <h2>{formTitle}</h2>
      <FriendForm formType={props.formType} onSubmitFriend={props.onSubmitFriend} friends={props.friends} match={props.match} />
    </div>
  )
}

export default FriendsFormPage;
