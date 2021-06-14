import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {

  // let friends = [
  //   { name: 'Ann' },
  //   { name: 'Den' },
  //   { name: 'Yuri' }
  // ];

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar friends={props.state.friends} />
      <div className="content">
        <Route path='/profile' render={() => <Profile posts={props.state.posts} />} />
        <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}


export default App;
