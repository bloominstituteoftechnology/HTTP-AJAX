// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return(
        <Fragment>
            <Link to = '/postfriend'>Add new friend</Link>
            <Link to = '/friendslist'>Go to friends list</Link>
        </Fragment>
    );
}

export default MainPage;
