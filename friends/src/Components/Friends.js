import React, { Component } from 'react';

export default function Friend({friends})
    {

    const {name, age, email} = friends;

    return (
        <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <a href={`mailto:${email}`}>{email}</a>
        </div>
    );




}