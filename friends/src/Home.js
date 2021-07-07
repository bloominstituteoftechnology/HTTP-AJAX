import React, {Fragment} from 'react';
import Form from './Form';
import Friends from './Friends';

export default function Home(props) {
    return (
        <Fragment>
            <Form updateFriends={props.updateFriends} />
            <Friends delete={props.delete} friends={props.friends} />
        </Fragment>
    );
}