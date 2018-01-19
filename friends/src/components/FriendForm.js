import React from 'react';

export function newFriend() => {
  
  render() {
    return (
      <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label> 
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
}}