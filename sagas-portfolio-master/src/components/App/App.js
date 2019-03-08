import React, { Component } from 'react';
import './App.css';
import Project from '../Project/Project';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

    <Router>
      <div>
      <Route exact path="/" component={Project} />
      </div>
    </Router>
        
      </div>
    );
  }
}

export default App;
