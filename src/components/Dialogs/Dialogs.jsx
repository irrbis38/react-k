import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialogItem + ' ' + s.activeItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const MsgItem = (props) => {
  return (
    <div className={s.msgItem}>{props.msg}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <DialogItem name='Anna' id='1' />
        <DialogItem name='Alina' id='2' />
        <DialogItem name='Roma' id='3' />
        <DialogItem name='Mother' id='4' />
        <DialogItem name='Sister' id='5' />
      </div>
      <div className={s.msg}>
        <MsgItem msg='Hello!' />
        <MsgItem msg='How are you?' />
        <MsgItem msg="I'm fine!" />
      </div>
    </div>
  )
}

export default Dialogs;