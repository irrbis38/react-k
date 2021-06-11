import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.messages.map(
    m => <Message msg={m.msg} />
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        {dialogsElements}
      </div>
      <div className={s.msg}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;