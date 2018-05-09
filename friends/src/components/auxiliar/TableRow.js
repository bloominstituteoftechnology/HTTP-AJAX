import React from 'react';

const TableRow = ({...props}) => {
    const {id,name,age,email} = props;
    // console.log(id,name,age,email);
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    );
};

export default TableRow;