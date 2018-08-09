import React from 'react';
import Friend from './Friend';
import { Route, Link } from 'react-router-dom'; 

function FriendList(props) {
  const { friendsArray, handleDeleteFriend } = props;
  return (
    <div>
      { friendsArray.length !== 0
          ? <div>
              <h2>Show friend</h2>
              { friendsArray.map(friend => {
                  const { id } = friend;
                  return (
                    <div>
                      <Link to={`${props.match.url}/${id}`}>Number {`${id}`}</Link>
                    </div>
              )})}
              <Route path={`${props.match.path}/:id`} render={props => <Friend {...props} friendsArray={friendsArray} handleDeleteFriend={handleDeleteFriend} />} />
            </div>
          : <p>Loading</p>
      }
    </div>
  )
}

export default FriendList;