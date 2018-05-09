import react {Component} from 'react';

const Friends => { //used example from react-friends project
  return (
    <div>
    {friends.map(friend=> {
      return (
        <div key={friend.name + friend.age + friend.email}>
        </div>
      );
    })}
    </div>
  );
};
export default Friends;
