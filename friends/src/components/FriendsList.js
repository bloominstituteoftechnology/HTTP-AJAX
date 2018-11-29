import React from 'react';
import { Route, NavLink, Link} from 'react-router-dom';
import axios from 'axios';

import Friend from './Friend';

// class FriendsList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             friends:[],
//         }
//     }

//     componentDidMount() {
//         axios
//             .get('http://localhost:5000/friends')
//             .then(res => {
//                 console.log('Response', res.data)
//                 this.setState(() => ({ friends: res.data }));
//             })
//             .catch(error => {
//             console.error('Server Error', error);
//             });
//     }

//     render() {
//         return (
//             <div className="friends-list">
//                 {this.state.friends.map(
//                     friend => (
//                         <div className="friend-card" key={friend.id}>
//                             <h4>{friend.name}</h4>
//                             <p>{friend.age}</p>
//                             <p>{friend.email}</p>
//                         </div>
//                     )
//                 )}
//             </div>
//         )
//         }
    
// }

const FriendsList = props => {
    console.log('FriendList', props.friends)
    return (
        
        <div className="friends-list">
            
            {props.friends.map(
                friend => ( 
                    <NavLink
                        exact 
                        to={`/friends/${friend.id}`}
                        onClick={() => props.history.push(`/friends/${friend.id}`)}
                        className="friend-card"
                        key={friend.id}
                        
                    >
                    
                        <h2>{friend.name}</h2>
                    </NavLink>
                ) 
            )}
        </div>
    )
    
    
}

export default FriendsList;