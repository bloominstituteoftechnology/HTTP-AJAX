import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);

registerServiceWorker();


//Updated this document to wrap the App inside the Router
