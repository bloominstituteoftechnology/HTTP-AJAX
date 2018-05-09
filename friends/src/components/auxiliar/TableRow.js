import React from 'react';

const TableRow = ({...props}) => {
    console.log(props);
    // console.log(id,name,age,email);
    return (
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    );
};

export default TableRow;