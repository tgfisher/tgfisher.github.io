import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Art from './components/Art/Art';
import Science from './components/Science/Science';
import Easteregg from './components/Easteregg/Easteregg';
import Gallery from './components/Galleries/Gallery';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/easteregg" component={Easteregg} />
          {/* ------------- dynamic showroom ------------- */}
          <Route exact path="/art/:galleryId" component={Gallery} />
          <Route exact path="/art" component={Art} />
        </div>
      </Router>
    );
  }
}

export default App;
