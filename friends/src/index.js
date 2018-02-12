import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FriendsList from './components/friendslist.js'

ReactDOM.render(<FriendsList />, document.getElementById('root'));
registerServiceWorker();
