import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class FriendEdit extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: Number(props.match.params.id),
            name: '',
            age: '',
            email: ''
        };
    }

    componentDidMount = () => {
        console.log('cdm state', this.state)
        axios.get('http://localhost:5000/friends')
        .then(response => {
            let currentName, currentAge, currentEmail;

            response.data.forEach(friend => {                
                if (this.state.id  === friend.id) {
                    console.log('reached')
                    currentName = friend.name;
                    currentAge = friend.age;
                    currentEmail = friend.email;
                }
            })
            this.setState({ name: currentName, age: currentAge, email: currentEmail });
        })
        .catch(err => {
          console.error(err);
        });
    }
    
    render() {
        return (
            <div>
                {console.log('render state',this.state)}
                <Link to="/" >
                    <button className="button button-return"> Return </button>
                </Link>
            </div>
        );
    }
};

export default FriendEdit;