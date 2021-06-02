import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dlg}>
        <div className={s.dlgItem + ' ' + s.activeItem}>Ann</div>
        <div className={s.dlgItem}>Alina</div>
        <div className={s.dlgItem}>Roma</div>
        <div className={s.dlgItem}>Mother</div>
        <div className={s.dlgItem}>Sister</div>
      </div>
      <div className={s.msg}>
        <div className={s.msgItem}>Hello!</div>
        <div className={s.msgItem}>How are you?</div>
        <div className={s.msgItem}>I'm fine!</div>
      </div>
    </div>
  )
}

export default Dialogs;