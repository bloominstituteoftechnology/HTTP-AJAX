import React from 'react';
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
        <Link to ="/friends">
            Your Friends
        </Link>
        </div>
    )
}

export default Home;