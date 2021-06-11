import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { msg: 'Hello! It is my first post!', likesCounter: 20 },
  { msg: 'I like JS and React ))', likesCounter: 15 }
];

const dialogs = [
  { id: 1, name: 'Ann' },
  { id: 2, name: 'Alina' },
  { id: 3, name: 'Roma' },
  { id: 4, name: 'Mother' },
  { id: 5, name: 'Sister' }
];

const messages = [
  { msg: 'Hello!' },
  { msg: 'How are you?' },
  { msg: 'I am fine!' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
