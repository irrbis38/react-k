import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const postsData = [
    { msg: 'Hello! It is my first post!', likesCounter: 20 },
    { msg: 'I like JS and React ))', likesCounter: 15 }
  ]

  return (
    <div>
      <div className={s.myPosts}>
        <h2 className={s.myPosts__title}>My posts</h2>
        <div className={s.myPosts__new}>
          <textarea name="newPost" id="" cols="30" rows="5" placeholder="Write your post..."></textarea>
          <label htmlFor="newPost"><input type="submit" id="newPost" value="Опубликовать" /></label>
        </div>
      </div>
      <div className={s.allPosts}>
        <Post msg={postsData[0].msg} likesCounter={postsData[0].likesCounter} />
        <Post msg={postsData[1].msg} likesCounter={postsData[1].likesCounter} />
      </div>
    </div>
  )
}

export default MyPosts;