import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './Display'
import Appp from './Stuff';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
  <Route path="/" component={Appp} />



    </div>
)


export default App;

