import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as BR } from 'react-router-dom';

ReactDOM.render(<BR><App /></BR>, document.getElementById('root'));
registerServiceWorker();
