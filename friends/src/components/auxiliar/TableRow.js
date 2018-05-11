import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {Badge} from 'reactstrap';

const TableRow = ({...props}) => {
    const {id,name,age,email} = props;
    // console.log(id,name,age,email);
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td><Link to={`/${id}-${name}`} >View</Link></td>
        </tr>
    );
};

/**
 * I refactored this component to a class one, due to a need to
 * use this.state
//  */
// class TableRow extends Component {

//     render() {
//         const {id,name,age,email} = this.props;
//         return (
//             <tr>
//                 <th scope="row">{id}</th>
//                 <td>{name}</td>
//                 <td>{age}</td>
//                 <td>{email}</td>
//                 <td><Link to={`/${id}-${name}`} >View</Link></td>
//             </tr>
//         );
//     }
// }

export default TableRow;