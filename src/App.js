import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FramesPage from 'components/pages/FramePage';

import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component={FramesPage} />
      </Router>
    );
    
  }
}

export default App;