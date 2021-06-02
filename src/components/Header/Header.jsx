import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return(
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Blue_compass_rose.svg" alt="logo"/>
      </div>
    </header>
  )
}

export default Header;