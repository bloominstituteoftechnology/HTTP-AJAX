import React from 'react';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Friends extends React.Component {

    render(){
        return(
            <div>
                <Form/>
            {this.props.friends.map(friend => {
                return(
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{friend.id}</th>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.email}</td>
                        </tr>
                    </tbody>
                    </table>
               
                )
            })}
            </div>
        )
    }
}


export default Friends;