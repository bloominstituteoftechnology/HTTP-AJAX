import React from 'react';
import './App.css';
import FriendDetails from './FriendDetails';
import { Route, Switch } from 'react-router-dom';
import FriendCard from './FriendCard';
import FriendEdit from './FriendEdit';

const App = () =>{
  return (
    <div className="App">
      <h1>Welcome my Friends!</h1>
      <Switch>
      <Route exact path="/" component={FriendDetails} />
      <Route path="/friends" component={FriendDetails}/>
      <Route path="friends/:id" component={FriendCard}/>
      <Route path="friends/edit/:id" component={FriendEdit}/>
      </Switch>


   
    </div>
  );
}

export default App;
