import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
    <div>
      <div className={s.myPosts}>
        <h2 className={s.myPosts__title}>My posts</h2>
        <div className={s.myPosts__new}>
          <textarea name="newPost" id="" cols="30" rows="5" placeholder="Write your post..."></textarea>
          <label htmlFor="newPost"><input type="submit" id="newPost" value="Опубликовать"/></label>
        </div>
      </div>
      <div className={s.allPosts}>
        <Post msg="Hello! It's my first post!" likesCounter="20"/>
        <Post msg="I like JS and React ))" likesCounter="15"/>
      </div>
    </div>
  )
}

export default MyPosts;