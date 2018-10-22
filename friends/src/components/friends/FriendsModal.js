import React, { Component, Fragment } from 'react';

import FriendsForm from './FriendsForm';
import { ReactComponent as Close } from '../../assets/svgs/x.svg';
import add from '../../assets/images/add.png';
import styles from './FriendsModal.module.css';

class FriendsModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, edit: false };
  }

  handleOpen = () => {
    return this.state.visible ? null : this.setState({ visible: true });
  };

  handleClose = () => this.setState({ visible: false });

  renderForm = () => {
    return this.state.visible ? (
      <Fragment>
        <div className={styles.close} onClick={this.handleClose}>
          <Close />
        </div>
        <FriendsForm updateFriends={this.props.updateFriends} />
      </Fragment>
    ) : (
      <Fragment>
        <img src={add} alt="add icon" />
        <div className={styles.post}>Post</div>
      </Fragment>
    );
  };

  render() {
    return (
      <div
        className={this.state.visible ? styles.container2 : styles.container1}
        onClick={this.handleOpen}
      >
        {this.renderForm()}
      </div>
    );
  }
}

export default FriendsModal;
