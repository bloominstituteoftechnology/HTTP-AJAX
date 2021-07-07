import React, {Fragment} from 'react';
import Form from './Form';
import Friends from './Friends';

export default function Home(props) {
    return (
        <Fragment>
            <Form updateAPI={props.updateAPI} />
            <Friends friends={props.friends} />
        </Fragment>
    );
}