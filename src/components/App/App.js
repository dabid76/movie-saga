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
  }; // end return
} // end mapStyles

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  }); // end return
} // end bounce

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  }, // end atEnter
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  }, // end atLeave
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  }, // end atActive
} // end bounceTransition

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
    ); // end return
  } // end render
} // end App comoponent

export default App;
