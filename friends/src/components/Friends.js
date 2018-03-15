import React from  'react';
import PropTypes from 'prop-types';


function Friends(props) {
    console.log(props);
    return (
        <div className="Friends"> 
            <ul className="Friend__List">
                {props.friends.map(friend => {
                    return (
                        <li key={friend.id} className="Friend">
                            <div className="Friend__Name">{friend.name}</div>
                            <div className="Friend__Age">{`Age: ${friend.age}`}</div>
                            <div className="Friend__Email">{`Email: ${friend.email}`}</div>
                            <button onClick={() => { props.onDelete(friend.id); }}> Delete </button>
                        </li>
                        );
                })}
            </ul>
        </div>
    );
}

Friends.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
};

Friends.propTypes = {
    friends: PropTypes.array.isRequired,
};


export default Friends;