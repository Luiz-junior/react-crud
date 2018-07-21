import React, { Component } from 'react';
import API from './api';
import PersonList from './PersonList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PersonList />
      </div>
    );
  }
}

export default App;

