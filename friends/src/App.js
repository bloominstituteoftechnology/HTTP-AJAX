import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

const App = () => {

    return (
      <div>
       <Navbar />
       <div className = "container">
          <Main />
       </div>
       <div class="fixed-action-btn">
          <Link to="/friends/add" className="btn-floating btn-large red"><i class=" fas fa-plus"></i></Link>
       </div>
      </div>
    );
}

export default App;
