import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FriendsList from './components/friendslist.js'

ReactDOM.render(<FriendsList />, document.getElementById('root'));
registerServiceWorker();
