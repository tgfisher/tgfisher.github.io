import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Art from './components/Art/Art';
import Science from './components/Science/Science';
// galleries
import Easteregg from './components/Easteregg/Easteregg';
import Brad from './components/Galleries/Brad';
import HongKong from './components/Galleries/HongKong';
import Portraits from './components/Galleries/Portraits';
import SFArchitecture from './components/Galleries/SFArchitecture';
import SammyPhotowalk from './components/Galleries/SammyPhotowalk';
import TwentyTwenty from './components/Galleries/TwentyTwenty';
import TianTan from './components/Galleries/TianTan';
import ChinaMotion from './components/Galleries/ChinaMotion';
import NightWalk from './components/Galleries/NightWalk';
import SanFranColor from './components/Galleries/SanFranColor';
import Farmwalk from './components/Galleries/Farmwalk';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/easteregg" component={Easteregg} />
          <Route exact path="/hongkong" component={HongKong} /> 
          <Route exact path="/portraits" component={Portraits} />
          <Route exact path="/sfarchitecture" component={SFArchitecture} />
          <Route exact path="/twentytwenty" component={TwentyTwenty} />
          <Route exact path="/tiantan" component={TianTan} />
          <Route exact path="/chinamotion" component={ChinaMotion} />
          <Route exact path="/nightwalk" component={NightWalk} />
          <Route exact path="/sanfrancolor" component={SanFranColor} />
          <Route exact path="/dead_end" component={Farmwalk} /> 
          {/* ------------- retired galleries ------------- */}
          <Route exact path="/brad" component={Brad} /> 
          <Route exact path="/sammyphotowalk" component={SammyPhotowalk} />
        </div>
      </Router>
    );
  }
}

export default App;
