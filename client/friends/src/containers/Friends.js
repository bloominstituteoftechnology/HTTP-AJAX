import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.props.getFriends();
  }

  renderFriend(friend, index) {
    return (
      <div key={index} className="Friend">
        <div className="col-lg-3 col-sm-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              {friend.name}
            </div>
            <div className="panel-body">
              <div><span className="lbl">Email:</span>{friend.email}</div>
              <div><span className="lbl">Age:</span>{friend.age}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { friends } = this.props;
    return (
      <div className="Friends">
        <div className="container">
          <div className="row">
            { friends.map((friend, i) => this.renderFriend(friend, i) )}
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ friends }) => ({ friends });
export default connect(mapStateToProps, { getFriends })(Friends);