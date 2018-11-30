import React from 'react';
import Friend from './Friend';

const Friends = (props) => {
  console.log(props.allFriendsList);
  return (
    <div className="friendsListWrapper" >

      {props.allFriendsList.map(amigo => {
        return(
          <div key={amigo.id} className="friendCard">

              <h5>Friend number:{` ${amigo.id} `} </h5>
              <h1>Name:{` ${amigo.name} !`}</h1>
              <p>Age:{amigo.age}</p>
              <p>Email:{amigo.email}</p>
              <p>Id:{amigo.id}</p>
              <button type="" onClick={() => {props.deleteItem(
                props.match.params.id
              );
              props.history.push("/Home");}} >Delete</button>

          </div>

        )
          })}

        );
      

    </div>
    );
}

export default Friends;
