import React, { Component } from 'react';


export default class FriendsForm extends Component {
  render() {
    return (
       <div className="friends-form"> 
        <form>
            <label>
                ID:
                <input type="text" name="id" />
            </label>
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
    );
  }
}
 
