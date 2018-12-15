import React, { Component } from 'react';
import './App.css';
import ProjectList from '../ProjectList/ProjectList'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Project Page</p>
        <ProjectList />
      </div>
    );
  }
}

export default App;
