import React from 'react';
import { Route, Link } from 'react-router-dom';

import Friend from './Friend';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 880px;
    width: 100%;
`;

const Friends = (props) => {
    const TableRow = ({row}) => (
            <tr>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.email}</td>
                <td>
                    <Link to={`${props.match.url}/${row.id}`} style={{textDecoration: 'none'}}>More...</Link>
                </td>

                <Route path={`${props.match.path}/${row.id}`} render={(props) =>
                                        <Friend {...props} friends={props.friends} />} 
                                    />
            </tr>
    )

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
                        return ( <TableRow row={friend}/>)
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export default Friends;