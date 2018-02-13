import React from 'react';
import axios from 'axios';
// import FormComp from './FormComponent';

class Friends extends React.Component {



    render() {
        return (
            <div>
                <ul className="friend-grid">

                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id} className="friend">
                                <div className="friend-name">{friend.name}</div>
                                <div className="friend-age">{`Age: ${friend.age}`}</div>
                                <div className="friend-email">{`Email: ${friend.email}`}</div>
                            </li>
                        );
                    })}
                    <li key="liKey" className="friend">

                    </li>
                </ul>
                <br/><br/><br/>
            </div>
        );
    }

}

export default Friends;
