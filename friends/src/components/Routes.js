import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import Friends from './Friends';
import AddForm from './AddForm';

 const Routes = (props) => {
    let appProps = props;
    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/friends' render = {(props) => <Friends {...props} friends = {appProps.friends}/>}/>
            <Route path = '/add-friend' render = {(props) => <AddForm {...props} formChange = {appProps.formChange} addFriend = {appProps.addFriend}/>}/>
        </div>
    )
}

 export default Routes;