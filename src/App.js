import React, { Component } from 'react';

import LayoutCon from './components/LayoutCon/LayoutCon'
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayoutCon />
        <Login />
      </div>
    );
  }
}

export default App;
