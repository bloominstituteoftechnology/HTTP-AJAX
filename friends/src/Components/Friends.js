import React, { Component } from 'react';
import './Friends.css'
export default function Friend({friends, deleteFriend})
    {

    const {name, age, email, id} = friends;

    return (
        <div className="friends">

        <h2>{name}</h2>
        <h3>{age}</h3>
        <a href={`mailto:${email}`}>{email}</a>
        <div onClick={() => deleteFriend(id)}>X</div>
        </div>
    );




}