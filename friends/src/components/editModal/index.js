import React, {Component} from 'react';
import Styled from 'styled-components';

import FriendForm from '../FriendForm';


const Modal = Styled.section`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export default class extends Component {
  render() {
    return (
      <Modal>
        <FriendForm>
          <close>X</close>
        </FriendForm>
      </Modal>
    );
  }
}
