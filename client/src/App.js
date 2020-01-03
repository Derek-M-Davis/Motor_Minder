import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import VehicleList from './components/VehicleList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNavbar />
        <VehicleList />
      </div>
    )
  }
}

export default App;
