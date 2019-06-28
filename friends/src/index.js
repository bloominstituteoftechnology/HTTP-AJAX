import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
    <App />,
</Router>,
document.getElementById('root'));
=======
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 68377a60ed6f9fca0ce42ab525503fd2c1cf4490
