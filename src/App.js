import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="content">
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
