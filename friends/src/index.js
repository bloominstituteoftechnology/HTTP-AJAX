import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendsList from './FriendsList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FriendsList />, document.getElementById('root'));
registerServiceWorker();
