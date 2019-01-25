import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>My Lambda Friends Homepage</h1>
            <h4>Lambda FSW PT3</h4>
            <NavLink to="/friends">Enter</NavLink>
        </div>
    )
}

export default Home;