import React, { Component } from 'react';




const UpdateList = (props) => {
    return(
        <div>
     axios.put(`http://localhost:5000/friends/${id}`, { name: props.name, age: props.age, email: props.email })
    .then((data) => this.setState({ friends: data.data, name: '', age: '', email: '' }))
    .catch(err => console.log(err));
        </div>
    )}
export default UpdateList