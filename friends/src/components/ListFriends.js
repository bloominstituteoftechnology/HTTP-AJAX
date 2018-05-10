import React from 'react';
//mport { Route, Link } from 'react-router-dom';

const myFriends = ['henery'];
const ListFriends = () => { 
    return (
    <div>
    <h1>My Friends List</h1>
    <ul>
        {myFriends.map(friend => 
        <li key={friend}>{friend}</li>)}
    </ul>
    </div>
 )  
}


export default ListFriends;

