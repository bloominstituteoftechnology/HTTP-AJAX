import React from 'react';

import { ReactComponent as Delete } from '../../assets/svgs/delete.svg';
import { ReactComponent as Edit } from '../../assets/svgs/edit.svg';
import styles from './Friend.module.css';

const bC = ['#e3f2fd', '#fce8e6', '#fff8e1', '#e8f5e9'];
const c = ['#4285f4', '#db4437', '#f4b400', '#0f9d58'];

const Friend = ({ friend, index, deleteFriend }) => {
  const handleClick = () => {
    deleteFriend(friend.id);
  };

  return (
    <li className={styles.card}>
      <div
        className={styles.header}
        style={{
          backgroundColor: bC[index < 4 ? index : index % 4],
          color: c[index < 4 ? index : index % 4]
        }}
      >
        <h2 className={styles.name}>{friend.name}</h2>
        <div className={styles.delete} onClick={handleClick}>
          <Delete />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Age: {friend.age}</div>
        <div className={styles.text}>{friend.email}</div>
      </div>
      <div className={styles.edit}>
        <Edit />
      </div>
    </li>
  );
};

export default Friend;
