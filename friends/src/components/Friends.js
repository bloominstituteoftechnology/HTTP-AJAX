import React from 'react';
import Friend from './Friend';

class Friends extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='friends'>
        <p>hi i'm your friendslist!</p>
        <Friend />
      </div>
    )
  }
}

export default Friends;
