import React, { Component } from 'react';
import Info from './components/info/Info.jsx'
import PersonalInfo from './components/personalinfo/PersonalInfo.jsx';
import WorkHistory from './components/workhistory/WorkHistory.jsx';
import Project from './components/project/Project.jsx';
import Dicon from './images/64x64icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <PersonalInfo />
        <WorkHistory />
        <Project image={Dicon} alt="default image"/>
      </div>
    );
  }
}

export default App;
