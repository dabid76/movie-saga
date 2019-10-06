import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import { spring, AnimatedSwitch } from 'react-router-transition';


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
}

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>

      <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
        <Route exact path ='/' component={MovieList}/>
        <Route path = '/Details/:id' component={Details}/>
        <Route path ='/Edit/:id' component={Edit}/>
      </AnimatedSwitch>
      </Router>
    );
  }
}

export default App;
