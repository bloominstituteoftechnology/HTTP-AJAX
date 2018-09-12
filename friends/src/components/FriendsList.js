import React from 'react';

function FriendsList ({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-info">
      
        <div className="friend-name">
          Name: {name}
        </div>
        <div className="friend-age">
          Age: {age}
        </div>
        <div className="friend-email">
            Email: {email}        
        </div>
      </div>
    );
  }
  
  export default FriendsList;