import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>My Lambda Friends Homepage</h1>
            <h4>Lambda FSW PT3</h4>
            <Link to="/friends">Enter</Link>
        </div>
    )
}

export default Home;