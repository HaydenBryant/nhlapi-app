import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import HockeyApp from './components/HockeyApp.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HockeyApp />
      </div>
    );
  }
}


export default App;