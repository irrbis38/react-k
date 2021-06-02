import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__menu}>
        <li className={s.nav__item}><NavLink to="/profile" className={s.nav__link} activeClassName={s.activeLink}>Profile</NavLink></li>
        <li className={s.nav__item}><NavLink to="/dialogs" className={s.nav__link} activeClassName={s.activeLink}>Messages</NavLink></li>
        <li className={s.nav__item}><NavLink to="/news" className={s.nav__link} activeClassName={s.activeLink}>News</NavLink></li>
        <li className={s.nav__item}><NavLink to="/music" className={s.nav__link} activeClassName={s.activeLink}>Music</NavLink></li>
        <li className={s.nav__item}><NavLink to="/settings" className={s.nav__link} activeClassName={s.activeLink}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Sidebar;