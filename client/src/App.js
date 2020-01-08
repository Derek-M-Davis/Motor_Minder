import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import VehicleList from './components/VehicleList';
import VehicleModal from './components/VehicleModal';
import NoteModal from './components/NoteModal';
import NoteList from './components/NoteList';
import {Container} from 'reactstrap';

import  {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <div className="hero-image">
            <div className="hero-text">
                <h1>Motor Minder</h1>
            </div>
        </div>
          <Container>
            <VehicleModal />
            <VehicleList />
            <NoteModal /> 
            <NoteList />   
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
