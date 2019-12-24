import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Friends from './friendscomponent';
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom';

ReactDOM.render(<Router><Friends /></Router>, document.getElementById('root'));
registerServiceWorker();
