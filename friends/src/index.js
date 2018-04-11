import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Friends from './Friends';
import AddFriend from './AddFriend';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Router>
        <div>
            <Router exact path='/' component={Friends} />
            <Router path='friend' component={AddFriend} />
        </div>
    </Router>
, document.getElementById('root'));
