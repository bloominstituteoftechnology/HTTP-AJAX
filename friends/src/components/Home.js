import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className="homeBox">
            <h1>Welcome</h1>
            <Link to="/friends">Speak Friend and Enter</Link>
        </div>
    )
}
export default Home;