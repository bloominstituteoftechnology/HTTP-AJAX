import React, { Component } from 'react';
import { Route,Link} from "react-router-dom";
import Home from "./components/Home"


import FriendList from "./components/FriendList";

class FirstPage extends Component {




    render() {
        return (
            <div className="App">
                <FriendList/>
            </div>
        );
    }
}

export default FirstPage;