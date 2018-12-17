import React, { Component } from 'react';
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Header from '../Header/Header.jsx'
import Admin from '../Admin/Admin.jsx'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/admin" exact component={Admin} /> 
          <Route path="/" exact component={ProjectList} />
        </div>
      </Router>
    );
  }
}

export default App;
