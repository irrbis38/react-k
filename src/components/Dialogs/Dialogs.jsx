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

  const dialogsData = [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Alina' },
    { id: 3, name: 'Roma' },
    { id: 4, name: 'Mother' },
    { id: 5, name: 'Sister' }
  ];

  const msgData = [
    { msg: 'Hello!' },
    { msg: 'How are you?' },
    { msg: 'I am fine!' },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.msg}>
        <MsgItem msg={msgData[0].msg} />
        <MsgItem msg={msgData[1].msg} />
        <MsgItem msg={msgData[2].msg} />
      </div>
    </div>
  )
}

export default Dialogs;