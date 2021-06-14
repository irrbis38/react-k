import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    <div className={s.friends__item}>
      <div className={s.friends__wrapper}>
        <div className={s.friends__icon}></div>
        <div className={s.friends__name}>{props.name}</div>
      </div>
    </div>
  )
}

export default FriendsItem;