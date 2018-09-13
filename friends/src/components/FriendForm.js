import React from 'react';

const FriendForm = (props) => {
  return ( 
    
    <form className="form">
      <label>
      Name:
    <input type="text"
            onChange={this.handleTextInput}
            placeholder="name"
            name="name"
            // value={this.state.name}
    />
    </label>
    <label>
      Age:
    <input type="text"
            onChange={this.handleTextInput}
            placeholder="age"
            name="age"
            // value={this.state.age}
    />
    </label>
    <label>
      Email:
    <input type="text"
            onChange={this.handleTextInput}
            placeholder="email"
            name="email"
            // value={this.state.email}
    />
    </label>  
    </form>

   );
}
 
export default FriendForm;