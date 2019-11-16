import React from "react";

const FriendList = props => {
  return(
    <div>
      {props.data.map(friend => {
                    return (
                            <div key={friend.id}>
                              <div className="card">
                              <img className="card-img-top" src="http://placekitten.com/300/300" alt="placeholder kitten"></img>
                                  <div className="card-body">
                                    <h5 className="card-title">{friend.name}</h5>
                                    <p className="card-text">{friend.age} </p>
                                    <p>{friend.email}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                  </div>
                                </div>
                              </div>

                    );
                })}
            </div>
  )
};

export default FriendList;
