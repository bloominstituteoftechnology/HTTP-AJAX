import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component
{
  constructor( props )
  {
    super( props );
    this.state = 
    {
      friends: [],
      name: "",
      age: ""
    };
  }

  componentDidMount()
  {
    axios
      .get( 'http://localhost:5000/friends' )
      .then( response =>
        {
          this.state( () =>
          ( { friends: response.data } ) );
        })
      .catch( ( err ) =>
      {
        console.log( err );
      });
  }

  render()
  {
    return(
      <div>
        { this.state.friends.map( friend => 
          ( <div key = { friend.name } className = { friend.name }>
              { friend.name }
            </div> ) ) 
        }
        
      </div>
    )
  }
}