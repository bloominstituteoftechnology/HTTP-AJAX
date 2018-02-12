import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Friends from './Friends';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Friends />, document.getElementById('root'));
registerServiceWorker();
