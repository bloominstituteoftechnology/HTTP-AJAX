import React from 'react';

import { ReactComponent as Delete } from '../assets/svgs/delete.svg';
import { ReactComponent as Edit } from '../assets/svgs/edit.svg';
import styles from './Friend.module.css';

const Friend = ({ friend }) => (
  <li className={styles.card}>
    <div className={styles.header}>
      <h2 className={styles.name}>{friend.name}</h2>
      <div className={styles.delete}>
        <Delete />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.text}>Age: {friend.age}</div>
      <div className={styles.text}>Email: {friend.email}</div>
    </div>
    <div className={styles.edit}>
      <Edit />
    </div>
  </li>
);

export default Friend;
