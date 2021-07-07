import React, { Component } from 'react';
import './Friends.css'
export default function Friend({friends:{name, age, email, id},friends , deleteFriend, editFriend})

//Please eventually research how the heck deconstruction works cuz its trippy.
    {

    return (
        <div className="friends">

        <h2>{name}</h2>
        <h3>{age}</h3>
        <a href={`mailto:${email}`}>{email}</a>
        <div onClick={() => deleteFriend(id)}>X</div>
        <button onClick={() => editFriend(friends)}>Edit the data!</button>
        </div>
    );




}
