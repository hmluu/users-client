import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

import Profiles from './containers/Profiles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/profiles" component={ Profiles } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
