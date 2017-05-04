import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friend extends Component {
  render() {
    return (
      <div className="Friend">
        Single friend
      </div>
    );
  }
}

const mapStateToProps = ({ friends }) => ({ friends });
export default connect(mapStateToProps)(Friend);
