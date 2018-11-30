import React from 'react';


class addFriend extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        if(this.props.info.length === 0){
            return (<h3>Loading...</h3>);
        }
        else {
            const selectedFriend = this.props.info.data.find( friend => `${friend.id}` === this.props.match.params.friendId);
            console.log(selectedFriend);

            return (
                <div className='addFriend-container'>
                <form id='inputForm'>
                        <div className='friendInfo-input-container'>
                            <input 
                                className='inputFields'
                                type="text" 
                                placeholder={this.props.updateFriend ? 'Update Name' : 'Add Friend Name'} 
                                name='inputName'
                                value={this.props.info.inputName}
                                // value={this.props.updateFriend ?  this.props.info.data[`${this.props.match.params.friendId}`].name : this.props.info.inputName }
                                onChange={this.props.handleChange}
                            />
                            <div className='ageInput-container'>
                                <input 
                                    className='slider-input'
                                    type="range" 
                                    min='1'
                                    max='110'
                                    maxLength='3'
                                    placeholder={this.props.updateFriend ? 'Update Age' : 'Add Friend Age'}
                                    name='inputAge'
                                    value={this.props.info.inputAge}
                                    onChange={this.props.handleChange}
                                />
                                <input 
                                        className='slider-value-container'
                                        type="text"
                                        placeholder='Age'
                                        disabled
                                        value={this.props.info.inputAge}
                                />
                            </div>
                            <input 
                                className='inputFields'
                                type="email" 
                                placeholder={this.props.updateFriend ? 'Update Email' : 'Add Friend Email'}
                                name='inputEmail'
                                value={this.props.info.inputEmail}
                                onChange={this.props.handleChange}
                            />
                        </div>

                        <div className='button-container'>
                            <button onClick={() => 
                                {
                                    this.props.updateFriend ? 
                                        this.props.updateFriend(this.props.match.params.friendId, this.props.info.inputName, this.props.info.inputAge, this.props.info.inputEmail) : 
                                        this.props.addFriend(this.props.info.inputName, this.props.info.inputAge, this.props.info.inputEmail)
                                    
                                    this.props.history.push('/friends');
                                }
                            }>
                                {this.props.updateFriend ? 'Update Friend' : 'Add Friend'}
                            </button>
                            <button onClick={this.props.clearFields}>Clear</button>
                        </div>                
                    </form>
                </div> 
            );
        }
        // const selectedFriend = this.props.info.find( friend => `${friend.id}` === this.props.match.params.friendId);
        // console.log(selectedFriend.name);

        
    }
}

export default addFriend;