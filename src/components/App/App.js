import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movie from '../Movie/Movie'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path ='/' component={Movie}/>
        <Route path = '/Details' component={Details}/>
        <Route path ='/Edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default App;
