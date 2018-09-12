// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './Friend.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const Friend = (props) => {
    return(
        <div className = 'friend'>
            <Card>
                <CardHeader>Friend #{ props.friend.id }</CardHeader>
                <CardBody>
                    <CardTitle>{ props.friend.name }</CardTitle>
                    <CardText>
                        { props.friend.age } years old<br />
                        Email: { props.friend.email }
                    </CardText>
                </CardBody>
                <CardFooter>Favorite color: { props.friend.color }</CardFooter>
            </Card>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        color: PropTypes.string
    })
}

export default Friend;
