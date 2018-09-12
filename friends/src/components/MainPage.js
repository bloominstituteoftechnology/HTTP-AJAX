// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const MainPage = (props) => {
    return(
        <div className = 'main-page'>
            <h1>Welcome to your Friends App!</h1>
            <h3>You currently have { props.friends.length } friends.</h3>
            
            <div>
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
    }))
}

export default MainPage;
