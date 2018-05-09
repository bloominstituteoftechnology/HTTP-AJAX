import React from 'react'
import { Link } from 'react-router-dom'

const AddFriend = props => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input value={props.name} onChange={props.function} className="form-control" type="text" name='name' />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input value={props.age} onChange={props.function} type="number" name='age' />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input value={props.email} onChange={props.function} type="email" name='email' />
                </div>
                <button onClick={props.function2} className="btn btn-primary">Add Friend!</button>
                <Link className="btn btn-primary" to="/">Back to List!</Link>
            </form>
        </div>
    );
}

export default AddFriend;