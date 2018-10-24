import React from 'react';

class FriendForm extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
        <section className='App-form'>
            <h1>Form</h1>
            <form>
              <input placeholder="Name"/>
              <input placeholder="Age"/>
              <input placeholder="Email"/>
            </form>
            <button>save</button>
        </section>
        )
    }
}

export default FriendForm