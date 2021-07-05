import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/friends/:id" component={ Friend } />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
