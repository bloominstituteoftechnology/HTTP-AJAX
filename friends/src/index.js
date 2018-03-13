import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import friendList from './component/friendList';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
