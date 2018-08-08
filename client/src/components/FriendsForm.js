import React from 'react';

const FriendsForm = () => (
  <form>
    <h2>Add new friend</h2>
    <div>
      <input type="text" placeholder="name" name="name" />
    </div>
    <div>
      <input type="number" placeholder="age" name="age" />
    </div>
    <div>
      <input type="email" placeholder="email" name="email" />
    </div>
    <button>Submit</button>
  </form>
);

export default FriendsForm;
