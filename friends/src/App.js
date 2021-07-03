import React from 'react';
import { Route } from 'react-router-dom';

import Friends from './container/Friends';

const App = () => {

    return (
      <Route path="/" component={Friends} />
    );

  }

export default App;
