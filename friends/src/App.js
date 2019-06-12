import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import ShowFriends from "./components/ShowFriends/ShowFriends";
import AddNewFriends from "./components/AddNewFriends/AddNewFriends";

function App() {
  return (
    <div className="App">
      <Router>
        <Route 
        exact path='/'
        component={ShowFriends}
        />
        <Route 
        exact path='/add'
        component={AddNewFriends}
        />
      </Router>
    </div>
  );
}

export default App;
