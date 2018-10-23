import React from 'react';
import { Link } from 'react-router-dom';

// import Friend from './Friend';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 880px;
    width: 100%;
`;

const Friends = (props) => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {props.friends.map( friend => {
                        return (
                            <div key={friend.id}>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                                <td>
                                    <Link to={`/friends/${friend.id}`} style={{textDecoration: 'none'}}>More...</Link>
                                </td>

                                {/* <Route path={`/${props.match.path}/${friend.id}`} render={ props =>
                                    <Friend {...props} friends={props.friends}/>
                                }/> */}
                            </div>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export default Friends;