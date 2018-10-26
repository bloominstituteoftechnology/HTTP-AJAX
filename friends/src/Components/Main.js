import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Friends from './Friends';
import About from './About';
import AddFriend from './AddFriend';

const Main = () => {
 
    return (
      <div>
       <switch>
           <Route exact path='/' component={Friends} />
           <Route exact path='/about' component={About} />
           <Route exact path='/friends/add' component={AddFriend} />
       </switch>
      </div>
    );
}

export default Main;