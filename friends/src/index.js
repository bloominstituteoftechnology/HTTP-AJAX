import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card, CardText, CardSubtitle, CardTitle, CardImg } from 'reactstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
