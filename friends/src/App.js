import React, { Component } from 'react';
import './App.css';
import Container from "./List/Container";
import {Route} from 'react-router-dom';



class App extends React.Component{
constructor() {
    super();
    this.state = {
    };
  }


	
 
  render() {
    return (
      <div className="main-container">
	    <Container />
	    
      </div>
    );
  }
}

export default App;
