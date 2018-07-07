import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import ProgramesTable from '../ProgrameTable/ProgrameTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProgramesTable />
      </div>
    );
  }
}

export default App;
