import React, { Component } from 'react';
import './App.css';
import Form from "./List/Form";



class App extends React.Component{
constructor() {
    super();
    this.state = {
    };
  }


	
 
  render() {
    return (
      <div className="App main-container">
	    <Form />
      </div>
    );
  }
}

export default App;
