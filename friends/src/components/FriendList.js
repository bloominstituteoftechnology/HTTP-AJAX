import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class Friend extends React.Component {
//     constructor(props){
//         super(props);

//     }
//     render(){
//     }
// }

const FriendList = props => {
    return(
            <div>
                {props.friends.map(friend => (
                    <div key={friend.id}>
                        <Link to={`/friendslist/${friend.id}`}>{friend.name}</Link>
                        <p>ID: {friend.id}</p>
                        <p>AGE: {friend.age}</p>
                        <p>EMAIL: {friend.email}</p>
                    </div>
                ))}
            </div>
    )
}



FriendList.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    })
}


export default FriendList