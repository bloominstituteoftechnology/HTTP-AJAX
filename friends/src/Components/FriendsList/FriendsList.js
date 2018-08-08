import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component{
    constructor() {
        super();
        this.state={
            friends:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(res=>this.setState({friends:res.data}));
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
                        {e.address?<p>{e.address}</p>:null}
                    </div>
                )}
            </div>
        )
    }
}
export default FriendsList;