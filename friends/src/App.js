import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import ShowFriends from "./components/ShowFriends/ShowFriends";
import AddNewFriends from "./components/AddNewFriends/AddNewFriends";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={ShowFriends} />
        <Route
          exact
          path="/add"
          render={props => <AddNewFriends {...props} header="Add New Friend" />}
        />
        <Route
          exact
          path="/edit"
          render={props => <AddNewFriends {...props} header="Edit Friend" />}
        />
      </Router>
    </div>
  );
}

export default App;
