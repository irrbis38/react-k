import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfo}>
      <div className={s.profileInfo__mainPic}>
        <img src="https://images.unsplash.com/photo-1511747688239-8e3e9a664c11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1877&q=80" alt="panarama" />
      </div>
      <div className={s.profileInfo__description}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;