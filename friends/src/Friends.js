import React, {Component} from 'react';

class Friends extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
  
    return (
      <div>
      
        {
          this.props.friends.map(friend => {
            return (
              <div key={friend.id}>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>
            )
          })
        }
       
      </div>
    )
  }
}

export default Friends