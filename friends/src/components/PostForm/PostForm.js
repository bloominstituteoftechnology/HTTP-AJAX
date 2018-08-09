import React from 'react';

function PostForm(props) {
  const { handleAddFriend, handleOnChange } = props;
  const { name, age, email } = props.newFormInput;

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={name} placeholder="name" />
      <input type="text" onChange={handleOnChange} value={age} placeholder="age" />
      <input type="text" onChange={handleOnChange} value={email} placeholder="email" />
      <input type="submit" onClick={handleAddFriend} value="submit" />
    </div>
  )
}

export default PostForm;