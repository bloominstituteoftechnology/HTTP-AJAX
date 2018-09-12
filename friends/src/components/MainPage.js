// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const MainPage = () => {
    return(
        <Fragment>
            <Link to = '/postfriend'>
                <Button color="primary">Add New Friend</Button>
            </Link>
            <Link to = '/friendslist'>Go to friends list</Link>
        </Fragment>
    );
}

export default MainPage;
