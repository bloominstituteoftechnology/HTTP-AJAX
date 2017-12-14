import './Friend.css'
import React, { Component } from 'react';
import { delFriend } from '../../actions';
import { connect } from 'react-redux';

class Friend extends Component {
    constructor() {
        super();
        this.state = {
            image: 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2013/02/friends-2.png'
        }
    }

    componentDidMount() {
        // switch (this.props.friend.name) {
        //     case 'Ryan':
        //         this.setState({ image: 'https://lambdaschool.com/assets/img/ryan.jpg' });
        //         break;
        //     case 'Sean':
        //         this.setState({ image: 'https://lambdaschool.com/assets/img/sean.jpg' });
        //         break;
        //     case 'Ben':
        //         this.setState({ image: 'https://lambdaschool.com/assets/img/ben.jpg' });
        //         break;
        //     case 'Michelle':
        //         this.setState({ image: 'http://www.streamwoodiucc.org/wp-content/uploads/2012/08/image-preview-2.jpg' });
        //         break;
        //     case 'Austen':
        //         this.setState({ image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/081/3ad/3c554d2.jpg' });
        //         break;
        //     default:
        //         return;
        // }
    }
    handleDel = (event) => {
        this.props.delFriend(this.props.index);
    }

    render() {
        return (
            <div className='Friend'>
                <div className='Friend__Field'>
                    <img src={this.state.image} alt='Friend' />
                    <button className='DelButton' onClick={this.handleDel}>X</button>
                </div>
                <div className='Friend__Field'>
                    <div className='FieldDesc'>Name: </div>
                    <div className='FieldValue'>{this.props.friend.name}</div>
                </div>
                <div className='Friend__Field'>
                    <div className='FieldDesc'>Age: </div>
                    <div className='FieldValue'>{this.props.friend.age}</div>
                </div>
                <div className='Friend__Field'>
                    <div className='FieldDesc'>Email: </div>
                    <div className='FieldValue'>{this.props.friend.email}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { delFriend })(Friend);
