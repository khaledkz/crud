import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import ProgrammeTable from '../ProgrammeTable/ProgrammeTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProgrammeTable />
      </div>
    );
  }
}

export default App;
