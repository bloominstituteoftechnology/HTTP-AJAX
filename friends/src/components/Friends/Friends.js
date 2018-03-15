import React from 'react';
import './Friends.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';

const Friends = (props) => {
    return (
        <div className="Friends">
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Link to={`/friends/${props.friend.id}`}>{props.friend.name}</Link> */}
                    {props.friends.map((friend, index) => {
                        return (
                            <tr key={friend.id}>
                                <th scope="row">{index+1}</th>
                                <td><NavLink to={`/friends/${friend.id}`}>{friend.name}</NavLink></td>
                                <td><NavLink to={`/friends/${friend.id}`}>{friend.age}</NavLink></td>
                                <td><NavLink to={`/friends/${friend.id}`}>{friend.email}</NavLink></td>
                            </tr>
                            // <NavLink to={`/friends/${friend.id}`} key={friend.id}>
                            //     <h5>{friend.name}</h5>
                            // </NavLink>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
};

Friends.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};

export default Friends;
