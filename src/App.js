import React, { Component } from 'react';
import Info from './components/info/Info.jsx'
import PersonalInfo from './components/personalinfo/PersonalInfo.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <PersonalInfo />
      </div>
    );
  }
}

export default App;
