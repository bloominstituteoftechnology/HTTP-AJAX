import React from 'react'

const Friend = (props) => {
    return (
        <div className='friend'>
            <form onSubmit={() => props.deleteFriend(props.data.id)}>
                <p>{props.data.name}</p>
                <p>{props.data.age}</p>
                <p>{props.data.email}</p>
                <button>Delete Friend</button>
            </form>
            <form onSubmit={()=> props.editFriend(props.data.id)}>
                <input type='text' name='name' placeholder='name' value={props.name} onChange={props.handleChange2}/>
                <input type='text' name='age' placeholder='age' value={props.age} onChange={props.handleChange2}/>
                <input type='text' name='email' placeholder='email' value={props.email} onChange={props.handleChange2}/>
                <input type='submit' />
            </form>
            
            <hr/>
        </div>
    )
}

export default Friend
