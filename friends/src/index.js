import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendList from './components/FriendList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FriendList />, document.getElementById('root'));
registerServiceWorker();
