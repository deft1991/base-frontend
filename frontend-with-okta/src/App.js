import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './ru.deft.base/AppWithRouterAccess';

class App extends Component {
  render() {
    return (
        <Router>
          <AppWithRouterAccess/>
        </Router>
    );
  }
}

export default App;
