import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component{
    constructor() {
        super();
        this.state={
            friends:[],
            loading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(res=>this.setState({friends:res.data,loading:false}));
    }
    render() {
        return (
            <div>
                {this.state.friends.map(e=>
                    <div key={e.id} className='card'>
                        <p>Friend number {e.id} information:</p>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                    </div>
                )}
            </div>
        )
    }
}
export default FriendsList;