import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Friends from './Friends';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Friends} />
            <Route path='/friend' component={AddFriend} />
            {/* <Route path='/friend/:id' render={({props}) => (
                <UpdateFriend friend={this.props} />
            )} /> */}
            <Route path='/friend/:id' component={UpdateFriend} />

        </div>
    </Router>
, document.getElementById('root'));
