// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const MainPage = (props) => {
    return(
        <div className = 'container fade-in'>
            <h1>Welcome to your Friends App!</h1>
            <h3>You currently have { props.friends.length } friends.</h3>

            <div className = 'slide-left'>
                <Link to = '/postfriend'>
                    <Button color = 'primary'>Add New Friend</Button>
                </Link>
                <Link to = '/friendslist'>
                    <Button color = 'info'>View Friends List</Button>
                </Link>
            </div>
        </div>
    );
}

MainPage.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        color: PropTypes.string
    })),
    history: PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string,
            hash: PropTypes.string,
            key: PropTypes.string,
        }),
        createHref: PropTypes.func,
        push: PropTypes.func
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    }),
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool
    })
}

export default MainPage;
