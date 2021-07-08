import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="FriendsDiv">
            <h1>FriendsList</h1>
            <Link to="/friends" className="FriendsLink">View Friends</Link>
        </div>
    )
}

export default Home;