import React from 'react';

class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            deleteFriend: null
        }
    }
    deleteFriend = () => {
        this.props.deleteFromServer(this.props)
    }
    
    render() {
        // console.log(this.props)
        return(
            <div className="App">
                <div>                        
                    <h4>{this.props.name}</h4>
                    <h4>Age: {this.props.age}</h4>
                    <h4>Email: {this.props.email}</h4>
                    <button onClick = {this.deleteFriend}>Delete</button>

                </div>


            </div>
        )
    }
}

export default FriendCard;