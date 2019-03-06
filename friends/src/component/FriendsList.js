import React from 'react';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: []
         };
    }

    componnetDidMount() {
        axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
            console.log('Server Error', error);
        })
    }
    render() { 
        return (  
            <div className='friends-list'>
                {this.state.friends.map(friend => ())}
            </div>
        );
    }
}
 
export default FriendsList;