import React, { Component } from 'react';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
          
        };
      }


      render() {
        return (
    
          
            <div className="App">
              <FriendsList />
              <NewFriendForm />
            
          </div>
        );
      }
}



export default App;
