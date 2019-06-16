import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Art from './components/Art/Art';
import Science from './components/PhotoShow/PhotoShow';
// galleries
import Easteregg from './components/Easteregg/Easteregg';
import Brad from './components/Galleries/Brad';
import China from './components/Galleries/China';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/easteregg" component={Easteregg} />
          <Route exact path="/brad" component={Brad} />
          <Route exact path="/china" component={China} />
        </div>
      </Router>
    );
  }
}

export default App;
