import React, { Component } from 'react';

class FriendsForm extends Component {

    constructor() {
        super();
        this.state = {
          name: '',
          age: '',
          email: '',
        };
      }

 
      // handlechange = e => {
      //   if e.target.name === name 
      // }

  render() {

    return (
      <div className="FriendsForm">
        <p>And we say so, and we know so.</p>
        
            <form>
                <input>
                
                </input>
            </form>
      </div>

    );
  }
}

export default FriendsForm;
