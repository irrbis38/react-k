import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
    <div>
      <div className={s.post}>
        {props.msg}
      </div>
      <div className={s.likesCounter}>
        <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-512.png" alt="like logo" className={s.post__img} />
        <span>{props.likesCounter}</span>
      </div>
    </div>
  )
}

export default Post;