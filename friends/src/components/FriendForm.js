import React from 'react';

const FriendForm = props => {
  return(
    <form onSubmit={props.submit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.name}
        placeholder="Enter Name"
        onChange={props.input}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        name="age"
        id="age"
        value={props.age}
        placeholder="Enter Age"
        onChange={props.input} />
      <label htmlFor="email">eMail: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={props.email}
        placeholder="Enter E-Mail"
        onChange={props.input} />
      <input type="submit" />
    </form>
  );
}

export default FriendForm;
