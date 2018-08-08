import React from 'react' 
import './friendsContainer.css'
import axios from 'axios'

export default function FriendsContainer (props){
    const friends = props.friends

    return (
        <div className="friendsList">
        {friends.map(friend => 
            <div key={friend.id} className="friendsCard">
                <div className="data">
                    <div><strong>Name:</strong> {friend.name}</div>
                    <div><strong>Age:</strong> {friend.age}</div>
                    <div><strong>Email:</strong> {friend.email}</div>   
                </div>
                <button id={friend.id} onClick={update}>Update</button>
                <button id={friend.id} onClick={remove}>Delete</button>
            </div>
        )}
        </div>
    )
}

function update (event){
    console.log(event.target.id)

}

function remove (event){
    const id = event.target.id
    const URL = `http://localhost:5000/friends/${id}`
    console.log(URL)
    axios.delete(URL).then(res => console.log(res))
}
