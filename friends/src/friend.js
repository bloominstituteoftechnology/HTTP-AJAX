import React, { Component } from "react";


const Friend=(props)=> {
        return (
            <div>
                <div> ID: {props.friend.id}</div>
                <div> Name: {props.friend.name}</div>
                <div> Age: {props.friend.age}</div>
                <div> Email: {props.friend.email}</div>
            </div>
        );
  }
  
 

export default Friend;